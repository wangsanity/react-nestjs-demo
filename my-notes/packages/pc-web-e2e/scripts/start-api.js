const { spawn } = require("child_process");
const { GenericContainer } = require("testcontainers");
const { resolve } = require("path");

const ENV = {
  PORT: 3021,
};

const startDB = async () => {
  console.log("Starting creating container");
  const dbFolder = resolve(__dirname, "../../backend/db");
  const initFolder = "/init";
  const container = await new GenericContainer("postgres:12.4")
    .withName(`e2e-db-${new Date().getTime()}`)
    .withCopyFilesToContainer([
      {
        source: dbFolder + "/on-db-machine/create-db.sh",
        target: `${initFolder}/create-db.sh`,
      },
      {
        source: dbFolder + "/on-db-machine/create-db.psql",
        target: `${initFolder}/create-db.psql`,
      },
    ])
    .withExposedPorts(5432)
    .withEnvironment({
      POSTGRES_USER: "learning",
      POSTGRES_PASSWORD: "learning",
      POSTGRES_DB: "learning",
    })
    .start();

  (await container.logs()).on("data", console.log).on("error", console.error);
  console.log("Starting creating database");
  await container.exec(["sh", `${initFolder}/create-db.sh`]);
  console.log("Database created in container");
  return container;
};

const startBackend = async (dbContainer) => {
  const POSTGRES_HOST = dbContainer.getHost();
  const POSTGRES_PORT = dbContainer.getMappedPort(5432);

  console.log(`db host: ${POSTGRES_HOST}. db port: ${POSTGRES_PORT}.`);
  const migrations = spawn('yarn', ['db:migration:run'], {
    cwd: `../backend`,
    env: {
      ...process.env,
      ...ENV,
      POSTGRES_HOST,
      POSTGRES_PORT
    },
  });

  migrations.on("exit", (code) => {
    if (code > 0) {
      console.error("db migration error");
      process.exit(code);
    }

    console.log("Starting api...");
    const apiProcess = spawn("yarn", ["start"], {
      cwd: "../backend",
      env: {
        ...process.env,
        API_PORT: 3011,
        POSTGRES_HOST,
        POSTGRES_PORT
      },
    });

    apiProcess.stderr.on("data", (data) => {
      console.log("api log:");
      console.log(data);
    });
  });

  return true;
};

const startExternalApi = async () => {
  console.log("Starting mock external api");
  const externalApi = spawn("yarn", ["start:external:api"]);

  externalApi.stdout.on("data", (data) => {
    console.log(data.toString());
  });
  externalApi.stderr.on("data", (data) => {
    console.log("external error: " + data);
  });

  console.log("Mock external api started");

  return true;
};

startDB().then(startBackend).then(startExternalApi).catch(console.error);
