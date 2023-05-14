import { is_object } from './is'

/**
 * The function checks if two values are deeply equal.
 * @public
 * @param a - The first parameter of the function, which can be of any type (primitive or
 * object).
 * @param b - The parameter "b" is a variable of any data type that is being compared to another
 * variable "a" using the deep_equal function.
 * @returns a boolean value indicating whether the two input values are deeply equal or not.
 */
function deep_equal(a: any, b: any): boolean {
    if (a === b) {
        return true
    }
    if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        return false
    }
    if (is_object(a) && is_object(b)) {
        if (a.constructor !== b.constructor) {
            return false
        }
        const aKeys = Object.keys(a)
        if (aKeys.length === Object.keys(b).length) {
            return aKeys.every(key => {
                return deep_equal(a[key], b[key])
            })
        }
        else {
            return false
        }
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length === b.length) {
            return a.every((_, i) => {
                return deep_equal(a[i], b[i])
            })
        }
        else {
            return false
        }
    }
    return Object.is(a, b)
}

export { deep_equal }
