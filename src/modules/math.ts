/**
 * The function returns a number rounded to a specified number of decimal places.
 * @public
 * @param n - a number that needs to be rounded to a certain number of decimal places.
 * @param digit - The number of digits after the decimal point to which the given number should be
 * rounded. If no value is provided for digit, it defaults to 0, which means the number will be rounded
 * to the nearest integer.
 * @returns The function `math_to_fixed` is returning a number that has been rounded to a specified
 * number of digits after the decimal point. The number of digits after the decimal point is determined
 * by the `digit` parameter, which defaults to 0 if not provided.
 */
function math_to_fixed(n: number, digit = 0) {
    return Number(n.toFixed(digit))
}

/**
 * The function returns a random integer between a specified range.
 * @public
 * @param from - The minimum value of the range from which the random integer will be
 * generated.
 * @param to - The "to" parameter is the upper limit of the range from which the random
 * integer will be generated.
 * @returns The function `math_random_int` returns a random integer between the `from` and `to`
 * parameters (inclusive).
 */
function math_random_int(from: number, to: number) {
    return parseInt(((Math.random() * (to - from + 1)) + from).toString())
}

/**
 * The function returns a value within a specified range.
 * @public
 * @param v - a number that you want to check if it falls between the range of min and max.
 * @param min - The minimum value that the input number `v` can take. If `v` is less than
 * `min`, the function will return `min`.
 * @param max - The maximum value that the input number `v` can take. If `v` is greater than
 * `max`, the function will return `max`.
 */
function math_between(v: number, min: number, max: number) {
    if (min >= max) {
        [min, max] = [max, min]
    }
    return Math.min(max, Math.max(min, v))
}

/**
 * The function converts a number to a hexadecimal string with uppercase letters and a minimum length
 * of 2 characters.
 * @public
 * @param n - The parameter "n" is a number that will be converted to a hexadecimal string.
 * @returns The function `math_to_hex` takes a number as input and returns a string representing the
 * hexadecimal value of that number. The returned string is padded with a leading zero if necessary to
 * ensure that it has at least two characters, and all characters are in uppercase.
 */
function math_to_hex(n: number) {
    return n.toString(16).padStart(2, '0').toUpperCase()
}

/**
 * The function converts an integer into an array of 4 bytes using bitwise operations.
 * @public
 * @param num - The parameter `num` is a number that needs to be converted into a byte array.
 * @returns The function `int_to_bytes` returns a `Uint8Array` containing the four bytes that represent
 * the input `num` as an unsigned 32-bit integer in big-endian byte order.
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
 * The function converts an array of four bytes into a single integer value.
 * @public
 * @param bytes - The parameter `bytes` is an array of four numbers representing a 32-bit integer in
 * big-endian byte order. The function `bytes_to_int` converts this byte array into a single integer
 * value.
 * @returns The function `bytes_to_int` is returning an integer value that is obtained by concatenating
 * the four bytes in the input array `bytes` in big-endian order.
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

