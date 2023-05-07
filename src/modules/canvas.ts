import { isNotVoid } from './is'

/**
 * canvas转image
 * This function converts a canvas element to an image element in TypeScript.
 * @public
 * @param cvs - HTMLCanvasElement - This is a reference to an HTML canvas element
 * that contains the image data that we want to convert to an image.
 * @returns an HTMLImageElement object.
 */
export function canvasToImage(cvs: HTMLCanvasElement) {
  const img = new Image()
  img.src = cvs.toDataURL()
  return img
}

/**
 * 异步的方式转换canvas为blob
 * This function converts an HTML canvas element to a Blob object and returns a Promise.
 * @public
 * @param cvs - HTMLCanvasElement - This is the canvas element from which we want
 * to create a blob.
 * @returns The function `canvasToBlob` is returning a Promise that resolves to a Blob object.
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