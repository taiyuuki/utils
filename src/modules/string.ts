import { math_between } from './math'

/**
 * The function takes in a parameter that can be either a number or a string and returns the parameter
 * as a string.
 * @public
 * @param target - The parameter "target" is a variable that can accept either a
 * number or a string data type.
 * @returns the string representation of the input parameter, whether it is a number or a string.
 */
function str_maybe_number(target: number | string) {
    return target.toString()
}

/**
 * The function generates a random string of a specified length and radix.
 * @public
 * @param count - The number of characters in the random string that will be generated.
 * @param radix - Radix refers to the base number system used for representing numbers. In this
 * case, the default radix is 16, which means the function will generate a random string using
 * hexadecimal characters (0-9 and A-F). However, you can also specify a different radix if you want to
 * use a different
 * @example
 * ```ts
 * const str = str_random(6, 16)// generates a random string of length 6 using hexadecimal.
 * ```
 */
function str_random(count: number, radix = 16) {
    radix = math_between(radix, 2, 36)
    let result = ''
    for (let i = 1; i <= count; i++) {
        result += Math.floor(Math.random() * radix).toString(radix)
    }
    return result
}

/**
 * The function returns a string representation of a UUID.
 * @public
 */
function str_uuid(): string {
    let uuid = ''
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
        uuid = crypto.randomUUID()
    }
    else if (typeof Blob == 'undefined') {
        uuid = `${str_random(8)}-${str_random(4)}-${str_random(4)}-${str_random(4)}-${str_random(12)}`
    }
    else {
        const url_uuid = URL.createObjectURL(new Blob())
        uuid = url_uuid.toString().substring(url_uuid.lastIndexOf('/') + 1)
        URL.revokeObjectURL(url_uuid)
    }
    return uuid
}

/**
 * The function ensures that a given string has a specified prefix.
 * @public
 * @param s - The input string that we want to ensure has a certain prefix.
 * @param prefix - The prefix parameter is a string that we want to ensure is at the beginning
 * of the input string s. If s already starts with prefix, then the function should return s unchanged.
 * If s does not start with prefix, then the function should return prefix followed by s.
 */
function str_ensure_prefix(s: string, prefix: string) {
    return s.startsWith(prefix) ? s : `${prefix}${s}`
}

/**
 * The function ensures that a given string ends with a specified suffix.
 * @public
 * @param s - The original string that we want to ensure has a certain suffix.
 * @param suffix - The `suffix` parameter is a string that we want to ensure is at the end of
 * the `s` string. If `s` already ends with `suffix`, then the function should return `s` unchanged. If
 * `s` does not end with `suffix`, then the function should append
 */
function str_ensure_suffix(s: string, suffix: string) {
    return s.endsWith(suffix) ? s : `${s}${suffix}`
}

/**
 * The function removes a specified prefix from a given string.
 * @public
 * @param s - The `s` parameter is a string that we want to remove a prefix from.
 * @param prefix - The prefix parameter is a string that we want to remove from the beginning
 * of the input string (s).
 */
function str_no_prefix(s: string, prefix: string) {
    return s.startsWith(prefix) ? s.substring(prefix.length) : s
}

/**
 * The function takes in a string and a suffix, and returns the string without the suffix if it exists.
 * @public
 * @param s - A string that we want to remove the suffix from.
 * @param suffix - The `suffix` parameter is a string that represents the ending characters of
 * a word or phrase that we want to remove from the input string `s`.
 */
function str_no_suffix(s: string, suffix: string) {
    return s.endsWith(suffix) ? s.substring(0, s.length - suffix.length) : s
}

/**
 * The function takes a string as input and capitalizes the first letter of the string.
 * @public
 * @param str - The parameter "str" is a string type variable that represents the input string
 * that needs to be capitalized.
 */
function str_capital(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * The function capitalizes the first letter of each word in a given string.
 * @public
 * @param str - A string that contains one or more words separated by spaces.
 * @returns The function `str_capital_all` is returning a new string where all the words in the input
 * string are capitalized. It does this by splitting the input string into an array of words using the
 * space character as a delimiter, then mapping each word to its capitalized version using the
 * `str_capital` function, and finally joining the array of capitalized words back into a string using
 * the space character as a
 */
function str_capital_all(str: string) {
    return str.split(' ').map(str_capital).join(' ')
}

/**
 * The function takes a number or string and returns a string with a specified length, padded with a
 * specified character.
 * @public
 * @deprecated This function is deprecated, use padEnd or padStart instead.
 * @param n - The input number or string that needs to be complemented with leading
 * characters.
 * @param len - The `len` parameter is a number that specifies the desired length of the resulting
 * string. If the input string is shorter than the desired length, the function will add the `char`
 * parameter (default is '0') to the beginning of the string until it reaches the desired length.
 * @param char - The `char` parameter is a string that represents the character to be used for
 * padding the input string. By default, it is set to '0'.
 */
function str_complement(n: number | string, len = 2, char = '0') {
    n = n + ''
    return n.length >= len ? n : Array.from({ length: len - n.length + 1 }).join(char) + n
}

export {
    str_maybe_number,
    str_random,
    str_uuid,
    str_ensure_prefix,
    str_ensure_suffix,
    str_no_prefix,
    str_no_suffix,
    str_capital,
    str_capital_all,
    str_complement,
}
