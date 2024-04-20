import type { Key, TupleToObject } from '../types'
import { math_random_int } from './math'

/**
 * 该函数将数组转换为一个对象，其中键作为属性和一个可选的默认值。
 * @public
 * @param arr - 将用作结果对象中的属性名称的数组，数组的元素类型为string | number | symbol。
 * @param v - 参数“v”是“V”类型的可选参数，默认为布尔值“true”。它用于设置结果对象中每个键的值。
 * @returns 函数 arr_to_obj 返回一个对象，该对象具有输入数组 arr 中的键和 V 类型的值。
 * 它将键“T”的元组转换为具有这些键和值类型“V”的对象。
 * @example
 * ```ts
 * const arr = ['a', 'b', 'c']
 * arr_to_obj(arr)
 * // { a: true, b: true, c: true }
 * ```
 */
function arr_to_obj<T extends Key, V = boolean>(arr: T[], v?: V) {
    const result: Record<Key, V> = {}
    const value = v ?? true as V
    arr.forEach(i => {
        result[i] = value
    })

    return result as TupleToObject<T, V>
}

/**
 * 此函数接受任何类型的数组并返回一个仅包含唯一值的新数组。
 * @public
 * @param arr -
 * 参数“arr”是一个类型为T的数组，其中T可以是字符串、数字、布尔值、对象等任意数据类型。函数“arr_unique”将这个数组作为输入，返回一个只有唯一元素的新数组.它使用 Set 对象来删除重复项
 * @returns 函数“arr_unique”返回一个“T”类型的唯一元素数组。
 * @example
 * ```ts
 * const arr = ['a', 'b', 'c', 'c', 'a']
 * arr_unique(arr)
 * // ['a', 'b', 'c']
 * ```
 */
function arr_unique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr))
}

/**
 * 函数 arr_remove 用于从数组中删除指定的值。
 * @public
 * @param arr - T 类型元素的数组。
 * @param value - 要从数组中删除的值。
 * @returns 函数 arr_remove 返回一个布尔值。如果值已成功从数组中删除，则返回“true”；如果在数组中找不到该值，则返回“false”。
 * @example
 * ```ts
 * const arr = ['a', 'b', 'c']
 * arr_remove(arr, 'b')
 * // ['a', 'c']
 * ```
 */
function arr_remove<T>(arr: T[], value: T) {
    if (!arr) {
        return false
    }
    const index = arr.indexOf(value)
    if (index >= 0) {
        arr.splice(index, 1)

        return true
    }

    return false
}

/**
 * 函数 arr_move 将数组中的元素从一个索引移动到另一个索引。
 * @public
 * @param arr - 需要修改的数组。
 * @param from - 数组中需要移动的元素的索引。
 * @param to - 数组中元素应移动到的索引。
 * @returns 将元素从索引“from”移动到索引“to”后修改后的数组“arr”。
 * @example
 * ```ts
 * const arr = ['a', 'b', 'c']
 * arr_move(arr, 1, 2)
 * // ['a', 'c', 'b']
 * ```
 */
function arr_move<T extends any[]>(arr: T, from: number, to: number): T {
    arr.splice(to, 0, arr.splice(from, 1)[0])

    return arr
}

/**
 * 该函数从数组中返回一个随机元素。
 * @public
 * @param arr - 参数 arr 是 T 类型的数组。函数 arr_random 将一个数组作为输入，并从该数组中返回一个随机元素。 `T`
 * 类型是泛型类型，这意味着该函数可以处理任何类型的数组。
 * @returns 函数 arr_random 从输入数组 arr 中返回一个随机元素。返回元素的类型与输入数组中元素的类型相同。
 * @example
 * ```ts
 * const arr = ['a', 'b', 'c']
 * arr_random(arr)
 * // 'b'
 * arr_random(arr)
 * // 'a'
 * ```
 */
function arr_random<T>(arr: T[]): T {
    return arr[math_random_int(0, arr.length - 1)]
}

/**
 * 该函数创建一个指定长度的数组，其中填充了指定的值。
 * @public
 * @param length - 长度参数是一个数字，指定要创建的数组的所需长度。
 * @param value - value 参数是将用于填充数组的值。它可以是任何数据类型。
 * @returns 函数“get_fill_arr”返回一个长度为“length”的数组，其中填充了值“value”。数组元素的类型由作为参数传递给函数的通用类型“T”确定。
 * @example
 * ```ts
 * get_fill_arr(3, 'a')
 * // ['a', 'a', 'a']
 * ```
 */
function get_fill_arr<T>(length: number, value: T) {
    return Array.from<T>({ length }).fill(value)
}

/**
 * 这个 TypeScript 函数接受一个键数组并返回一个对象，每个键的值是它在数组中的索引。
 * @public
 * @param arr - T 类型值的数组，其中 T 扩展了 Key 类型。这意味着 T 只能是字符串、数字或符号。
 * @returns 函数 arr_value_index 返回一个对象，该对象将输入数组中的每个值映射到它在数组中的索引。返回对象的键是输入数组中的值，返回对象的值是这些值在输入数组中的对应索引。
 * @example
 * ```ts
 * arr_value_index(['a', 'b', 'c'])
 * // { a: 0, b: 1, c: 2 }
 * ```
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
