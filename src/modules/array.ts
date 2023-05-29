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
function arr_move<T extends any[]>(arr: T, from: number, to: number): T {
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

/**
 * This is a function that creates an array of a specified length and fills it with a
 * specified value.
 * @public
 * @param length - The length parameter is a number that specifies the desired length of the
 * array to be created.
 * @param value - The value parameter is the value that will be used to fill the array. It can be
 * of any data type, as the function is generic and can be used with any type.
 * @returns The function `arr_fill` is returning an array of length `length` filled with the value
 * `value`. The type of the array elements is determined by the type of the `value` parameter, which is
 * specified by the generic type parameter `T`.
 */
function get_fill_arr<T>(length: number, value: T) {
    return Array.from<T>({ length }).fill(value)
}

/**
 * This function takes an array of keys and returns an object with the keys as values and
 * their indices as keys.
 * @public
 * @param arr - The input array of type T, where T extends the Key type.
 * @returns an object with keys as the elements of the input array and values as their corresponding
 * indices in the array. The object has a type of `Record<T, number>`, where `T` is the type of the
 * elements in the input array and `number` is the type of the indices.
 */
function arr_value_index<T extends Key>(arr: T[]): Record<T, number> {
    return arr.reduce((acc, key, index) => {
        acc[key] = index
        return acc
    }, {} as Record<T, number>)
}

export {
    arr_move,
    arr_random,
    arr_remove,
    arr_to_obj,
    arr_unique,
    get_fill_arr,
    arr_value_index,
}
