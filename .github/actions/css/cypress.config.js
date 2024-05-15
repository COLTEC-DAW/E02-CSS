module.exports = {
  e2e: {
    baseUrl: "http://localhost:8080",
    specPattern: `${process.env.CYPRESS_PATH}/cypress/integration/**/*.test.js`,
    video: true,
    screenshotsFolder: `${process.env.CYPRESS_PATH}/cypress/screenshots`,
    videosFolder: `${process.env.CYPRESS_PATH}/cypress/videos`,
    viewportWidth: 1280,
    viewportHeight: 720,
    supportFile: false,
    reporter: 'junit',
    reporterOptions: {
      mochaFile: `${process.env.CYPRESS_PATH}/cypress/reports/report-[hash].xml`
    },
  }
}