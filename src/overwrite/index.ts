import type { UnionToTuple } from '../types'

/**
 * Object.keys的返回值，提供类型推断
 * @category overwrite
 */
export function getKeys<T extends Record<any, any>>(o: T): UnionToTuple<keyof T> {
  return Object.keys(o) as UnionToTuple<keyof T>
}