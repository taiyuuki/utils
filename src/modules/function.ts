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
 * @public
 * The `compose` function is a higher-order function that takes in any number of functions as arguments
 * and returns a new function that applies each of the input functions in sequence, passing the output
 * of one function as the input to the next. The `T extends Fn` syntax is a TypeScript generic type
 * constraint that ensures that each input function has the same signature, taking in one argument and
 * returning a value. The returned function takes in one argument and applies each of the input
 * functions in sequence, returning the final output.
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
