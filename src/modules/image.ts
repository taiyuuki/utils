import { isNotVoid } from './is'

interface ImageSize {
  width: number
  height: number
}

const DEFAULT_MIMETYPE = 'image/png'

/**
 * image元素转canvas
 * @public
 * @param img - image元素
 * @returns canvas元素
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
 * @public
 * @param img - image元素
 * @returns base64
 */
export function imageToDataURI(img: HTMLImageElement, type = DEFAULT_MIMETYPE) {
  const cvs = imageToCanvas(img)
  return cvs.toDataURL(type)
}

/**
 * image元素转blob
 * @public
 * @param img - image元素
 * @returns Blob对象
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
 * @public
 * @param filename - 含后缀的文件名
 * @returns mimetype
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
 * @public
 * @param img - 原image元素
 * @param size - 尺寸对象，包含属性： width: number, height: number
 * @param type - 图片MIMETYPE
 * @returns 改变尺寸后的image元素
 */
export function imageResize(img: HTMLImageElement, size: ImageSize, type = DEFAULT_MIMETYPE) {
  const resizeImg = new Image()
  const cvs = imageToCanvas(img, size)
  resizeImg.src = cvs.toDataURL(type)
  return resizeImg
}