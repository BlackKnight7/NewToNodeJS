//setTimeout(function () {
//    console.log('first');
//    setTimeout(function () {
//        console.log('second')
//        setTimeout(function () {
//            console.log('Thrid')
//        }, 1000);
//    }, 1000)
//}, 1000)

var flow = require('nimble');

flow.series([
    function (callback) {
        setTimeout(function () {
            console.log('I execute first.');
            callback();
        }, 1000);
    },
    function (callback) {
        setTimeout(function () {
            console.log('I execute next.');
            callback();
        }, 1000);
    },
    function (callback) {
        setTimeout(function () {
            console.log('I execute last.');
            callback();
        }, 1000);
    }
]);
