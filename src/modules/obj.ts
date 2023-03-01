import type { Entries, Keys } from '../types'

/**
 * Object.keys的返回值，提供类型推断
 * @public
 */
export function objectKeys<T extends object>(o: T): Keys<T> {
  return Object.keys(o) as Keys<T>
}

/**
 * Object.entries的返回值，提供类型推断
 * @public
 */
export function objectEntries<T extends object>(obj: T): Entries<T> {
  return Object.entries(obj) as Entries<T>
}

/**
 * 判断某个对象是否有某个属性
 * @public
 * @param key - 键名
 * @param obj - 对象
 * @returns 布尔值
 */
export function keyIn<T extends object>(key: keyof T, obj: T): key is keyof T {
  return key in obj
}

/**
 * 提取对象中部分属性
 * @public
 * @param obj - 对象
 * @param keys - 属性构成的数组
 * @returns 提取属性后的对象
 */
export function objectPick<T extends object, K extends keyof T>(obj: T, keys: K[]) {
  return keys.reduce((result, key) => {
    if (keyIn(key, obj)) {
      result[key] = obj[key]
    }
    return result
  }, {} as Pick<T, K>)
}