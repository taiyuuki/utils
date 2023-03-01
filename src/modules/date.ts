import { strComplement } from './string'

/**
 * 获取现在的时间
 * @public
 * @param format - string 年: yyyy 月: MM 日: dd 时: HH 分: mm 秒: ss
 * @returns 日期
 * @example
 * ```ts
 * const now = dateNow('yyyy-MM-dd')// 1999-10-01
 * ```
 */
export function dateNow(format = 'yyyy-MM-dd|HH:mm:ss') {
  const time = new Date()
  const result = format.replace('yyyy', `${time.getFullYear()}`)
    .replace('MM', strComplement(time.getMonth() + 1))
    .replace('dd', strComplement(time.getDate()))
    .replace('HH', strComplement(time.getHours()))
    .replace('mm', strComplement(time.getMinutes()))
    .replace('ss', strComplement(time.getSeconds()))
  return result
}