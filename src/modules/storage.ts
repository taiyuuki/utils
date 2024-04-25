import { is_not_void } from './is'

/**
 * 该函数使用指定的键将任何类型的值存储在浏览器的本地存储中。
 * @public
 * @param key - 一个字符串，表示值将存储在浏览器的本地存储中所依据的键。
 * @param value - value 参数是 T 类型，这意味着它可以是任何数据类型。它表示需要使用给定键存储在本地存储中的值。该函数将值转换为 JSON
 * 字符串，然后将其存储在本地存储中。
 */
function storage_set<T>(key: string, value: T) {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.error(e)
    }
}

/**
 * 该函数从本地存储中检索数据并将其作为已解析的 JSON 对象或可选的默认值返回。
 * @public
 * @param key - 键是一个字符串，用于标识存储在 localStorage 中的数据。它用于在需要时检索数据。
 * @param empty - 该参数是可选的，表示如果在 localStorage
 * 中找不到指定键的值，则返回默认值。如果未提供“empty”，则如果找不到该值，该函数将返回“undefined”。
 * @returns 函数 `storage_get` 返回类型为 `T` 或 `undefined` 的值。返回值的类型取决于 `empty` 参数的类型，该参数是可选的，默认值为
 * `undefined`。如果未提供“empty”或为“undefined”，则该函数返回类型为“T”或“undefined”的值。如果提供了`empty`并且
 * 该值为“undefined”，则该函数返回“undefined”。
 */
function storage_get<T, K extends T = T>(key: string, empty?: K): T | undefined {
    try {
        const data = localStorage.getItem(key)

        return is_not_void(data) ? JSON.parse(data) : empty ?? void 0
    } catch (e) {
        console.error(e)

        return void 0
    }
}

/**
 * 该函数根据给定的键从本地存储中删除一个项目。
 * @public
 * @param key - key 参数是一个字符串，表示要从浏览器本地存储中删除的项目的名称。
 */
function storage_remove(key: string) {
    localStorage.removeItem(key)
}

export {
    storage_get,
    storage_remove,
    storage_set,
}
