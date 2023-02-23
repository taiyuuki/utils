'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 四舍五入
 * @category math
 * @param degit 小数点后位数
 */
/**
 * 随机整数
 * @category math
 */
function mathRandomInt(from, to) {
    return parseInt(((Math.random() * (to - from + 1)) + from).toString());
}

exports.mathRandomInt = mathRandomInt;
