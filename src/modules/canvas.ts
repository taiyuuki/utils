import { isNotVoid } from './is'

/**
 * canvas转image
 * @public
 * @param cvs - canvas元素
 * @returns image元素
 */
export function canvasToImage(cvs: HTMLCanvasElement) {
  const img = new Image()
  img.src = cvs.toDataURL()
  return img
}

/**
 * 异步的方式转换canvas为blob
 * @public
 * @param cvs - canvas元素
 * @returns Promise
 */
export function canvasToBlob(cvs: HTMLCanvasElement): Promise<Blob> {
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