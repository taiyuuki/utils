import type { Fn, RgbColor } from '../types'

/**
 * 判断是否是对象，不包括数组和null
 * @public
 */
export function isObject(o: any): o is Exclude<Object, Array<any>> {
  return o !== null && typeof o === 'object' && !Array.isArray(o)
}

/**
 * 判断是否是Date对象
 * @public
 */
export function isDate(d: any): d is Date {
  return Object.prototype.toString.call(d) === '[object Date]'
}

/**
 * 判断是否是正则表达式
 * @public
 */
export function isRegexp(r: any): r is RegExp {
  return Object.prototype.toString.call(r) === '[object RegExp]'
}

/**
 * 判断是否是数字，不包括NaN、INFINITY
 * @public
 */
export function isNumber(n: any): n is number {
  return typeof n === 'number' && isFinite(n)
}

/**
 * 判断是否是方法
 * @public
 */
export function isFn(fn: any): fn is Fn {
  return typeof fn === 'function'
}

/**
 * 判断是否是undefined
 * @public
 */
export function isUndefined(u: any): u is undefined {
  return u === void 0
}

/**
 * 判断是否是null
 * @public
 */
export function isNull(n: any): n is null {
  return n === null
}

/**
 * 判断是否是空值，空值包括null、undefined、NaN
 * @public
 */
export function isVoid(t: any): t is null | undefined {
  if (typeof t === 'number') {
    return isNaN(t)
  }
  return isNull(t) || isUndefined(t)
}

/**
 * 判断是否是空值，空值包括null、undefined、NaN
 * @public
 */
export function isNotVoid<T>(t: T): t is NonNullable<T> {
  return !isVoid(t)
}

/**
 * 判断是否是空字符串或空值
 * @public
 */
export function isEmptyString(s: any, trim?: boolean) {
  if (typeof s === 'string') {
    return (trim === true ? s.trim() : s).length === 0
  }
  else {
    return isVoid(s)
  }
}

/**
 * 判断是否是空字符串，同时不能是空值
 * @public
 */
export function isNotEmptyString(s: any, trim?: boolean) {
  if (typeof s === 'string') {
    return (trim === true ? s.trim() : s).length > 0
  }
  else {
    return isNotVoid(s)
  }
}

/**
 * 判断是否是空数组
 * @public
 * @param v - 需要判断的值
 * @param nullable - 是否允许空值
 * @example
 * ```ts
 * isEmptyArray([])// true
 * isEmptyArray(null)// false
 * isEmptyArray(null, false)// true
 * ```
 */
export function isEmptyArray(v: any, nullable = true): v is [] {
  const nullCheck = nullable ? false : isVoid(v)
  return Array.isArray(v) ? v.length === 0 : nullCheck
}

/**
 * 判断是否是空对象
 * @public
 * @param v - 需要判断的值
 * @param nullable - 是否允许空值
 * @example
 * ```ts
 * isEmptyObj({})// true
 * isEmptyObj(null)// false
 * isEmptyObj(null, false)// true
 * ```
 */
export function isEmptyObj(v: any, nullable = true): v is {} {
  const nullCheck = nullable ? false : isVoid(v)
  return isObject(v) ? isEmptyArray(Object.keys(v)) : nullCheck
}

/**
 * 判断是否是合法的RGB值
 * @public
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
 * @public
 */
export function isHexColor(color: string) {
  return color.match(/^#?[0-9a-fA-F]{3,8}$/) !== null
}

/**
 * 判断元素是否是wnidow
 * @public
 */
export function isWindow(win: any): win is Window {
  return win === window
}

/**
 * 判断元素是否是DOM元素
 * @public
 */
export function isElement(el: any): el is Element {
  return el instanceof Element
}

/**
 * 判断元素是否是html元素
 * @public
 */
export function isHTMLElement(hel: any): hel is HTMLElement {
  return hel instanceof HTMLElement
}

/**
 * 判断元素是否是window或DOM元素
 * @public
 */
export function isWindowOrElement(el: any): el is Element | Window {
  return isElement(el) || isWindow(el)
}

/**
 * 判断字符串是否是base64格式的
 * @public
 * @param str - 字符串
 * @returns true or false
 */
export function isBase64(str: string) {
  const reg = /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)$/i
  return reg.test(str.trim())
}

/**
 * 判断是否是Blob对象
 * @public
 * @param blob - blbo对象
 */
export function isBlob(blob: any): blob is Blob {
  return blob instanceof Blob
}

/**
 * 判断是否是File对象
 * @public
 * @param file - file对象
 */
export function isFile(file: any): file is File {
  return file instanceof File
}