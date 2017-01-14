describe('shtange.github.io/bushed-bricks', function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

    it('crack game', function () {
        browser.url('https://shtange.github.io/bushed-bricks/');
        // var title = browser.getTitle();
        // console.log(title);
        // let j = ['\uE012', '\uE013', '\uE014', '\uE015'];
        let j = ['Left arrow', 'Right arrow', 'Left arrow', 'Right arrow'];
        let k = 0;
        for (let i = 0; i < 1e3; i++) {
            browser.keys(j[k]);
            k++;
            if (k == 4) { k = 0 }
            var one = $('.wrap-step');
            var oneVal = one.getText();
            console.log(oneVal);
            var two = $('.wrap-score');
            var twoVal = two.getText();
            console.log(twoVal);
            browser.timeouts('implicit',100);
            // var step = browser.getValue('.wrap-step');
            // console.log(step);
            // var score = browser.getValue('.wrap-score');
            // console.log(score);
        }
        expect(browser.getText('#score')).toBeGreaterThan(0);
    });

});