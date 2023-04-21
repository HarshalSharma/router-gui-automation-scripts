const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  tenda_router_config: {
    routerLoginUrl: 'http://192.168.1.1/admin/login.asp',
    username: 'admin',
    password: 'routerpass123'
  }
});
