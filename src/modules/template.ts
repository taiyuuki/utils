/**
 * 简单的模板解析
 * @public
 * @param temp - 模板
 * @param data - 数据对象
 * @example
 * ```ts
 *  const temp = '<div>name: ${name}, score: ${score()}, pass: ${pass ? "yes" : "no"}</div>'
 *  const data = {
 *    name: 'Jack',
 *    score(){
 *      return 59
 *    },
 *    pass: false
 *  }
 *  console.log(tempCompiler(temp, data)) // "<div>name: Jack, score: 59, pass: no</div>"
 * ```
 */
export function tempCompiler<T extends object>(temp: string, data: T): string {
  const keys = Object.keys(data)
  const values = Object.values(data)
  const parser = new Function(...keys, `return \`${temp}\``)
  return parser(...values)
}