import { UnionToTuple } from '../types/index.js';

/**
 * Object.keys的返回值，提供类型推断
 * @category overwrite
 */
declare function getKeys<T extends Record<any, any>>(o: T): UnionToTuple<keyof T>;

export { getKeys };
