import { is_not_void } from './is'

/**
 * This function converts a canvas element to an image element.
 * @public
 * @param cvs - HTMLCanvasElement - This is a reference to an HTML canvas element
 * that contains the image data that we want to convert to an image.
 * @returns an HTMLImageElement object.
 */
function canvas_to_image(cvs: HTMLCanvasElement) {
    const img = new Image()
    img.src = cvs.toDataURL('image/png')
    return img
}

/**
 * This function converts an HTML canvas element to a Blob object and returns a Promise.
 * @public
 * @param cvs - HTMLCanvasElement - This is the canvas element from which we want
 * to create a blob.
 * @returns The function `canvas_to_blob` is returning a Promise that resolves to a Blob object.
 */
function canvas_to_blob(cvs: HTMLCanvasElement): Promise<Blob> {
    return new Promise((resolve, reject) => {
        cvs.toBlob(blob => {
            if (is_not_void(blob)) {
                resolve(blob)
            }
            else {
                reject(void 0)
            }
        })
    })
}

export {
    canvas_to_image,
    canvas_to_blob,
}
