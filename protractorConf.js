exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        ex_1: './tests/e2e/registerSpec.js',
    }
}
