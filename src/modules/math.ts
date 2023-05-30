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
 * The function takes a number as input and returns its hexadecimal equivalent.
 * @public
 * @param n - The parameter "n" is a number that we want to convert to a hexadecimal string.
 */
function math_to_hex(n: number) {
    return n.toString(16).padStart(2, '0').toUpperCase()
}

export {
    math_between,
    math_random_int,
    math_to_fixed,
    math_to_hex,
}
