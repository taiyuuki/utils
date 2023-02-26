import { isNotVoid } from './is'

/**
 * 函数节流
 * @public
 * @param func - 需要节流的函数
 * @param timeFrame - 时间间隔
 * @param immediately - 是否立即执行
 * @returns 节流后的函数
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  timeFrame: number,
  immediately?: boolean
): T {
  let lastTime = 0
  let timer: NodeJS.Timeout | undefined
  immediately = immediately ?? true
  return function (...args: unknown[]) {
    const now = Date.now()
    if (isNotVoid(timer)) {
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
 * 函数防抖
 * @public
 * @param func - 需要防抖的函数
 * @param timeFrame - 时间间隔
 * @returns 防抖后的函数
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  timeFrame: number,
) {
  let lastTime = 0
  return function (...args: unknown[]) {
    const now = Date.now()
    if (now - lastTime >= timeFrame) {
      lastTime = now
      return func(...args)
    }
    lastTime = now
  } as T
}

/**
 * 函数组合，前一个函数的返回值作为下一个函数的参数
 * @public
 */
export function compose<T extends (...args: any[]) => any>(...fns: T[]) {
  return function (arg: unknown) {
    return fns.reduce((pre, fn) => {
      return fn(pre)
    }, arg)
  }
}