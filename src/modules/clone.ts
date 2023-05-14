/**
 * The function creates a shallow copy of an object in TypeScript.
 * @public
 * @param source - The `source` parameter is of type `T`, which is a generic type that extends the
 * `object` type. It represents the object that needs to be cloned.
 */
function clone_simple<T extends object>(source: T): T {
    return JSON.parse(JSON.stringify(source))
}

/**
 * This function creates a deep copy of an object in TypeScript.
 * @public
 * @param source - The `source` parameter is of type `T`, which is a generic type that extends the
 * `object` type. It represents the object that needs to be cloned deeply, meaning that a new object
 * with the same properties and values as the original object is created, but with no reference to the
 * original
 */
function clone_deep<T extends object>(source: T) {
    const target = Object.create(Object.getPrototypeOf(source)) as T
    const loopStack = [[target, source]] as [Record<string, any>, Record<string, any>][]
    const map = new WeakMap()
    map.set(source, target)

    while (loopStack.length > 0) {
        const [ target, source ] = loopStack.pop()!
        const keys = Object.getOwnPropertyNames(source)

        for (const key of keys) {
            if (typeof source[key] === 'object' && source[key] !== null) {
                if (map.has(source[key])) {
                    target[key] = map.get(source[key])
                }
                else {
                    target[key] = Object.create(Object.getPrototypeOf(source[key]))
                    loopStack.push([target[key], source[key] ])
                    map.set(source[key], target[key])
                }
            }
            else {
                target[key] = source[key]
            }
        }
    }

    if (!Object.isExtensible(source)) {
        Object.preventExtensions(target)
    }

    return target
}

/**
 * The function `clone` creates a deep copy of an object in TypeScript.
 * @public
 * @param source - The `source` parameter is of type `T`, which is a generic type that extends the
 * `object` type. It represents the object that needs to be cloned.
 */
function clone<T extends object>(source: T): T {
    try {
        return clone_simple(source)
    }
    catch (_) {
        return clone_deep(source)
    }
}

export {
    clone,
    clone_deep,
    clone_simple,
}
