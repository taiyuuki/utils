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