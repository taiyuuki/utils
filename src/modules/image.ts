import { is_not_void } from './is'
import { key_in } from './obj'
import { math_between } from './math'

interface ImageSize {
    width: number
    height: number
}

interface ImageOptions extends ImageSize {

    /**
     * @defaultValue "image/png"
     */
    type?: string

    /**
     * @defaultValue 1
     */
    quality?: number
}

const DEFAULT_MIMETYPE = 'image/png'

/**
 * 此函数将 HTML 图像元素转换为具有指定大小的画布元素。
 * @public
 * @param img - 一个 HTMLImageElement 对象，表示要转换为画布的图像。
 * @param size - size 参数是一个可选对象，用于指定所需的画布宽度和高度。如果未提供，则默认为输入图像的自然宽度和高度。
 * @returns 具有指定大小的画布元素和在其上绘制的图像。
 */
function image_to_canvas(img: HTMLImageElement, size?: ImageSize) {
    size = Object.assign({ width: img.naturalWidth, height: img.naturalHeight }, size)
    const cvs = document.createElement('canvas')
    cvs.width = size.width
    cvs.height = size.height
    const ctx = cvs.getContext('2d')
    is_not_void(ctx) && ctx.drawImage(img, 0, 0, cvs.width, cvs.height)

    return cvs
}

/**
 * 此函数将 HTML 图像元素转换为数据 URI。
 * @public
 * @param img - 一个 HTMLImageElement 对象，表示需要转换为数据 URI 的图像。
 * @param type - type 参数是图像的 MIME 类型，例如 PNG图像为“image/png”或 PNG 图像为“image/jpeg”，
 * 如果未提供，它将默认为 “image/png” 的值。
 * @returns 作为参数传递的图像的数据 URI（统一资源标识符）。
 */
function image_to_data_URI(img: HTMLImageElement, type = DEFAULT_MIMETYPE) {
    const cvs = image_to_canvas(img)

    return cvs.toDataURL(type)
}

/**
 * 此函数使用画布将 HTML 图像元素转换为 blob 对象。
 * @public
 * @param img - HTMLImageElement - HTML 文档中需要转换为 Blob 对象的图像元素。
 * @returns 函数 `image_to_blob` 返回解析为 Blob 对象的 Promise。
 */
function image_to_blob(img: HTMLImageElement): Promise<Blob> {
    const cvs = image_to_canvas(img)

    return new Promise((resolve, reject) => {
        cvs.toBlob(blob => {
            if (is_not_void(blob)) {
                resolve(blob)
            } else {
                reject(void 0)
            }
        })
    })
}

/**
 * 该函数根据文件扩展名返回图像文件的 MIME 类型。
 * @public
 * @param filename - 表示图像文件名称的字符串，包括其扩展名。
 * @returns 基于文件扩展名的图像文件的 MIME 类型。如果无法识别文件扩展名，它将返回默认的 MIME 类型。
 */
function image_get_type(filename: string) {
    const imageExt = filename.substring(filename.lastIndexOf('.'))
    const mimes = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.webp': 'image/webp',
        '.bmp': 'image/bmp',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.tiff': 'image/tiff',
    } as const

    return key_in(imageExt, mimes) ? mimes[imageExt] : DEFAULT_MIMETYPE
}

/**
 * 此函数根据指定的选项调整 HTML 图像元素的大小，并将调整后的图像作为新的 HTML 图像元素返回。
 * @public
 * @param img - 表示要调整大小的图像的 HTMLImageElement 对象。
 * @param options - ImageOptions 是包含调整图像的大小、质量、类型的选项的对象。
 * @returns 已根据提供的选项调整大小的新 HTMLImageElement。
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
 * 该函数接受一个 HTML 图像元素和一个质量参数，调整图像大小并返回一个包含调整后图像的新图像元素。
 * @public
 * @param img - 表示要调整大小的图像的 HTMLImageElement 对象。
 * @param quality - “质量”参数是一个介于 0 和 1 之间的数字，用于确定调整大小的图像的质量。值 1 表示最高质量，而值 0
 * 表示最低质量。该函数使用此参数调整图像的质量
 * @returns 一个新的 HTMLImageElement，它包含具有指定质量的输入图像的调整大小版本。
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
    image_to_data_URI,
    image_mini,
}
