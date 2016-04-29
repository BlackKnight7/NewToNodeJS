/**
 * Created by tgdev on 29/04/16.
 */
var Promise = require('promise');

var asyncTest1 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('test1');
            reject(1);
        }, 1000)
    });
};

var asyncTest1Failed = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('test1 failed');
            reject(2);
        }, 1000)
    });
};

var asyncTest2 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('test2');
            reject(2);
        }, 1000)
    });
};

var asyncTest2Failed = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('test2 failed');
            resolve(2);
        }, 1000)
    });
};

var asyncTest3 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('test3');
            resolve(3);
        }, 1000)
    });
};

asyncTest1().then(asyncTest2, asyncTest1Failed).then(asyncTest3, asyncTest2Failed).then(function (b) {
    console.log(b);
}, function (e) {
    console.log('err:%s', e);
});
