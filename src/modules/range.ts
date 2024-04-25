import { is_callable } from './is'

/**
 * 数字区间类，构造一个形如 (4, 10] 的区间对象，区分开闭区间。
 * @beta
 */
class MathRange {
    private static _REG_1 = /^([([])\s*(-?\d+)\s*,\s*(-?\d+)\s*(\)])$/
    private static _REG_2 = /^\d+$/

    private _r: string
    start: number
    end: number
    s_open: boolean
    e_open: boolean
    private _unique: boolean

    /**
     * Range 构造函数
     * @param r - 数字区间，也可以是单独一个数字。例如： (4, 10]，表示大于 4 且小于等于 10 的区间。
     */
    constructor(r: number | string) {
        if (typeof r === 'number' || MathRange._REG_2.test(r)) {
            r = Number(r)

            this.start = r
            this.end = r
            this._unique = true
            this.s_open = false
            this.e_open = false
            this._r = `[${r}, ${r}]`
        } else {
            if (!MathRange._REG_1.test(r)) {
                throw new Error(`Invalid range: ${r}.`)
            }
            this._r = r

            const [start, end] = r.slice(1, -1).split(',')

            this.start = Number(start)
            this.end = Number(end)

            if (this.start > this.end) {
                throw new Error(`Invalid range: ${r}, start is greater than end.`)
            }

            this._unique = this.start === this.end

            this.s_open = r[0] === '('
            this.e_open = r[r.length - 1] === ')'
        }
    }

    /**
     * `toString` 函数返回字符串格式的数字区间。
     * @returns 字符串格式的数字区间。
     */
    toString() {
        return this._r
    }

    /**
     * 验证数字区间是否合法，但不验证数字的大小。
     * @param origin - 一个数字区间的字符串，区分开区间和闭区间。
     * @returns 验证结果
     */
    static valid(origin: number | string) {
        return typeof origin === 'number' || MathRange._REG_1.test(origin) || MathRange._REG_2.test(origin)
    }

    /**
     * 判断一个数字是否在区间内
     * @param num - 一个数字
     * @returns 判断结果
     */
    is_between(num: number) {
        if (this._unique) {
            return num === this.start
        }
        if (this.s_open) {
            if (this.e_open) {
                return num > this.start && num < this.end
            } else {
                return num > this.start && num <= this.end
            }
        } else if (this.e_open) {
            return num >= this.start && num < this.end
        } else {
            return num >= this.start && num <= this.end
        }
    }

    /**
     * 判断两个区间是否相等
     * @param other - 另一个区间对象
     * @returns 判断结果
     */
    equals(other: MathRange) {
        return this.start === other.start && this.end === other.end && this.s_open === other.s_open && this.e_open === other.e_open
    }

    /**
     * 获取两个区间的交集，如果不存在交集则返回null
     * @param other
     * @returns 交集，结果是开区间。
     */
    cross(other: MathRange) {
        if (this.start > other.end || this.end < other.start) {
            return null
        }

        return new MathRange(`(${this.start}, ${other.end})`)
    }
}

/**
 * 在数字区间列表中搜索数字所处的区间
 * @beta
 * @param n - 要搜索的数字
 * @param ranges - 数字区间列表，例如：['[0, 10]', '(10, 20]', '(20, 30]']，注意开闭区间，且各区间不要有重叠。
 * @returns 搜索结果是一个 Range 对象，如果没有找到则返回 null
 */
function search_range(n: number, ranges: (number | string)[]) {
    for (let i = 0; i < ranges.length; i++) {
        const range = new MathRange(ranges[i])
        if (range.is_between(n)) {
            return range
        }
    }

    return null
}

/**
 * 对数字进行模式匹配
 * @beta
 * @param n - 一个数字
 * @param pattern - 模式匹配对象
 * @returns 返回值取决于模式对象
 * @example
 * ```ts
 * const result = match_range(15, {
 *     '[0, 10]': 0,
 *     '(10, 20]': (range) => range.end - range.start,
 *     '(20, 30]': 2,
 *     _: 0, // _ 表示匹配任意其他范围的数字
 * })   // result = 10
 * ```
 */
function match_range<T>(n: number, pattern: Record<string, T | ((range: MathRange)=> T)>) {
    for (const p in pattern) {
        if (p === '_') {
            continue
        }
        const range = new MathRange(p)
        if (range.is_between(n)) {
            const handle = pattern[p]

            return is_callable(handle) ? handle(range) : handle
        }
    }
    if ('_' in pattern) {
        const handle = pattern._

        return is_callable(handle) ? handle(new MathRange(n)) : handle
    }

    return null
}

export { MathRange, search_range, match_range }
