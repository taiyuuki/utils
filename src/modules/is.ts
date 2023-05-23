import type { Fn, RgbColor } from '../types'

/**
 * The function checks if a given value is an object and not an array.
 * @public
 * @param o - any type, which means it can be any data type including objects, arrays, strings,
 * numbers, etc.
 * @returns a boolean value indicating whether the input parameter `o` is an object or not. The return
 * type of the function is `o is Exclude<Object, Array<any>>`, which is a type predicate indicating
 * that `o` is of type `Object` but not of type `Array<any>`.
 */
function is_object(o: any): o is Exclude<Object, Array<any>> {
    return o !== null && typeof o === 'object' && !Array.isArray(o)
}

/**
 * The function checks if a given value is a Date object.
 * @public
 * @param d - The parameter `d` is of type `any`, which means it can be any data type. However,
 * the function is checking if `d` is a `Date` object using the `Object.prototype.toString.call()`
 * method.
 * @returns The function `is_date` is returning a boolean value. It returns `true` if the input `d` is
 * a `Date` object, and `false` otherwise.
 */
function is_date(d: any): d is Date {
    return Object.prototype.toString.call(d) === '[object Date]'
}

/**
 * The function checks if a given value is a regular expression.
 * @public
 * @param r - The parameter `r` is of type `any`, which means it can be any data type.
 * @returns The function `is_regexp` returns a boolean value indicating whether the input parameter `r`
 * is a regular expression (`RegExp`) or not. It returns `true` if `r` is a `RegExp` object, and
 * `false` otherwise.
 * @example
 * ```ts
 * is_regexp(/a/)
 * ```
 */
function is_regexp(r: any): r is RegExp {
    return Object.prototype.toString.call(r) === '[object RegExp]'
}

/**
 * The function checks if a given value is a finite number.
 * @public
 * @param n - The parameter `n` is of type `any`, which means it can be any data type.
 * @returns The function `is_number` is returning a boolean value. It returns `true` if the input `n`
 * is a finite number, and `false` otherwise.
 * @example
 * ```ts
 * is_number(1)// true
 * is_number(NaN)// false
 * is_number(Number.NEGATIVE_INFINITY)// false
 * ```
 */
function is_number(n: any): n is number {
    return typeof n === 'number' && isFinite(n)
}

/**
 * @public
 * The `is_fn` function is a type guard that checks if the input parameter `fn` is a function.
 */

function is_fn(fn: any): fn is Fn {
    return typeof fn === 'function'
}

/**
 * The function checks if a given value is undefined.
 * @public
 * @param u - The parameter "u" is of type "any", which means it can be any data type (string,
 * number, boolean, object, etc.).
 * @returns The function `is_undefined` returns a boolean value indicating whether the input parameter
 * `u` is `undefined` or not. The function returns `true` if `u` is `undefined`, and `false` otherwise.
 */
function is_undefined(u: any): u is undefined {
    return u === void 0
}

/**
 * The function checks if a given value is null.
 * @public
 * @param n - The parameter `n` is of type `any`, which means it can be any data type.
 * @returns The function `is_null` is returning a boolean value indicating whether the input `n` is
 * null or not. The return type of the function is `n is null`, which is a type predicate indicating
 * that if the function returns `true`, then the input `n` is of type `null`.
 */
function is_null(n: any): n is null {
    return n === null
}

/**
 * The function checks if a given value is null or undefined, or if it is a number that is NaN.
 * @public
 * @param t - The parameter `t` is of type `any`, which means it can be any data type.
 * @returns a boolean value indicating whether the input parameter `t` is either `null` or `undefined`.
 * The return type of the function is a type guard, which means that if the function returns `true`,
 * TypeScript will narrow the type of `t` to `null` or `undefined`.
 */
function is_void(t: any): t is null | undefined {
    if (typeof t === 'number') {
        return isNaN(t)
    }
    return is_null(t) || is_undefined(t)
}

/**
 * The function checks if a given value is not null and undefined, or if it is a number that is not NaN.
 * @public
 * @param t - The parameter `t` is of type `any`, which means it can be any data type.
 * @returns a boolean value indicating whether the input parameter `t` is either `null` or `undefined`.
 */
function is_not_void<T>(t: T): t is NonNullable<T> {
    return !is_void(t)
}

/**
 * The `is_empty_string` function is checking if a given value is an empty string or a null or
 * undefined value.
 * @public
 * @param s - The parameter `s` is of type `any`, which means it can be any data type.
 * @param trim - The parameter `trim` is of type `boolean`, which means it can be `true` or `false`.
 */
function is_empty_string(s: any, trim?: boolean) {
    if (typeof s === 'string') {
        return (trim === true ? s.trim() : s).length === 0
    }
    else {
        return is_void(s)
    }
}

/**
 * The `is_not_empty_string` function is checking if a given value is not an empty string or a
 * null or undefined value.
 * @public
 * @param s - The parameter `s` is of type `any`, which means it can be any data type.
 * @param trim - The parameter `trim` is of type `boolean`, which means it can be `true` or `false`.
 */
function is_not_empty_string(s: any, trim?: boolean) {
    if (typeof s === 'string') {
        return (trim === true ? s.trim() : s).length > 0
    }
    else {
        return is_not_void(s)
    }
}

/**
 * The `is_empty_array` function is checking if a given value is an empty array or a null or
 * undefined value.
 * @public
 * @param v - The parameter `v` is of type `any`, which means it can be any data type.
 * @param nullable - The parameter `nullable` is of type `boolean`, which means it can be `true` or
 * `false`.
 * @example
 * ```ts
 * is_empty_array([])// true
 * is_empty_array(null)// false
 * is_empty_array(null, false)// true
 * ```
 */
function is_empty_array(v: any, nullable = true): v is [] {
    const nullCheck = nullable ? false : is_void(v)
    return Array.isArray(v) ? v.length === 0 : nullCheck
}

/**
 * The `is_not_empty_array` function is checking if a given value is not an empty array or a
 * null or undefined value.
 * @public
 * @param v - The parameter `v` is of type `any`, which means it can be any data type.
 * @param nullable - The parameter `nullable` is of type `boolean`, which means it can be `true` or
 * `false`.
 * @returns The function `is_not_empty_array` returns a boolean value indicating whether the input
 * parameter `v` is not an empty array.
 * @example
 * ```ts
 * is_empty_obj({})// true
 * is_empty_obj(null)// false
 * is_empty_obj(null, false)// true
 * ```
 */
function is_empty_obj(v: any, nullable = true): v is {} {
    const nullCheck = nullable ? false : is_void(v)
    return is_object(v) ? is_empty_array(Object.keys(v)) : nullCheck
}

/**
 * The `is_not_empty_obj` function is checking if a given value is not an empty object or a
 * null or undefined value.
 * @public
 * @param v - The parameter `v` is of type `any`, which means it can be any data type.
 * @param nullable - The parameter `nullable` is of type `boolean`, which means it can be `true` or
 * `false`.
 * @returns The function `is_not_empty_obj` returns a boolean value indicating whether the input
 * parameter `v` is not an empty object.
 */
function is_rgb_color(color: any): color is RgbColor {
    if (!Array.isArray(color)) { return false }
    return (color.length === 4 || color.length === 3) && color.every((v, i) => {
        if (i === 3) {
            return Number(v) <= 1
        }
        else {
            return Number(v) <= 255
        }
    })
}

/**
 * The function checks if a given value is a hex color.
 * @public
 * @param color - The parameter `color` is of type `string`.
 * @returns The function `is_hex_color` returns a boolean value indicating whether the input
 * parameter `color` is a hex color.
 */
function is_hex_color(color: string) {
    return color.match(/^#?[0-9a-fA-F]{3,8}$/) !== null
}

/**
 * The function checks if a given value is a window.
 * @public
 * @param win - The parameter `win` is of type `any`.
 * @returns The function `is_window` returns a boolean value indicating whether the input
 * parameter `win` is a window.
 */
function is_window(win: any): win is Window {
    return win === window
}

/**
 * the function checks if a given value is an element.
 * @public
 * @param el - The parameter `el` is of type `any`.
 * @returns The function `is_element` returns a boolean value indicating whether the input
 * parameter `el` is an element.
 */
function is_element(el: any): el is Element {
    return el instanceof Element
}

/**
 * The function checks if a given value is an HTML element.
 * @public
 * @param hel - The parameter `hel` is of type `any`.
 * @returns The function `is_html_element` returns a boolean value indicating whether the input
 * parameter `hel` is an HTML element.
 */
function is_html_element(hel: any): hel is HTMLElement {
    return hel instanceof HTMLElement
}

/**
 * The function checks if a given value is a window or an element.
 * @public
 * @param el - The parameter `el` is of type `any`.
 * @returns The function `is_window_or_element` returns a boolean value indicating whether the input
 * parameter `el` is a window or an element.
 */
function is_window_or_element(el: any): el is Element | Window {
    return is_element(el) || is_window(el)
}

/**
 * The function checks if a given value is a base64 encoded string.
 * @public
 * @param str - The parameter `str` is of type `string`.
 * @returns The function `is_base64` returns a boolean value indicating whether the input
 * parameter `str` is a base64 encoded string.
 */
function is_base64(str: string) {
    const reg = /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)$/i
    return reg.test(str.trim())
}

/**
 * The function checks if a
 * @public
 * @param blob - The parameter `blob` is of type `Blob`.
 * @returns The function `is_blob` returns a boolean value indicating whether the input
 * parameter `blob` is a blob.
 */
function is_blob(blob: any): blob is Blob {
    return blob instanceof Blob
}

/**
 * The function checks if a given value is a file.
 * @public
 * @param file - The parameter `file` is of type `File`.
 * @returns The function `is_file` returns a boolean value indicating whether the input
 * parameter `file` is a file.
 */
function is_file(file: any): file is File {
    return file instanceof File
}

/**
 * The function checks if a given value is a function.
 * @public
 * @param fn - The parameter `fn` is of type `Function`.
 * @returns The function `is_fn` returns a boolean value indicating whether the input
 * parameter `fn` is a function.
 */
function is_string_like(target: any): target is string | number {
    return !isFinite(target) && (typeof target === 'string' || typeof target === 'number')
}

export {
    is_base64,
    is_blob,
    is_file,
    is_fn,
    is_null,
    is_not_void,
    is_rgb_color,
    is_hex_color,
    is_window,
    is_window_or_element,
    is_string_like,
    is_empty_array,
    is_empty_obj,
    is_empty_string,
    is_not_empty_string,
    is_date,
    is_element,
    is_html_element,
    is_number,
    is_object,
    is_undefined,
    is_void,
    is_regexp,
}
