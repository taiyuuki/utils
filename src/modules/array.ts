import { mathRandomInt } from './math'
import type { TupleToObject } from '../types'

/**
 * 将数组转换为对象
 * @public
 * @param arr - 数组
 * @param v - 对象每一项的值
 * @returns 对象
 */
export function arrToObj<T extends Array<string | number>, V = boolean>(arr: T, v = true) {
  const result = {} as Record<string, any>
  arr.forEach(i => {
    result[i] = v
  })
  return result as TupleToObject<T, V>
}

/**
 * 数组去重
 * @public
 * @param arr - 数组
 * @returns 去重后的数组
 */
export function arrUnique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}

/**
 * 移除数组中的一项
 * @public
 * @param arr - 数组
 * @param value - 需要移除的值
 * @returns 成功或失败的布尔值
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
 * @public
 * @param arr - 数组
 * @param from - 移动项索引
 * @param to - 移动位置索引
 * @returns 移动后的数组
 */
export function arrMove<T extends any[]>(arr: T, from: number, to: number) {
  arr.splice(to, 0, arr.splice(from, 1)[0])
  return arr
}

/**
 * 获取数组中随机一项
 * @public
 * @param arr - 数组
 */
export function arrRandom<T>(arr: T[]): T {
  return arr[mathRandomInt(0, arr.length)]
}