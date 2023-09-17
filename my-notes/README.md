# Getting Started with pc-note

This project includes all of the note features.

There are infratructure files and several packages such as pc-web, mobile-web, backend, etc.

## Available Scripts

Runs both backend and front-end start script to make sure the site could be alive locally.

```bash
# Start both front-end and backend
$ yarn start

# Start pc-web
$ yarn ui:start

# Open browser and run e2e tests manually
$ yarn ui:e2e

# Runs e2e tests sliently
$ yarn ui:e2e:headless

# Runs unit test
$ yarn ui:test

# Runs unit test and generate code coverage report
$ yarn ui:test:coverage

# start api
$ yarn api:start

# start api dev mode
$ yarn api:start:dev
```

## Database

```bash
# create db
$ yarn db:create

# db migration
$ yarn db:migration:run

# generate db migration file
$ yarn db:migration:generate
```