/**
 * 可能是数字或字符串，转为字符串
 * @public
 * @param target - string或number
 * @returns 字符串
 */
export function strMaybeNumber(target: number | string) {
  return target.toString()
}

/**
 * 获取指定长度随机字符
 * @public
 * @param count - 长度
 * @param radix - 进制 0-36
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
 * @public
 * @param s - 字符串
 * @param prefix - 前缀
 * @returns 确保有前缀的字符串
 */
export function strEnsurePrefix(s: string, prefix: string) {
  return s.startsWith(prefix) ? s : `${prefix}${s}`
}

/**
 * 确保字符串有特定后缀，没有则添加
 * @public
 * @param s - 字符串
 * @param suffix - 后缀
 * @returns 确保有后缀的字符串
 */
export function strEnsureSuffix(s: string, suffix: string) {
  return s.endsWith(suffix) ? s : `${s}${suffix}`
}

/**
 * 确保字符串没有特定前缀，有则删除
 * @public
 * @param s - 字符串
 * @param prefix - 前缀
 * @returns 确保移除前缀的字符串
 */
export function strNoPrefix(s: string, prefix: string) {
  return s.startsWith(prefix) ? s.substring(prefix.length) : s
}

/**
 * 确保字符串没有特定后缀，有则删除
 * @public
 * @param s - 字符串
 * @param suffix - 后缀
 * @returns 确保移除后缀的字符串
 */
export function strNoSuffix(s: string, suffix: string) {
  return s.endsWith(suffix) ? s.substring(0, s.length - suffix.length) : s
}

/**
 * 首字母大写
 * @public
 */
export function strCapital(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 根据需要的长度，在字符串前补足指定字符（比如0）
 * @public
 * @param len - 字符串总长度
 * @param char - 补充的字符
 */
export function strComplement(n: number | string, len = 2, char = '0') {
  n = n + ''
  return n.length >= len ? n : Array.from({ length: len - n.length + 1 }).join(char) + n
}