import { str_complement } from './string'

/**
 * 该函数以指定格式返回当前日期和时间。
 * @public
 * @param format -
 * 参数是一个字符串，用于指定所需的日期和时间格式。它使用占位符，例如年份的“yyyy”、月份的“MM”、日期的“dd”、小时的“HH”、分钟的“mm”和秒钟的“ss”
 * @returns 基于当前日期和时间的格式化日期字符串，使用 `format`
 * 参数中指定的格式。默认格式为“yyyy-MM-dd|HH:mm:ss”。该函数将格式字符串中的占位符替换为当前日期和时间的相应值，并返回结果字符串。
 */
function date_now(format = 'yyyy-MM-dd|HH:mm:ss') {
    const time = new Date()
    const result = format.replace('yyyy', `${time.getFullYear()}`)
        .replace('MM', str_complement(time.getMonth() + 1))
        .replace('dd', str_complement(time.getDate()))
        .replace('HH', str_complement(time.getHours()))
        .replace('mm', str_complement(time.getMinutes()))
        .replace('ss', str_complement(time.getSeconds()))

    return result
}

export { date_now }
