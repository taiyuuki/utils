/**
 * 判断是否是对象，不包括数组和null
 * @category is
 */
function isObject(o) {
    return o !== null && typeof o === 'object' && !Array.isArray(o);
}
/**
 * 判断是否是Date对象
 * @category is
 */
function isDate(d) {
    return Object.prototype.toString.call(d) === '[object Date]';
}
/**
 * 判断是否是正则表达式
 * @category is
 */
function isRegexp(r) {
    return Object.prototype.toString.call(r) === '[object RegExp]';
}
/**
 * 判断是否是数字，不包括NaN、INFINITY
 * @category is
 */
function isNumber(n) {
    return typeof n === 'number' && isFinite(n);
}
/**
 * 判断是否是空值，空值包括null、undefined、NaN
 * @category is
 */
function isVoid(t) {
    return t === void 0 || t === null || isNaN(t);
}
/**
 * 判断是否是空值，空值包括null、undefined、NaN
 * @category is
 */
function isNotVoid(t) {
    return !isVoid(t);
}
/**
 * 判断是否是空字符串
 * @category is
 */
function isEmptyString(s, trim) {
    if (typeof s === 'string') {
        return (trim === true ? s.trim() : s).length === 0;
    }
    else {
        return false;
    }
}
/**
 * 判断是否是空数组
 * @category is
 */
function isEmptyArray(a) {
    return Array.isArray(a) ? a.length === 0 : false;
}
/**
 * 判断是否是空对象
 * @category is
 */
function isEmptyObj(o) {
    return isObject(o) ? isEmptyArray(Object.keys(o)) : false;
}

export { isDate, isEmptyArray, isEmptyObj, isEmptyString, isNotVoid, isNumber, isObject, isRegexp, isVoid };
