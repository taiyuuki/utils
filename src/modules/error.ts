/**
 * 抛出类型错误
 * The function throws a TypeError with a specific message.
 * @public
 * @param type - a string representing the expected data type
 * @param name - The name of the variable or parameter that is expected to have a certain
 * type.
 */
export function throwTypeError(type: string, name: string) {
  throw new TypeError(`Expected a ${type} as ${name}.`)
}

/**
 * 控制台打印类型错误
 * The function logs an error message indicating an expected type and name.
 * @public
 * @param type - string - This parameter is used to specify the expected data type of the
 * variable.
 * @param name - The name parameter is a string that represents the name of the variable or
 * parameter that is expected to have a certain type.
 */
export function logTypeError(type: string, name: string) {
  console.error(`Expected a ${type} as ${name}.`)
}