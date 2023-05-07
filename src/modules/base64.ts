import { throwTypeError } from './error'
import { imageToDataURI } from './image'
import { isBase64 } from './is'

/**
 * base64转blob
 * This function converts a data URI to a Blob object.
 * @public
 * @param dataURI - A string representing a data URI, which includes the data and metadata of
 * a file in a single string format.
 * @param mimeType - The MIME type of the dataURI, which specifies the type of data being
 * represented in the URI. It is an optional parameter, and if not provided, the function tries to
 * extract it from the dataURI itself.
 * @returns a Blob object.
 */
export function dataURIToBlob(dataURI: string, mimeType?: string) {
  if (!isBase64(dataURI)) {
    throwTypeError('base64', 'dataURI')
  }
  const arr = dataURI.split(',')
  mimeType ??= arr[0].match(/:(.*?);/)?.[1]
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
 * 通过图片url转换base64
 * This function converts a URL to a data URI for an image.
 * @public
 * @param url - The URL of the image that needs to be converted to a data URI.
 * @param type - The optional parameter "type" specifies the image format of the data URI to
 * be returned. If not provided, the default format is PNG. Possible values for "type" include
 * "image/jpeg", "image/png", "image/gif", etc.
 * @returns A Promise that resolves to a string representing the data URI of the image loaded from the
 * provided URL.
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