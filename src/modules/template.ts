/**
 * The function takes a string template and an object of data, and returns a compiled string with the
 * data values inserted into the template.
 * @public
 * @param temp - A string representing a template with placeholders for values from the data
 * object.
 * @param data - The `data` parameter is an object of type `T` which contains the data that will be
 * used to replace the placeholders in the `temp` string. The keys of the object represent the
 * placeholders in the string, and the values represent the data that will replace those placeholders.
 * The `T`
 * @returns The function `temp_compiler` returns a string that is the result of parsing the `temp`
 * string with the `data` object. The `temp` string is a template string that may contain placeholders
 * for values in the `data` object. The function replaces these placeholders with the corresponding
 * values from the `data` object and returns the resulting string.
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
