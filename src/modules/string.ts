/**
 * 获取指定长度随机字符
 * @kind string
 * @count 长度
 * @digit 进制 0-36
 * @example
 * ```ts
 * const str = strRandom(6, 16)// 获取取长度为6的随机16进制字符
 * ```
 */
export function strRandom(count: number, digit = 16) {
  digit = digit > 36 ? 36 : digit
  let result = ''
  for (let i = 1; i <= count; i++) {
    result += Math.floor(Math.random() * digit).toString(digit)
  }
  return result
}

/**
 * 生成UUID
 * @kind string
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
 * @kind string
 */
export function strEnsurePrefix(s: string, prefix: string) {
  return s.startsWith(prefix) ? s : `${prefix}${s}`
}

/**
 * 确保字符串有特定后缀，没有则添加
 * @kind string
 */
export function strEnsureSuffix(s: string, suffix: string) {
  return s.endsWith(suffix) ? s : `${s}${suffix}`
}

/**
 * 确保字符串没有特定前缀，有则删除
 * @kind string
 */
export function strNoPrefix(s: string, prefix: string) {
  return s.startsWith(prefix) ? s.substring(prefix.length) : s
}

/**
 * 确保字符串没有特定后缀，有则删除
 * @kind string
 */
export function strNoSuffix(s: string, suffix: string) {
  return s.endsWith(suffix) ? s.substring(0, s.length - suffix.length) : s
}