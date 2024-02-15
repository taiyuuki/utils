/**
 * 该函数接受一个字符串模板和一个数据对象，并返回一个已解析的字符串，其中包含插入到模板中的数据值。
 * @public
 * @param temp - `temp` 参数是一个字符串，表示带有占位符的模板，这些占位符将被 `data` 对象中的值替换。
 * @param data - `data` 参数是一个 `T` 类型的对象，其中包含将用于替换 `temp` 字符串中的占位符的数据。对象的键代表 temp
 * 字符串中的占位符，值代表将替换这些占位符的值。
 * @returns `temp_compiler` 函数返回一个字符串，该字符串是使用 `data` 对象解析 `temp` 字符串的结果。 `temp` 字符串是一个模板字符串，可能包含 `data`
 * 对象中值的占位符。占位符由`${}`语法标识。 `data` 对象是一个包含键值对的对象，其中键对应于中的占位符
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
 *  console.log(temp_compiler(temp, data)) // "<div>name: Jack, score: 59, pass: no</div>"
 * ```
 */
function temp_compiler<T extends object>(temp: string, data: T): string {
    const keys = Object.keys(data)
    const values = Object.values(data)
    const parser = new Function(...keys, `return \`${temp}\``)
    return parser(...values)
}

export { temp_compiler }
