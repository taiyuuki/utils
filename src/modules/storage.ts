import { isNotVoid } from './is'

/**
 * 保存至localStorage
 * @kind storage
 */
export const setStorage = <T>(key: string, value: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  }
  catch (e) {
    console.error(e)
  }
}

/**
 * 从localStorage读取
 * @kind storage
 */
export const getStorage = <T>(key: string, empty?: T) => {
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
 * @kind storage
 */
export const removeStorage = (key: string) => {
  localStorage.removeItem(key)
}