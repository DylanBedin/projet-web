exports.config = {
  framework: "mocha",
  specs: ["tests/e2e/**/*Spec.js"],
  capabilities: {
    'browserName': 'chrome'
  },
  seleniumServerJar: "./node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar"
};

