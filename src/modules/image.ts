import { is_not_void } from './is'
import { math_between } from './math'

interface ImageSize {
    width: number
    height: number
}

interface ImageOptions extends ImageSize {
    type?: string
    quality?: number
}

const DEFAULT_MIMETYPE = 'image/png'

/**
 * This function converts an HTML image element to a canvas element with a specified size.
 * @public
 * @param img - An HTMLImageElement object representing the image to be converted to
 * a canvas.
 * @param size - The size parameter is an optional object that specifies the width and
 * height of the canvas to be created. If not provided, it defaults to the natural width and height of
 * the input image.
 * @returns a canvas element with the specified size and the image drawn on it.
 */
function image_to_canvas(img: HTMLImageElement, size: ImageSize = { width: img.naturalWidth, height: img.naturalWidth }) {
    const cvs = document.createElement('canvas')
    cvs.width = size.width
    cvs.height = size.height
    const ctx = cvs.getContext('2d')
    is_not_void(ctx) && ctx.drawImage(img, 0, 0, cvs.width, cvs.height)
    return cvs
}

/**
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
function image_to_data_URI(img: HTMLImageElement, type = DEFAULT_MIMETYPE) {
    const cvs = image_to_canvas(img)
    return cvs.toDataURL(type)
}

/**
 * This function converts an HTML image element to a blob object using a canvas.
 * @public
 * @param img - HTMLImageElement - an image element in the HTML document.
 * @returns A Promise that resolves to a Blob object.
 */
function image_to_blob(img: HTMLImageElement): Promise<Blob> {
    const cvs = image_to_canvas(img)
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

/**
 * The function "image_get_type" takes a filename as input and returns the file type of the image.
 * @public
 * @param filename - The filename parameter is a string that represents the name of an image
 * file.
 */
function image_get_type(filename: string) {
    const imageExt = filename.substring(filename.lastIndexOf('.'))
    switch (imageExt) {
        case '.jpg':
        case '.jpeg':
            return 'image/jpeg'
        case '.png':
            return 'image/png'
        case '.gif':
            return 'image/gif'
        case '.webp':
            return 'image/webp'
        case '.bmp':
            return 'image/bmp'
        case '.svg':
            return 'image/svg+xml'
        case '.ico':
            return 'image/x-icon'
        case '.tiff':
            return 'image/tiff'
        default:
            return DEFAULT_MIMETYPE
    }
}

/**
 * This function resizes an HTML image element to a specified size and MIME type.
 * @public
 * @param img - An HTMLImageElement object representing the image that needs to be
 * resized.
 * @param options - The options parameter is an optional object that specifies the width and
 * height of the image.
 * @returns a new HTMLImageElement that has been resized based on the input parameters.
 */
function image_resize(img: HTMLImageElement, options: ImageOptions) {
    const resizeImg = new Image()
    const cvs = image_to_canvas(img, options)
    const type = options.type ?? image_get_type(img.src)
    const quality = options.quality ?? 1
    resizeImg.src = cvs.toDataURL(type, math_between(quality, 0, 1))
    return resizeImg
}

/**
 * This function minifies an HTML image element.
 * @public
 * @param img - An HTMLImageElement object representing the image that needs to be
 * minified.
 * @param quality - The quality parameter is an optional number that specifies the
 * quality of the minified image, between 0 and 1.
 * @returns a new HTMLImageElement that has been minified based on the input parameters.
 */
function image_mini(img: HTMLImageElement, quality: number) {
    const resizeImg = new Image()
    const cvs = image_to_canvas(img, { width: img.naturalWidth, height: img.naturalHeight })
    const type = image_get_type(img.src)
    resizeImg.src = cvs.toDataURL(type, math_between(quality, 0, 1))
    return resizeImg
}

export {
    image_get_type,
    image_resize,
    image_to_blob,
    image_to_canvas,
    image_to_data_URI as image_to_data_uri,
    image_mini,
}
