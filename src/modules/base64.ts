import { throwTypeError } from './error'
import { imageToDataURI } from './image'
import { isBase64 } from './is'

/**
 * base64转blob
 * @public
 * @param dataURI - base64
 * @param mimeType - 文件类型
 * @returns blob
 */
export function dataURIToBlob(dataURI: string, mimeType?: string) {
  if (!isBase64(dataURI)) {
    throwTypeError('base64', 'dataURI')
  }
  const arr = dataURI.split(',')
  mimeType = arr[0].match(/:(.*?);/)?.[1]
  let baseStr = ''
  try {
    baseStr = atob(arr[1])
  }
  catch (e) {
    throwTypeError('base64', 'dataURI')
  }
  let len = baseStr.length
  const u8arr = new Uint8Array(len)
  while (len--) {
    u8arr[len] = baseStr.charCodeAt(len)
  }
  return new Blob([u8arr], { type: mimeType })
}

/**
 * 通过图片url转换base64图片
 * @public
 * @param url - 图片URL
 * @param type - 图片类型
 * @returns base64
 */
export function urlToDateURI(url: string, type?: string): Promise<string> {
  const img = new Image()
  img.src = url
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(imageToDataURI(img, type))
    }
    img.onerror = reject
  })
}