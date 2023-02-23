/**
 * 判断是否是对象，不包括数组和null
 * @category is
 */
export function isObject(o: any): o is Exclude<Object, Array<any>> {
  return o !== null && typeof o === 'object' && !Array.isArray(o)
}

/**
 * 判断是否是Date对象
 * @category is
 */
export function isDate(d: any): d is Date {
  return Object.prototype.toString.call(d) === '[object Date]'
}

/**
 * 判断是否是正则表达式
 * @category is
 */
export function isRegexp(r: any): r is RegExp {
  return Object.prototype.toString.call(r) === '[object RegExp]'
}

/**
 * 判断是否是数字，不包括NaN、INFINITY
 * @category is
 */
export function isNumber(n: any): n is number {
  return typeof n === 'number' && isFinite(n)
}

/**
 * 判断是否是空值，包括null、undefined，不包括NaN
 * @category is
 */
export function isNotVoid<T>(t: T): t is NonNullable<T> {
  return t !== void 0 && t !== null
}

/**
 * 判断是否是空值，包括null、undefined，不包括NaN
 * @category is
 */
export function isVoid(t: any): t is null | undefined {
  return t === void 0 || t === null
}

/**
 * 判断是否是空字符串
 * @category is
 */
export function isEmptyString(s: any, trim?: boolean) {
  if (typeof s === 'string') {
    return trim === true ? s.trim() === '' : s === ''
  }
  else {
    return false
  }
}

/**
 * 判断是否是空数组
 * @category is
 */
export function isEmptyArray(a: any): a is [] {
  return a?.length === 0
}

/**
 * 判断是否是空对象
 * @category is
 */
export function isEmptyObj(o: any): o is {} {
  return isObject(o) ? isEmptyArray(Object.keys(o)) : false
}