const { spawn } = require('child_process');

const startUI = async () => {
  const uiProcess = spawn('yarn', ['start:e2e'], {
    cwd: '../pc-web',
    env: {
      ...process.env,
      BROWSER: 'none',
      REACT_APP_API_URL: 'http://localhost:3011/api/',
    },
  });

  uiProcess.stderr.on('data', (data) => {
    console.log('ui log:');
    console.log(data);
  });
};

startUI().catch(console.error);
