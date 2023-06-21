import { str_uuid } from './string'

/**
 * 此函数使用可选文件名从给定的 URL 下载文件。
 * @public
 * @param URL - URL参数是一个字符串，表示需要下载的文件的URL。
 * @param fileName - fileName 参数是一个字符串，指定要下载的文件的名称。如果没有为 fileName 提供值，该函数将生成一个随机 UUID 字符串作为文件名。
 */
function download_by_url(URL: string, fileName = str_uuid()) {
    const a = document.createElement('a')
    a.href = URL
    a.download = fileName
    a.click()
}

/**
 * 该函数将 Blob 对象下载为具有给定文件名或生成的 UUID 的文件。
 * @public
 * @param blob - blob 参数是一个 Blob 对象，它表示不可变的原始数据的类文件对象。它可用于表示不一定采用 JavaScript 原生格式的数据。
 * @param fileName - fileName 参数是一个字符串，表示要下载的文件的名称。如果没有为 fileName 提供值，将生成一个随机 UUID 字符串作为文件名。
 */
function download_blob(blob: Blob, fileName = str_uuid()) {
    const url = URL.createObjectURL(blob)
    download_by_url(url, fileName)
    URL.revokeObjectURL(url)
}

/**
 * 该函数通过其 URL 下载图像并使用生成或提供的名称保存它。
 * @public
 * @param img - 一个 HTMLImageElement 对象，表示需要下载的图像。
 * @param imageName - imageName 参数是一个字符串，表示将要下载的图像文件的名称。如果未提供名称，将生成一个随机 UUID 字符串作为文件名。
 */
function download_image(img: HTMLImageElement, imageName = str_uuid()) {
    download_by_url(img.src, imageName)
}

/**
 * 此函数将画布元素下载为具有默认名称或指定名称的 PNG 图像。
 * @public
 * @param cvs - HTMLCanvasElement - 这是要作为图像下载的画布元素。
 * @param imageName - imageName 是一个字符串参数，表示下载的图像文件的名称。如果没有提供名称，将生成一个随机的 UUID（通用唯一标识符）字符串作为文件名。
 */
function download_canvas(cvs: HTMLCanvasElement, imageName = str_uuid()) {
    download_by_url(cvs.toDataURL('image/png'), imageName)
}

export {
    download_by_url,
    download_blob,
    download_image,
    download_canvas,
}
