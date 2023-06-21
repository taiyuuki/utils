import type { Entries, Key, Keys, Concat } from '../types'

/**
 * 该函数将对象的键作为数组返回。
 * @public
 * @param o - o 是扩展对象的类型 T 的泛型参数。它表示要返回其键的对象。
 * @returns 函数 object_keys 返回输入对象 o 的键数组。
 */
function object_keys<T extends object>(o: T): Keys<T> {
    return Object.keys(o) as Keys<T>
}

/**
 * 此函数将对象的条目作为键值对数组返回。
 * @public
 * @param obj - 对象
 * @returns 函数 object_entries 返回输入对象 obj 的键值对数组。
 */
function object_entries<T extends object>(obj: T): Entries<T> {
    return Object.entries(obj) as Entries<T>
}

/**
 * 该函数检查给定对象中是否存在给定键并返回布尔值。
 * @public
 * @param key - 第一个参数“key”的类型为“Key”，它可能是表示对象属性键的字符串或符号。
 * @param obj - `obj` 参数是类型为 `T` 的对象，它是扩展了 `object` 类型的泛型。这意味着 `obj` 可以是任何具有属性和方法的对象。
 * @returns 一个布尔值，指示提供的键是否存在于提供的对象的键中。
 */
function key_in<T extends object>(key: Key, obj: T): key is keyof T {
    return key in obj
}

/**
 * 函数“object_pick”接受一个对象和一个键数组，并返回一个新对象，该对象仅包含原始对象中的指定键。
 * @public
 * @param obj - 我们要从中选择特定键的对象。
 * @param keys - keys 是一个字符串数组，表示我们要选择的对象的键。该函数将返回一个新对象，该对象仅包含原始对象中指定的键及其对应的值。
 * @returns 函数 object_pick 返回一个新对象，该对象仅包含来自输入对象的指定键。
 */
function object_pick<T extends object, K extends keyof T>(obj: T, keys: K[]) {
    return keys.reduce((result, key) => {
        if (key_in(key, obj)) {
            result[key] = obj[key]
        }
        return result
    }, {} as Pick<T, K>)
}

/**
 * 函数 object_concat 连接两个通用类型的对象并返回连接后的对象。
 * @public
 * @param target - 第一个参数表示将通过添加来自第二个参数“源”的属性来修改的对象。
 * @param source - 表示将合并到“目标”对象中的对象。
 * @returns `object_concat` 函数返回 `Object.assign(target, source)` 的结果，这是一个合并了 `target` 和 `source`
 * 对象属性的新对象。返回类型为“T”和“S”对象类型串联的类型。
 */
function object_concat<T extends object, S extends object>(target: T, source: S) {
    return Object.assign(target, source) as Concat<T, S>
}

export {
    object_entries,
    object_keys,
    object_pick,
    key_in,
    object_concat,
}
