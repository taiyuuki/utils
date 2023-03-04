import { isNotVoid } from './is'

/**
 * Blob转base64
 * @public
 * @param blob - Blob对象
 * @returns Promise
 */
export function blobToDateURI(blob: Blob): Promise<string | ArrayBuffer> {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = function (e) {
      const result = e.target?.result
      if (isNotVoid(result)) {
        resolve(result)
      }
      else {
        reject(void 0)
      }
    }
    reader.readAsDataURL(blob)
  })
}

/**
 * 请求url数据并转换为blob
 * @public
 * @param url URL
 */
export function urlToBlob(url: string): Promise<Blob> {
  const xhr = new XMLHttpRequest()
  xhr.open('get', url, true)
  return new Promise((resolve, reject) => {
    xhr.onload = function () {
      const blob = new Blob([this.response])
      resolve(blob)
    }
    xhr.onerror = reject
    xhr.send()
  })
}