'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var is = require('./is.js');

/**
 * 函数节流
 * @category function
 */
function throttle(func, timeFrame, immediately) {
    let lastTime = 0;
    let timer;
    immediately = immediately ?? true;
    return function (...args) {
        const now = Date.now();
        if (is.isNotVoid(timer)) {
            clearTimeout(timer);
        }
        if (now - lastTime >= timeFrame && immediately) {
            lastTime = now;
            return func(...args);
        }
        else {
            timer = setTimeout(() => {
                func(...args);
                timer = void 0;
            }, timeFrame);
        }
    };
}
/**
 * 函数防抖
 * @category function
 */
function debounce(func, timeFrame) {
    let lastTime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastTime >= timeFrame) {
            lastTime = now;
            return func(...args);
        }
        lastTime = now;
    };
}
/**
 * 函数值组合，前一个函数的返回值作为下一个函数的参数
 * @category function
 */
function compose(...fns) {
    return function (arg) {
        return fns.reduce((pre, fn) => {
            return fn(pre);
        }, arg);
    };
}

exports.compose = compose;
exports.debounce = debounce;
exports.throttle = throttle;
