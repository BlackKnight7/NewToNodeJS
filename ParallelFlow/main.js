var flow = require('nimble');

flow.parallel([
    function (callback) {
        setTimeout(function () {
            console.log('I execute first.');
            callback();
        }, 5000);
    },
    function (callback) {
        setTimeout(function () {
            console.log('I execute next.');
            callback();
        }, 5000);
    },
    function (callback) {
        setTimeout(function () {
            console.log('I execute last.');
            callback();
        }, 5000);
    }
]);
