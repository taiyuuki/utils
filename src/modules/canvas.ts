import { is_not_void } from './is'
import { math_between } from './math'

/**
 * 此函数将画布元素转换为具有指定质量的图像元素。
 * @public
 * @param cvs - 一个 HTMLCanvasElement 对象，表示我们要转换为图像的画布元素。
 * @param quality - 质量参数是一个介于 0 和 1 之间的数字，它决定了使用 toDataURL() 方法将图像从画布元素转换为图像元素时图像的质量。值 1 表示最高质量，而值
 * 0 表示最低质量。
 * @returns 函数 canvas_to_image 返回一个 HTMLImageElement 对象。
 */
function canvas_to_image(cvs: HTMLCanvasElement, quality = 1): HTMLImageElement {
    const img = new Image()
    img.src = cvs.toDataURL('image/png', math_between(quality, 0, 1))

    return img
}

/**
 * 此函数将 HTML canvas 元素转换为 Blob 对象并返回一个 Promise。
 * @public
 * @param cvs - HTMLCanvasElement - 这是我们要从中创建 blob 的画布元素。
 * @returns 函数 canvas_to_blob 返回一个解析为 Blob 对象的 Promise。
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
