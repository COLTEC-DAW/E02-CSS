module.exports = {
  e2e: {
    baseUrl: "http://localhost:8080",
    specPattern: `${process.env.cypressPath}/cypress/integration/**/*.test.js`,
    video: true,
    screenshotsFolder: `${process.env.cypressPath}/cypress/screenshots`,
    videosFolder: `${process.env.cypressPath}/cypress/videos`,
    viewportWidth: 1280,
    viewportHeight: 720,
    supportFile: false,
    reporter: 'junit',
    reporterOptions: {
      mochaFile: `${process.env.cypressPath}/cypress/reports/report-[hash].xml`
    },
  }
}