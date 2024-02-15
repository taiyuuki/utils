/**
 * 该函数使用 JSON 解析和字符串化克隆一个简单对象。
 * @public
 * @param source - `source` 参数的类型为 `T`，它是扩展 `object` 类型的通用类型。它代表需要克隆的对象。
 * @returns `clone_simple` 函数返回作为参数传递的 `source` 对象的深层副本。返回的对象与原始对象具有相同的属性和值，但它是内存中的新对象。
 */
function clone_simple<T extends object>(source: T): T {
    return JSON.parse(JSON.stringify(source))
}

/**
 * 这是一个执行对象深度克隆的函数。
 * @public
 * @param  source - 需要深度克隆的对象。
 * @returns 函数“clone_deep”返回输入对象的深度克隆。
 */
function clone_deep<T extends object>(source: T) {
    const target = Object.create(Object.getPrototypeOf(source)) as T
    const loopStack = [[target, source]] as [Record<string, any>, Record<string, any>][]
    const map = new WeakMap()
    map.set(source, target)

    while (loopStack.length > 0) {
        const [target, source] = loopStack.pop()!
        const keys = Object.getOwnPropertyNames(source)

        for (const key of keys) {
            if (typeof source[key] === 'object' && source[key] !== null) {
                if (map.has(source[key])) {
                    target[key] = map.get(source[key])
                }
                else {
                    target[key] = Object.create(Object.getPrototypeOf(source[key]))
                    loopStack.push([target[key], source[key]])
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
 * 该函数使用简单方法或深层方法克隆对象，具体取决于简单方法是否失败。
 * @public
 * @param source - 需要克隆的源对象。该函数根据源对象的类型使用简单或深度克隆方法。该函数返回源对象的克隆。
 * @returns `clone` 函数返回与输入`source` 对象类型相同的克隆对象。如果 `clone_simple` 函数成功创建了 `source`
 * 对象的浅拷贝，则返回该浅拷贝。否则，如果在浅拷贝过程中抛出错误，将调用 `clone_deep` 函数创建 `source` 的深拷贝
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
