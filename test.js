var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};



webdriverio
    .remote(options)
    .init()
    .url('https://shtange.github.io/bushed-bricks/')
    .getValue('.wrap-score')
    .then(function (val) {
        console.log(val);
    })
    .getValue('.wrap-step')
    .then(function (val) {
        console.log(val);
    })
    .then(function () {
        var i=37;
        var gameOver = true;
        while (gameOver) {
            if (i>40) {i=37}
	    console.log(browser.getValue('.wrap-score'))
	    console.log(browser.getValue('.wrap-step'))
            browser.pressKeycode(i);
            i++;
            browser.timeouts('implicit ', 100);
            gameOver = !(browser.isVisible('#game-over'));
        }
        return 'game-over'
    })
    .then(function (val) {
        console.log(val);
    })
    .end();