/**
 * 四舍五入
 * @category math
 * @param degit 小数点后位数
 */
export function mathToFixed(n: number, digits = 0) {
  return Number(n.toFixed(digits))
}

/**
 * 随机整数
 * @category math
 */
export function mathRandomInt(from: number, to: number) {
  return parseInt(((Math.random() * (to - from + 1)) + from).toString())
}