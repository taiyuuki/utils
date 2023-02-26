import { strComplement } from './string'

/**
 * 获取今天的日期
 * @kind date
 * @param format string 年: yyyy 月: mm 日: dd
 * @example
 * ```ts
 * const now = getToday('yyyy-mm-dd')// 1999-10-01
 * ```
 */
export function getToday(format = 'yyyy-mm-dd') {
  const time = new Date()
  const result = format.replace('yyyy', `${time.getFullYear()}`)
    .replace('mm', strComplement(time.getMonth() + 1))
    .replace('dd', strComplement(time.getDate()))
  return result
}