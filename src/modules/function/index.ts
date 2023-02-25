import { isNotVoid } from '../is'

/**
 * 函数节流
 * @category function
 */
export function throttle<T extends(...args: unknown[]) => unknown>(
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
 * @category function
 */
export function debounce<T extends(...args: unknown[]) => unknown>(
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