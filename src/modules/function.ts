import type { Fn } from '../types'
import { is_not_void } from './is'

/**
 * This is a function that implements throttle functionality for a given function.
 * @public
 * @param func - The function to be throttled
 * @param timeFrame - The time interval in milliseconds
 * @param immediately - Whether the function should be executed immediately or not
 * @returns The throttled function is implementing the throttle functionality for a given function.
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
 * This is a function that implements debounce functionality for a given function.
 * @public
 * @param func - The function to be debounced
 * @param timeFrame - The time interval in milliseconds
 * @returns The debounced function is implementing the debounce functionality for a given function.
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
 * This is a function that implements compose functionality for a given function.
 * @public
 * @param fns - The functions to be composed.
 * @returns The composed function is implementing the compose functionality for a given function.
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
