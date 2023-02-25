type UnionToCross<T> = (T extends T ? (s: () => T) => void : never) extends (s: infer R) => void ? R : never;
type GetCrossLast<T> = T extends () => infer R ? R : never;
type UnionToTuple<T, Result extends Array<string> = []> = [T] extends [never] ? Result : [
    ...UnionToTuple<Exclude<T, GetCrossLast<UnionToCross<T>>>>,
    GetCrossLast<UnionToCross<T>>
];
type ObjectKey = string | number | symbol;
type TupleToUnion<Tuple extends Array<unknown>> = Tuple[number];
type TupleToObject<T extends ObjectKey[], V = boolean> = {
    [k in TupleToUnion<T>]: V;
};

/**
 * 将数组转换为对象
 * @category array
 */
declare function arrToObj<T extends Array<string | number>, V = boolean>(a: T, v?: boolean): TupleToObject<T, V>;
/**
 * 数组去重
 * @category array
 */
declare function arrUniq<T>(array: T[]): T[];
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

/**
 * 函数节流
 * @category function
 */
declare function throttle<T extends (...args: unknown[]) => unknown>(func: T, timeFrame: number, immediately?: boolean): T;
/**
 * 函数防抖
 * @category function
 */
declare function debounce<T extends (...args: unknown[]) => unknown>(func: T, timeFrame: number): T;

/**
 * 判断是否是对象，不包括数组和null
 * @category is
 */
declare function isObject(o: any): o is Exclude<Object, Array<any>>;
/**
 * 判断是否是Date对象
 * @category is
 */
declare function isDate(d: any): d is Date;
/**
 * 判断是否是正则表达式
 * @category is
 */
declare function isRegexp(r: any): r is RegExp;
/**
 * 判断是否是数字，不包括NaN、INFINITY
 * @category is
 */
declare function isNumber(n: any): n is number;
/**
 * 判断是否是空值，空值包括null、undefined，不包括NaN
 * @category is
 */
declare function isNotVoid<T>(t: T): t is NonNullable<T>;
/**
 * 判断是否是空值，空值包括null、undefined，不包括NaN
 * @category is
 */
declare function isVoid(t: any): t is null | undefined;
/**
 * 判断是否是空字符串
 * @category is
 */
declare function isEmptyString(s: any, trim?: boolean): boolean;
/**
 * 判断是否是空数组
 * @category is
 */
declare function isEmptyArray(a: any): a is [];
/**
 * 判断是否是空对象
 * @category is
 */
declare function isEmptyObj(o: any): o is {};

/**
 * 四舍五入
 * @category math
 * @param digit 小数点后位数
 */
declare function mathToFixed(n: number, digit?: number): number;
/**
 * 随机整数
 * @category math
 */
declare function mathRandomInt(from: number, to: number): number;
/**
 * 给定一个数字，返回一个保持位于两数之间的数
 * @category math
 * @param v 给定数字
 * @param min 下限
 * @param max 上限
 */
declare function mathBetween(v: number, min: number, max: number): number;

/**
 * Object.keys的返回值，提供类型推断
 * @category overwrite
 */
declare function getKeys<T extends Record<any, any>>(o: T): UnionToTuple<keyof T>;

/**
 * 获取指定长度随机字符
 * @category string
 * @count 长度
 * @digit 进制 0-36
 * @example
 * ```ts
 * const str = strRandom(6, 16)// 获取取长度为6的随机16进制字符
 * ```
 */
declare function strRandom(count: number, digit?: number): string;
/**
 * 生成UUID
 * @category string
 */
declare function strUuid(): string;

export { arrMove, arrRandom, arrRemove, arrToObj, arrUniq, debounce, getKeys, isDate, isEmptyArray, isEmptyObj, isEmptyString, isNotVoid, isNumber, isObject, isRegexp, isVoid, mathBetween, mathRandomInt, mathToFixed, strRandom, strUuid, throttle };
