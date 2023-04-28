/**
 * 抛出类型错误
 * @public
 * @param type - 正确的类型
 * @param name - 变量名
 */
export function throwTypeError(type: string, name: string) {
  throw new TypeError(`Expected a ${type} as ${name}.`)
}

/**
 * 控制台打印类型错误
 * @param type - 正确的类型
 * @param name - 变量名
 */
export function logTypeError(type: string, name: string) {
  console.error(`Expected a ${type} as ${name}.`)
}