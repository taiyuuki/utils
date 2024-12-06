import { throw_type_error } from './error'
import { image_to_data_URI } from './image'
import { is_base64 } from './is'

/**
 * 此函数将数据 URI 转换为 blob 对象。
 * @public
 * @param dataURI - 表示数据 URI 的字符串，其中包括以 base64 格式编码的文件的数据和元数据。
 * @param mimeType - dataURI 的 MIME 类型，指定 URI 中表示的数据类型。它是一个可选参数，如果未提供，该函数会尝试从 dataURI
 * 本身中提取它。
 * @returns 从 dataURI 字符串输入创建的 Blob 对象。 Blob 对象包含指定 MIME 类型的二进制数据。
 */
function data_URI_to_blob(dataURI: string, mimeType?: string) {
    if (!is_base64(dataURI)) {
        throw_type_error('base64', 'dataURI')
    }
    const arr = dataURI.split(',')
    mimeType ??= arr[0].match(/:(.*?);/)?.[1]
    let baseStr = ''
    try {
        baseStr = atob(arr[1])
    }
    catch (_e) {
        throw_type_error('base64', 'dataURI')
    }
    let len = baseStr.length
    const u8arr = new Uint8Array(len)
    while (len--) {
        u8arr[len] = baseStr.charCodeAt(len)
    }

    return new Blob([u8arr], { type: mimeType })
}

/**
 * 此函数将 URL 转换为图像的数据 URI。
 * @public
 * @param url - 需要转换为数据 URI 的图像的URL。
 * @param type - 可选参数“type”是一个字符串，指定数据 URI
 * 的图像格式。如果未提供，则默认值为“image/png”。其他可能的值包括“image/jpeg”和“image/webp”。
 * @returns 解析为表示从提供的 URL 加载的图像的数据 URI 的字符串的 Promise。
 */
function url_to_date_URI(url: string, type?: string): Promise<string> {
    const img = new Image()
    img.src = url

    return new Promise((resolve, reject) => {
        img.onload = () => {
            resolve(image_to_data_URI(img, type))
        }
        img.onerror = reject
    })
}

export {
    url_to_date_URI,
    data_URI_to_blob,
}
