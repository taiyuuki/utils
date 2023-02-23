/**
 * 判断是否是对象，不包括数组和null
 * @category is
 */
declare function isObject(o: any): o is Exclude<Object, Array<any>>;
/**
 * 判断是否是Date对象
 * @category is
 */
declare function isDate(d: any): d is Date;
/**
 * 判断是否是正则表达式
 * @category is
 */
declare function isRegexp(r: any): r is RegExp;
/**
 * 判断是否是数字，不包括NaN、INFINITY
 * @category is
 */
declare function isNumber(n: any): n is number;
/**
 * 判断是否是空值，包括null、undefined，不包括NaN
 * @category is
 */
declare function isNotVoid<T>(t: T): t is NonNullable<T>;
/**
 * 判断是否是空值，包括null、undefined，不包括NaN
 * @category is
 */
declare function isVoid(t: any): t is null | undefined;
/**
 * 判断是否是空字符串
 * @category is
 */
declare function isEmptyString(s: any, trim?: boolean): boolean;
/**
 * 判断是否是空数组
 * @category is
 */
declare function isEmptyArray(a: any): a is [];
/**
 * 判断是否是空对象
 * @category is
 */
declare function isEmptyObj(o: any): o is {};

export { isDate, isEmptyArray, isEmptyObj, isEmptyString, isNotVoid, isNumber, isObject, isRegexp, isVoid };
