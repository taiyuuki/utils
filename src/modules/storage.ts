import { isNotVoid } from './is'

/**
 * 保存至localStorage
 * @public
 * @param key - 键名
 * @param value - 值
 */
export function storageSet<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  }
  catch (e) {
    console.error(e)
  }
}

/**
 * 从localStorage读取
 * @public
 * @param key - 键名
 * @param empty - 值为空时的填充值，默认是空字符串
 * @returns 值
 */
export function storageGet<T>(key: string, empty?: T) {
  try {
    const data = localStorage.getItem(key)
    return isNotVoid(data) ? JSON.parse(data) : (empty ?? '')
  }
  catch (e) {
    console.error(e)
  }
}

/**
 * 从localStorage移除
 * @public
 * @param key - 键名
 */
export function storageRemove(key: string) {
  localStorage.removeItem(key)
}