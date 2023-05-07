/**
 * 四舍五入
 * @public
 * @param digit - 小数点后位数
 */
export function mathToFixed(n: number, digit = 0) {
  return Number(n.toFixed(digit))
}

/**
 * 随机整数
 * @public
 */
export function mathRandomInt(from: number, to: number) {
  return parseInt(((Math.random() * (to - from + 1)) + from).toString())
}

/**
 * 给定一个数字，返回一个保持位于两数之间的数
 * The function returns a value within a specified range.
 * @public
 * @param v - a number that you want to check if it falls between the range of min and max.
 * @param min - The minimum value that the input number `v` can take. If `v` is less than
 * `min`, the function will return `min`.
 * @param max - The `max` parameter is a number representing the maximum value that `v` can
 * take. The `mathBetween` function is designed to ensure that `v` is always within the range of `min`
 * and `max`.
 */
export function mathBetween(v: number, min: number, max: number) {
  if (min >= max) {
    [min, max] = [max, min]
  }
  return Math.min(max, Math.max(min, v))
}

/**
 * 10进制转16进制
 * The function takes a number as input and returns its hexadecimal equivalent.
 * @public
 * @param n - The parameter "n" is a number that we want to convert to a hexadecimal string.
 */
export function mathToHex(n: number) {
  return parseInt(`${n}`, 16)
}