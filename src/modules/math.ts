/**
 * 四舍五入
 * @category math
 * @param digit 小数点后位数
 */
export function mathToFixed(n: number, digit = 0) {
  return Number(n.toFixed(digit))
}

/**
 * 随机整数
 * @category math
 */
export function mathRandomInt(from: number, to: number) {
  return parseInt(((Math.random() * (to - from + 1)) + from).toString())
}

/**
 * 给定一个数字，返回一个保持位于两数之间的数
 * @category math
 * @param v 给定数字
 * @param min 下限
 * @param max 上限
 */
export function mathBetween(v: number, min: number, max: number) {
  if (min >= max) {
    [min, max] = [max, min]
  }
  return Math.min(max, Math.max(min, v))
}