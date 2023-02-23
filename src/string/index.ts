/**
 * 获取指定长度随机字符
 * @category string
 * @count 长度
 * @digit 进制 0-36
 * @example
 * ```ts
 * // 获取取长度为6的16进制字符
 * const str = strRandom(6, 16)
 * ```
 */
export function strRandom(count: number, digit = 36) {
  digit = digit > 36 ? 36 : digit
  let result = ''
  for (let i = 1; i <= count; i++) {
    result += Math.floor(Math.random() * digit).toString(digit)
  }
  return result
}