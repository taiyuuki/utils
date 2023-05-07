import { isNotVoid } from './is'

/**
 * 保存至localStorage
 * The function stores a value of any type in the browser's local storage using a specified key.
 * @public
 * @param key - a string representing the key under which the value will be stored in the
 * localStorage object.
 * @param value - The value to be stored in the local storage. It can be of any data type, as the
 * function is using generics to handle different types of values.
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
 * The function retrieves data from local storage and returns it as a parsed JSON object or an optional
 * default value.
 * @public
 * @param key - The key is a string that is used to identify the data that is being retrieved
 * from the localStorage. It is used to store and retrieve data from the browser's localStorage object.
 * @param empty - The `empty` parameter is an optional parameter of generic type `T` that
 * represents the default value to be returned if the value for the specified key is not found in the
 * localStorage. If `empty` is not provided, the function will return `undefined` as the default value.
 * @returns The function `storageGet` returns the parsed value of the item stored in the `localStorage`
 * with the given `key`. If the item is not found or is empty, it returns the `empty` value passed as a
 * second argument. If no `empty` value is provided, it returns `undefined`. If there is an error while
 * parsing the data, it logs the error to the console and
 */
export function storageGet<T>(key: string, empty?: T) {
  try {
    const data = localStorage.getItem(key)
    return isNotVoid(data) ? JSON.parse(data) : (empty ?? void 0) as T
  }
  catch (e) {
    console.error(e)
  }
}

/**
 * 从localStorage移除
 * The function removes an item from local storage based on a given key.
 * @public
 * @param key - The key parameter is a string that represents the name of the item to be
 * removed from the browser's local storage.
 */
export function storageRemove(key: string) {
  localStorage.removeItem(key)
}