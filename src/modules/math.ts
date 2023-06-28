
/**
 * 该函数返回一个四舍五入到指定小数位数的数字。
 * @public
 * @param n - 需要四舍五入到小数点后固定位数的数字。
 * @param digit - 给定数字应四舍五入到小数点后的位数。如果没有为 digit 提供值，则默认为 0，这意味着数字将四舍五入到最接近的整数。
 * @returns 函数“math_to_fixed”返回一个数字，该数字已四舍五入到小数点后的指定位数。小数点后的位数由 digit 参数决定，如果不指定则默认为 0。
 */
function math_to_fixed(n: number, digit = 0) {
    return Number(n.toFixed(digit))
}

/**
 * 该函数返回指定范围内的随机整数。
 * @public
 * @param from - 生成随机整数的范围的最小值。
 * @param to - “to”参数是生成随机整数的范围的上限。
 * @returns 函数 `math_random_int` 返回介于 `from` 和 `to` 参数（含）之间的随机整数。
 */
function math_random_int(from: number, to: number) {
    return parseInt(((Math.random() * (to - from + 1)) + from).toString())
}

/**
 * 该函数返回指定范围内的数字。
 * @public
 * @param v - 一个你想检查它是否落在最小和最大范围之间的数字。
 * @param min - 输入数字“v”可以是的最小值。
 * @param max - 参数“max”是输入数字“v”所能达到的最大值。该函数通过在“v”大于“max”时返回“max”来确保“v”不大于“max”。
 * @returns 函数“math_between”返回一个在“min”和“max”参数定义的范围内的数字。如果输入的“v”小于“min”，则函数返回“min”。如果 `v` 大于 `max`，函数返回
 * `max`。如果 `v` 在 `min` 和 `max` 之间，函数返回 `v`。
 */
function math_between(v: number, min: number, max: number) {
    if (min > max) {
        [min, max] = [max, min]
    }
    return Math.min(max, Math.max(min, v))
}

/**
 * 该函数将数字转换为包含大写字母且最小长度为 2 个字符的十六进制字符串。
 * @public
 * @param n - 参数“n”是一个将被转换为十六进制字符串的数字。
 * @returns 该函数返回一个包含大写字母且最小长度为 2 个字符的十六进制字符串。
 */
function math_to_hex(n: number) {
    return n.toString(16).padStart(2, '0').toUpperCase()
}

/**
 * 该函数使用按位运算将整数转换为 4 字节的数组并返回该数组。
 * @public
 * @param num - 参数 num 是需要转换为字节数组的数字。
 * @returns 函数“int_to_bytes”返回一个“Uint8Array”，其中包含以小端字节顺序排列的输入数字的四个字节。
 * @example
 * ```ts
 * int_to_bytes(0x12345678) // [0x78, 0x56, 0x34, 0x12]
 * ```
 */
function int_to_bytes(num: number) {
    const bytes = new Uint8Array(4)
    bytes.set([num & 0xff, (num >> 8) & 0xff, (num >> 16) & 0xff, (num >> 24) & 0xff])
    return bytes
}

/**
 * 该函数将四个字节的数组转换为单个整数值。
 * @public
 * @param bytes - 参数“bytes”是一个由四个数字组成的数组，代表一个 32 位整数，以大端字节顺序排列。函数“bytes_to_int”将此字节数组转换为单个整数值。
 * @returns 函数“bytes_to_int”返回一个整数值，该值是通过以大端顺序连接输入数组“bytes”中的四个字节获得的。
 * @example
 * ```ts
 * bytes_to_int([0x78, 0x56, 0x34, 0x12]) // 0x12345678
 * ```
 */
function bytes_to_int(bytes: [number, number, number, number]) {
    return (bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3]
}

export {
    math_between,
    math_random_int,
    math_to_fixed,
    math_to_hex,
    int_to_bytes,
    bytes_to_int,
}

