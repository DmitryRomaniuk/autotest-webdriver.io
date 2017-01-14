exports.config = {
    specs: [
        'test/spec/**.js'
    ],
    //exclude: [
    //    'test/spec/multibrowser/**',
    //    'test/spec/mobile/**'
    //],
    capabilities: [{
        browserName: 'firefox'
    }],
    sync: true,
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: 'shots',
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    //  with "/", the base url gets prepended.
    //baseUrl: 'http://localhost:8080',
    //
    // Default timeout for all waitForXXX commands.
    waitforTimeout: 1000000,
    framework: 'jasmine'
};