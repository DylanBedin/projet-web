exports.config = {
  framework: "jasmine",
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    ex1: "tests/e2e/registerSpec.js",
  },
  capabilities: {
    'browserName': 'chrome'
  },
  seleniumServerJar: "/usr/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.8.1.jar"
}
