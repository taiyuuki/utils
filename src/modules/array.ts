import { mathRandomInt } from './math'
import type { TupleToObject } from '../types'

/**
 * 将数组转换为对象
 * @public
 * @param arr - 数组
 * @param v - 对象每一项的值
 * @returns 对象
 */
export function arrToObj<T extends Array<string | number>, V = boolean>(arr: T, v?: V) {
  const result = {} as Record<string, any>
  arr.forEach(i => {
    result[i] = v ?? true
  })
  return result as TupleToObject<T, V>
}

/**
 * 数组去重
 * This function takes an array of any type and returns a new array with only unique values.
 * @public
 * @param arr - arr is an array of type T, which means it can hold any type of data. The function
 * arrUnique takes this array as input and returns a new array with all the duplicate elements removed.
 */
export function arrUnique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}

/**
 * 移除数组中的一项
 * This function removes a specific value from an array of any type.
 * @public
 * @param arr - an array of type T, where T can be any data type such as string, number, object,
 * etc.
 * @param value - The value parameter is the element that needs to be removed from the array.
 */
export function arrRemove<T>(arr: T[], value: T) {
  if (!arr) { return false }
  const index = arr.indexOf(value)
  if (index >= 0) {
    arr.splice(index, 1)
    return true
  }
  return false
}

/**
 * 移动数组中的某一项至指定位置
 * This function moves an element in an array from one index to another.
 * @public
 * @param arr - The `arr` parameter is an array of any type `T`.
 * @param from - The index of the element in the array that needs to be moved.
 * @param to - The "to" parameter is the index where the element in the array should be moved
 * to.
 */
export function arrMove<T extends any[]>(arr: T, from: number, to: number) {
  arr.splice(to, 0, arr.splice(from, 1)[0])
  return arr
}

/**
 * 获取数组中随机一项
 * This function returns a random element from an array of any type.
 * @public
 * @param arr - The parameter "arr" is an array of type T, which means it can be an array of any
 * type. The function "arrRandom" takes in this array as input and returns a random element from the
 * array.
 */
export function arrRandom<T>(arr: T[]): T {
  return arr[mathRandomInt(0, arr.length)]
}