const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // пока оставьте пустым или добавьте только необходимое
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',     // Директория для отчета
      overwrite: false,                 // Не перезаписывать отчет
      html: true,                       // Создавать HTML-отчет
      json: true,                       // Создавать JSON-отчет
    },
  },
});
