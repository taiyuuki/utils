import { TupleToObject } from 'src/types';

/**
 * 将数组转换为对象
 * @category array
 */
declare function arrToObj<T extends Array<string | number>, V = boolean>(a: T, v?: boolean): TupleToObject<T, V>;
/**
 * 数组去重
 * @category array
 */
declare function arrUniq<T extends any[]>(array: T): T[];
/**
 * 移除数组中的一项
 * @category array
 */
declare function arrRemove<T>(array: T[], value: T): boolean;
/**
 * 移动数组中某一项至指定位置
 * @category array
 */
declare function arrMove<T extends any[]>(arr: T, from: number, to: number): T;
/**
 * 获取数组中随机一项
 * @category array
 */
declare function arrRandom<T>(arr: T[]): T;

export { arrMove, arrRandom, arrRemove, arrToObj, arrUniq };
