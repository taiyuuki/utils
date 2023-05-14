import type { Fn } from '../types'
import { is_not_void } from './is'

/**
 * @public
 * This is a function that implements throttle functionality for a given function. It takes
 * in three parameters: `func`, which is the function to be throttled, `timeFrame`, which is the time
 * interval in milliseconds, and `immediately`, which is an optional boolean parameter that determines
 * whether the function should be executed immediately or not.
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
 * @public
 * The `debounce` function is implementing the debounce functionality for a given function. It takes in
 * Ttwo parameters: `func`, which is the function to be debounced, and `timeFrame`, which is the time
 * Tinterval in milliseconds. The returned function will only execute `func` if `timeFrame` milliseconds
 * Thave passed since the last time it was called. If it is called again before `timeFrame` milliseconds
 * Thave passed, the timer is reset and the function will not be executed.
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
