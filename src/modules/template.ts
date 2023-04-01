/**
 * 简单的模板解析
 * @public
 * @param temp - 模板
 * @param data - 数据对象
 * @example
 * ```ts
 *  const temp = '<div>name: ${name}, age: ${age}</div>'
 *  const data = {
 *    name: 'Jack',
 *    age: 18,
 *  }
 *  console.log(tempCompiler(temp, data)) // "<div>name: Jack, age: 18</div>"
 * ```
 */
export function tempCompiler<T extends object>(temp: string, data: T) {
  const keys = Object.keys(data)
  const values = Object.values(data)
  const parser = new Function(...keys, `return \`${temp}\``)
  return parser(...values)
}