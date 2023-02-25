import { mathRandomInt } from './math'
import type { TupleToObject } from '../types'

/**
 * 将数组转换为对象
 * @category array
 */
export function arrToObj<T extends Array<string | number>, V = boolean>(a: T, v = true) {
  const result = {} as Record<string, any>
  a.forEach(i => {
    result[i] = v
  })
  return result as TupleToObject<T, V>
}

/**
 * 数组去重
 * @category array
 */
export function arrUnique<T>(array: T[]): T[] {
  return Array.from(new Set(array))
}

/**
 * 移除数组中的一项
 * @category array
 */
export function arrRemove<T>(array: T[], value: T) {
  if (!array) { return false }
  const index = array.indexOf(value)
  if (index >= 0) {
    array.splice(index, 1)
    return true
  }
  return false
}

/**
 * 移动数组中某一项至指定位置
 * @category array
 */
export function arrMove<T extends any[]>(arr: T, from: number, to: number) {
  arr.splice(to, 0, arr.splice(from, 1)[0])
  return arr
}

/**
 * 获取数组中随机一项
 * @category array
 */
export function arrRandom<T>(arr: T[]): T {
  return arr[mathRandomInt(0, arr.length)]
}