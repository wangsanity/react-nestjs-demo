const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        defaultCommandTimeout: 30000,
        requestTimeout: 30000,
        baseUrl: 'http://localhost:3001',
        env: {}
    },
    video: false,
    videoUploadOnPasses: false
});
