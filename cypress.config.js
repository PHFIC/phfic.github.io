const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://127.0.0.1:3000",
    specPattern: [ "cypress/e2e/**/*.cy.{js,jsx,ts,tx}", "test/integration/**/*.{js,jsx,ts,tsx}" ],
    slowTestThreshold: 5000
  }
})
