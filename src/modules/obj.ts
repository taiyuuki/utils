import type { Entries, Key, Keys } from '../types'

/**
 * This function returns the keys of an object as an array.
 * @public
 * @param o - o is a generic parameter of type T that extends the object type. It represents the
 * object whose keys we want to retrieve.
 * @returns The function `object_keys` returns an array of keys of the input object `o`, with the type
 * of the keys being inferred based on the type of the input object. The type of the returned value is
 * `Keys<T>`, which is a type alias defined elsewhere in the code.
 */
function object_keys<T extends object>(o: T): Keys<T> {
    return Object.keys(o) as Keys<T>
}

/**
 * This function returns the entries of an object as an array of key-value pairs.
 * @public
 * @param obj - The `obj` parameter is of type `T`, which extends the `object` type. It represents
 * an object whose entries we want to retrieve.
 * @returns The function `object_entries` is returning an array of key-value pairs of the input object
 * `obj`. The type of the returned array is `Entries<T>`, which is a type alias defined elsewhere in
 * the code. The `as Entries<T>` syntax is used to assert the type of the returned value as
 * `Entries<T>`.
 */
function object_entries<T extends object>(obj: T): Entries<T> {
    return Object.entries(obj) as Entries<T>
}

/**
 * This function checks if a given key exists in a given object and returns a boolean value.
 * @public
 * @param key - The first parameter `key` is a generic type that extends the keys of an object `T`. It
 * represents the key that we want to check if it exists in the object `obj`.
 * @param obj - The `obj` parameter is an object of type `T`. The `T` type is a generic type that
 * extends the `object` type, which means that `obj` can be any object type.
 */
function key_in<T extends object>(key: Key, obj: T): key is keyof T {
    return key in obj
}

/**
 * The function `object_pick` takes an object and an array of keys and returns a new object with only
 * the specified keys from the original object.
 * @public
 * @param obj - The first parameter `obj` is an object of type `T` which is a generic type that
 * extends the `object` type. This means that `obj` can be any object that has properties and methods.
 * @param keys - `keys` is an array of keys of type `K` that we want to pick from the object
 * `obj` of type `T`. The `K` type parameter is a generic type that extends the keys of the object `T`.
 * This means that `K` can only be a key
 */
function object_pick<T extends object, K extends keyof T>(obj: T, keys: K[]) {
    return keys.reduce((result, key) => {
        if (key_in(key, obj)) {
            result[key] = obj[key]
        }
        return result
    }, {} as Pick<T, K>)
}

export {
    object_entries,
    object_keys,
    object_pick,
    key_in,
}
