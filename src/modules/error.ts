/**
 * 该函数抛出带有特定消息的 TypeError。
 * @public
 * @param type - 表示预期数据类型的字符串
 * @param name - 参数是一个字符串，表示预期类型的名称。
 */
function throw_type_error(type: string, name: string) {
    throw new TypeError(`Expected a ${type} as ${name}.`)
}

/**
 * 该函数使用预期的类型和名称记录类型错误消息。
 * @public
 * @param type - 表示预期数据类型的字符串
 * @param name - 名称参数是一个字符串，表示预期具有特定类型的变量或参数的名称。
 */
function log_type_error(type: string, name: string) {
    console.error(`Expected a ${type} as ${name}.`)
}

export {
    throw_type_error,
    log_type_error,
}
