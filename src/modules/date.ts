import { str_complement } from './string'

/**
 * The function returns the current date and time in a specified format.
 * @public
 * @param format - The format parameter is a string that specifies the desired
 * format of the date and time. It uses placeholders such as 'yyyy' for the year, 'MM' for the month,
 * 'dd' for the day, 'HH' for the hour, 'mm' for the minute, and 'ss' for seconds.
 * @returns a formatted date string based on the current date and time, using the format specified in
 * the `format` parameter. The default format is `'yyyy-MM-dd|HH:mm:ss'`. The date string includes the
 * year, month, day, hour, minute, and second, separated by the specified delimiters.
 * @example
 * ```ts
 * const now = date_now('yyyy-MM-dd')// 1999-10-01
 * ```
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
