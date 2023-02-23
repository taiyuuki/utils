'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../math/index.js');

/**
 * 将数组转换为对象
 * @category array
 */
function arrToObj(a, v = true) {
    const result = {};
    a.forEach(i => {
        result[i] = v;
    });
    return result;
}
/**
 * 数组去重
 * @category array
 */
function arrUniq(array) {
    return Array.from(new Set(array));
}
/**
 * 移除数组中的一项
 * @category array
 */
function arrRemove(array, value) {
    if (!array) {
        return false;
    }
    const index = array.indexOf(value);
    if (index >= 0) {
        array.splice(index, 1);
        return true;
    }
    return false;
}
/**
 * 移动数组中某一项至指定位置
 * @category array
 */
function arrMove(arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
}
/**
 * 获取数组中随机一项
 * @category array
 */
function arrRandom(arr) {
    return arr[index.mathRandomInt(0, arr.length)];
}

exports.arrMove = arrMove;
exports.arrRandom = arrRandom;
exports.arrRemove = arrRemove;
exports.arrToObj = arrToObj;
exports.arrUniq = arrUniq;
