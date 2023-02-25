import type { RgbColor } from '../types'

/**
 * 判断是否是对象，不包括数组和null
 * @kind is
 */
export function isObject(o: any): o is Exclude<Object, Array<any>> {
  return o !== null && typeof o === 'object' && !Array.isArray(o)
}

/**
 * 判断是否是Date对象
 * @kind is
 */
export function isDate(d: any): d is Date {
  return Object.prototype.toString.call(d) === '[object Date]'
}

/**
 * 判断是否是正则表达式
 * @kind is
 */
export function isRegexp(r: any): r is RegExp {
  return Object.prototype.toString.call(r) === '[object RegExp]'
}

/**
 * 判断是否是数字，不包括NaN、INFINITY
 * @kind is
 */
export function isNumber(n: any): n is number {
  return typeof n === 'number' && isFinite(n)
}

/**
 * 判断是否是空值，空值包括null、undefined、NaN
 * @kind is
 */
export function isVoid(t: any): t is null | undefined {
  return t === void 0 || t === null || isNaN(t)
}

/**
 * 判断是否是空值，空值包括null、undefined、NaN
 * @kind is
 */
export function isNotVoid<T>(t: T): t is NonNullable<T> {
  return !isVoid(t)
}

/**
 * 判断是否是空字符串
 * @kind is
 */
export function isEmptyString(s: any, trim?: boolean) {
  if (typeof s === 'string') {
    return (trim === true ? s.trim() : s).length === 0
  }
  else {
    return false
  }
}

/**
 * 判断是否是空数组
 * @kind is
 */
export function isEmptyArray(a: any): a is [] {
  return Array.isArray(a) ? a.length === 0 : false
}

/**
 * 判断是否是空对象
 * @kind is
 */
export function isEmptyObj(o: any): o is {} {
  return isObject(o) ? isEmptyArray(Object.keys(o)) : false
}

/**
 * 判断是否是合法的RGB值
 * @kind is
 */
export function isRgbColor(color: any): color is RgbColor {
  if (!Array.isArray(color)) {return false}
  return (color.length === 4 || color.length === 3) && color.every((v, i) => {
    if (i === 3) {
      return  Number(v) <= 1
    }
    else {
      return Number(v) <= 255
    }
  })
}

/**
 * 判断是否是合法的hex颜色值
 * @kind is
 */
export function isHexColor(color: string) {
  return color.match(/^#?[0-9a-fA-F]{3,8}$/) !== null
}