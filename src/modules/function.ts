import type { Fn } from '../types'
import { is_not_void } from './is'

/**
 * 为给定函数实现节流功能。
 * @public
 * @param func - 需要节流的函数
 * @param timeFrame - 时间间隔
 * @param immediately - 是否立即执行，默认值为 true
 * @returns 节流后的函数
 */
function throttle<T extends Fn>(
    func: T,
    timeFrame: number,
    immediately?: boolean
): T {
    let lastTime = 0
    let timer: NodeJS.Timeout | undefined
    immediately = immediately ?? true
    return function (...args: unknown[]) {
        const now = Date.now()
        if (is_not_void(timer)) {
            clearTimeout(timer)
        }
        if (now - lastTime >= timeFrame && immediately) {
            lastTime = now
            return func(...args)
        }
        else {
            timer = setTimeout(() => {
                func(...args)
                timer = void 0
            }, timeFrame)
        }
    } as T
}

/**
 * 为给定函数实现去抖动功能。
 * @public
 * @param func - 需要去抖动的函数
 * @param timeFrame - 时间间隔
 * @returns 去抖动后的函数
 */
function debounce<T extends Fn>(
    func: T,
    timeFrame: number,
) {
    let lastTime = 0
    return function (...args: unknown[]) {
        const now = Date.now()
        try {
            if (now - lastTime >= timeFrame) {
                return func(...args)
            }
        }
        finally {
            lastTime = now
        }
    } as T
}

/**
 * `compose` 函数接受一个函数数组并返回一个新函数，该函数将数组中的每个函数从右到左应用于其参数。
 * @public
 * @param fns - `Fn` 类型的函数数组。允许将任意数量的函数作为参数传递给“compose”函数。
 * @returns “compose”函数返回一个新函数，按从右到左的顺序对其应用一系列函数。返回组合的最终结果。
 */
function compose<T extends Fn>(...fns: T[]) {
    return function (arg: unknown) {
        return fns.reduce((pre, fn) => {
            return fn(pre)
        }, arg)
    }
}

export {
    debounce,
    throttle,
    compose,
}
