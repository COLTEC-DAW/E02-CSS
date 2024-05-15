const cypressPath = process.env.CYPRESS_PATH ? process.env.CYPRESS_PATH : '.';

module.exports = {
  e2e: {
    baseUrl: "http://localhost:8080",
    specPattern: `${cypressPath}/cypress/integration/**/*.test.js`,
    video: true,
    screenshotsFolder: `${cypressPath}/cypress/screenshots`,
    videosFolder: `${cypressPath}/cypress/videos`,
    viewportWidth: 1280,
    viewportHeight: 720,
    supportFile: false,
    reporter: 'junit',
    reporterOptions: {
      mochaFile: `${cypressPath}/cypress/reports/report-[hash].xml`
    },
  }
}