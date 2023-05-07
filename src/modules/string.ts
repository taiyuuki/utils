/**
 * 可能是数字或字符串，转为字符串
 * The function takes in a parameter that can be either a number or a string and returns the parameter
 * as a string.
 * @public
 * @param target - The parameter "target" is a variable that can accept either a
 * number or a string data type.
 * @returns the string representation of the input parameter, whether it is a number or a string.
 */
export function strMaybeNumber(target: number | string) {
  return target.toString()
}

/**
 * 获取指定长度随机字符
 * The function generates a random string of a specified length and radix.
 * @public
 * @param count - The number of characters in the random string that will be generated.
 * @param radix - Radix refers to the base number system used for representing numbers. In this
 * case, the default radix is 16, which means the function will generate a random string using
 * hexadecimal characters (0-9 and A-F). However, you can also specify a different radix if you want to
 * use a different
 * @example
 * ```ts
 * const str = strRandom(6, 16)// 获取取长度为6的随机16进制字符
 * ```
 */
export function strRandom(count: number, radix = 16) {
  radix = radix > 36 ? 36 : radix
  let result = ''
  for (let i = 1; i <= count; i++) {
    result += Math.floor(Math.random() * radix).toString(radix)
  }
  return result
}

/**
 * 生成UUID
 * The function returns a string representation of a UUID.
 * @public
 */
export function strUuid(): string {
  let uuid = ''
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    uuid = crypto.randomUUID()
  }
  else if (typeof Blob == 'undefined') {
    uuid = `${strRandom(8)}-${strRandom(4)}-${strRandom(4)}-${strRandom(4)}-${strRandom(12)}`
  }
  else {
    const url_uuid = URL.createObjectURL(new Blob())
    uuid = url_uuid.toString().substring(url_uuid.lastIndexOf('/') + 1)
    URL.revokeObjectURL(url_uuid)
  }
  return uuid
}

/**
 * 确保字符串有特定前缀，没有则添加
 * The function ensures that a given string has a specified prefix.
 * @public
 * @param s - The input string that we want to ensure has a certain prefix.
 * @param prefix - The prefix parameter is a string that we want to ensure is at the beginning
 * of the input string s. If s already starts with prefix, then the function should return s unchanged.
 * If s does not start with prefix, then the function should return prefix followed by s.
 */
export function strEnsurePrefix(s: string, prefix: string) {
  return s.startsWith(prefix) ? s : `${prefix}${s}`
}

/**
 * 确保字符串有特定后缀，没有则添加
 * The function ensures that a given string ends with a specified suffix.
 * @public
 * @param s - The original string that we want to ensure has a certain suffix.
 * @param suffix - The `suffix` parameter is a string that we want to ensure is at the end of
 * the `s` string. If `s` already ends with `suffix`, then the function should return `s` unchanged. If
 * `s` does not end with `suffix`, then the function should append
 */
export function strEnsureSuffix(s: string, suffix: string) {
  return s.endsWith(suffix) ? s : `${s}${suffix}`
}

/**
 * 确保字符串没有特定前缀，有则删除
 * The function removes a specified prefix from a given string.
 * @public
 * @param s - The `s` parameter is a string that we want to remove a prefix from.
 * @param prefix - The prefix parameter is a string that we want to remove from the beginning
 * of the input string (s).
 */
export function strNoPrefix(s: string, prefix: string) {
  return s.startsWith(prefix) ? s.substring(prefix.length) : s
}

/**
 * 确保字符串没有特定后缀，有则删除
 * The function takes in a string and a suffix, and returns the string without the suffix if it exists.
 * @public
 * @param s - A string that we want to remove the suffix from.
 * @param suffix - The `suffix` parameter is a string that represents the ending characters of
 * a word or phrase that we want to remove from the input string `s`.
 */
export function strNoSuffix(s: string, suffix: string) {
  return s.endsWith(suffix) ? s.substring(0, s.length - suffix.length) : s
}

/**
 * 首字母大写
 * The function takes a string as input and capitalizes the first letter of the string.
 * @public
 * @param str - The parameter "str" is a string type variable that represents the input string
 * that needs to be capitalized.
 */
export function strCapital(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 根据需要的长度，在字符串前补足指定字符（比如0）
 * The function takes a number or string and returns a string with a specified length, padded with a
 * specified character.
 * @public
 * @deprecated 已废弃，建议用字符串自带的padEnd或padStart方法
 * @param n - The input number or string that needs to be complemented with leading
 * characters.
 * @param len - The `len` parameter is a number that specifies the desired length of the resulting
 * string. If the input string is shorter than the desired length, the function will add the `char`
 * parameter (default is '0') to the beginning of the string until it reaches the desired length.
 * @param char - The `char` parameter is a string that represents the character to be used for
 * padding the input string. By default, it is set to '0'.
 */
export function strComplement(n: number | string, len = 2, char = '0') {
  n = n + ''
  return n.length >= len ? n : Array.from({ length: len - n.length + 1 }).join(char) + n
}