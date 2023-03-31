/**
 * 简单克隆，适用于不含方法、不含循环引用的普通对象。
 * @public
 * @param source - 克隆对象
 */
export function clone<T extends object>(source: T): T {
  return JSON.parse(JSON.stringify(source))
}

/**
 * 深克隆，包含方法、循环引用时可用
 * @param source - 克隆对象
 */
export function deepClone<T extends object>(source: T) {
  const target = Object.create(Object.getPrototypeOf(source)) as T
  const loopStack = [{ target, source }] as any
  const map = new Map()
  map.set(source, target)

  while (loopStack.length > 0) {
    const { target, source } = loopStack.pop()!
    const keys = Object.getOwnPropertyNames(source)

    for (const key of keys) {
      if (typeof source[key] === 'object' && source[key] !== null) {
        if (map.has(source[key])) {
          target[key] = map.get(source[key])
        }
        else {
          target[key] = Object.create(Object.getPrototypeOf(source[key]))
          loopStack.push({ target: target[key], source: source[key] })
          map.set(source[key], target[key])
        }
      }
      else {
        target[key] = source[key]
      }
    }
  }

  return target
}