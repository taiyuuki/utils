import { isNotVoid } from './is'

interface ImageSize {
  width: number
  height: number
}

const DEFAULT_MIMETYPE = 'image/png'

/**
 * image元素转canvas
 * This function converts an HTML image element to a canvas element with a specified size.
 * @public
 * @param img - An HTMLImageElement object representing the image to be converted to
 * a canvas.
 * @param size - The size parameter is an optional object that specifies the width and
 * height of the canvas to be created. If not provided, it defaults to the natural width and height of
 * the input image.
 * @returns a canvas element with the specified size and the image drawn on it.
 */
export function imageToCanvas(img: HTMLImageElement, size: ImageSize = { width: img.naturalWidth, height: img.naturalWidth }) {
  const cvs = document.createElement('canvas')
  cvs.width = size.width
  cvs.height = size.height
  const ctx = cvs.getContext('2d')
  isNotVoid(ctx) && ctx.drawImage(img, 0, 0, cvs.width, cvs.height)
  return cvs
}

/**
 * image元素转base64
 * This function converts an HTML image element to a data URI.
 * @public
 * @param img - An HTMLImageElement object representing the image that needs to be
 * converted to a data URI.
 * @param type - The type parameter is the MIME type of the image format to be used in the data URI. If
 * no type is specified, the default MIME type is used.
 * @returns a data URI (Uniform Resource Identifier) of the image passed as an argument. The data URI
 * is a string that represents the image data in a format that can be used as a source for an image
 * element in HTML.
 */
export function imageToDataURI(img: HTMLImageElement, type = DEFAULT_MIMETYPE) {
  const cvs = imageToCanvas(img)
  return cvs.toDataURL(type)
}

/**
 * image元素转blob
 * This function converts an HTML image element to a blob object using a canvas.
 * @public
 * @param img - HTMLImageElement - an image element in the HTML document.
 * @returns A Promise that resolves to a Blob object.
 */
export function imageToBlob(img: HTMLImageElement): Promise<Blob> {
  const cvs = imageToCanvas(img)
  return new Promise((resolve, reject) => {
    cvs.toBlob(blob => {
      if (isNotVoid(blob)) {
        resolve(blob)
      }
      else {
        reject(void 0)
      }
    })
  })
}

/**
 * 获取图片类型
 * The function "imageGetType" takes a filename as input and returns the file type of the image.
 * @public
 * @param filename - The filename parameter is a string that represents the name of an image
 * file.
 */
export function imageGetType(filename: string) {
  const imageExt = filename.substring(filename.lastIndexOf('.'))
  let imageType = ''
  imageType = imageExt === '.svg' ? 'image/svg+xml' : imageType
  imageType = imageExt === '.png' ? 'image/png' : imageType
  imageType
    = imageExt === '.jpg' || imageExt === '.jpeg' ? 'image/jpeg' : imageType
  imageType = imageExt === '.gif' ? 'image/gif' : imageType
  imageType
    = imageExt === '.tif' || imageExt === '.tiff' ? 'image/tiff' : imageType
  return imageType
}

/**
 * 改变图片尺寸
 * This function resizes an HTML image element to a specified size and MIME type.
 * @public
 * @param img - An HTMLImageElement object representing the image that needs to be
 * resized.
 * @param size - ImageSize is likely a custom type or interface that defines the desired
 * dimensions of the resized image. It could include properties such as width and height. Without
 * seeing the specific implementation of ImageSize, it's difficult to provide more information.
 * @param type - The `type` parameter is an optional parameter that specifies the MIME type of the
 * output image. If no value is provided, the default MIME type is used.
 * @returns a new HTMLImageElement that has been resized based on the input parameters.
 */
export function imageResize(img: HTMLImageElement, size: ImageSize, type = DEFAULT_MIMETYPE) {
  const resizeImg = new Image()
  const cvs = imageToCanvas(img, size)
  resizeImg.src = cvs.toDataURL(type)
  return resizeImg
}