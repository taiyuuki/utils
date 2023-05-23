import { math_random_int } from './math'
import type { Key, TupleToObject } from '../types'

/**
 * The function converts an array of strings and numbers into an object with boolean values.
 * @public
 * @param arr - An array of strings or numbers that will be used as keys in the resulting object.
 * @param v - The parameter "v" is an optional parameter with a default value of boolean type. It
 * is used to set the value of each key in the resulting object. If "v" is not provided, the default
 * value of "true" will be used.
 * @returns The function `arr_to_obj` returns an object with keys from the input array `arr` and values
 * set to `v` if provided, otherwise `true`. The type of the returned object is determined by the
 * generic type parameters `T` and `V`. The function returns an object of type `TupleToObject<T, V>`.
 */
function arr_to_obj<T extends Key[], V = boolean>(arr: T, v?: V) {
    const result: Record<Key, V> = {}
    const value = v ?? true as V
    arr.forEach(i => {
        result[i] = value
    })
    return result as TupleToObject<T, V>
}

/**
 * This function takes an array of any type and returns a new array with only unique values.
 * @public
 * @param arr - arr is an array of type T, which means it can hold any type of data. The function
 * arrUnique takes this array as input and returns a new array with all the duplicate elements removed.
 */
function arr_unique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr))
}

/**
 * This function removes a specific value from an array of any type.
 * @public
 * @param arr - an array of type T, where T can be any data type such as string, number, object,
 * etc.
 * @param value - The value parameter is the element that needs to be removed from the array.
 */
function arr_remove<T>(arr: T[], value: T) {
    if (!arr) { return false }
    const index = arr.indexOf(value)
    if (index >= 0) {
        arr.splice(index, 1)
        return true
    }
    return false
}

/**
 * This function moves an element in an array from one index to another.
 * @public
 * @param arr - The `arr` parameter is an array of any type `T`.
 * @param from - The index of the element in the array that needs to be moved.
 * @param to - The "to" parameter is the index where the element in the array should be moved
 * to.
 */
function arr_move<T extends any[]>(arr: T, from: number, to: number) {
    arr.splice(to, 0, arr.splice(from, 1)[0])
    return arr
}

/**
 * This function returns a random element from an array of any type.
 * @public
 * @param arr - The parameter "arr" is an array of type T, which means it can be an array of any
 * type. The function "arr_random" takes in this array as input and returns a random element from the
 * array.
 */
function arr_random<T>(arr: T[]): T {
    return arr[math_random_int(0, arr.length)]
}

export {
    arr_move,
    arr_random,
    arr_remove,
    arr_to_obj,
    arr_unique,
}
