import { is_not_void } from './is'

/**
 * 此函数将 Blob 对象转换为数据 URI 字符串或 ArrayBuffer。
 * @public
 * @param  blob - `blob` 参数是一个 Blob 对象，它表示不可变的原始数据的类文件对象。它可用于表示不一定采用 JavaScript
 * 原生格式的数据。在这种情况下，该函数采用 Blob 对象并将其转换为数据 URI 字符串或 ArrayBuffer
 * @returns 解析为字符串或 ArrayBuffer 的 Promise，具体取决于将提供的 Blob 作为数据 URL 读取的结果。
 */
function blob_to_date_URI(blob: Blob): Promise<string | ArrayBuffer> {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
        reader.onload = function (e) {
            const result = e.target?.result
            if (is_not_void(result)) {
                resolve(result)
            }
            else {
                reject(void 0)
            }
        }
        reader.readAsDataURL(blob)
    })
}

/**
 * 此函数将 URL 作为输入并返回一个 Promise，该 Promise 解析为包含来自 URL 的数据的 Blob 对象。
 * @public
 * @param url - 需要转换为 Blob 对象的资源的 URL。
 * @returns 函数 url_to_blob 返回解析为 Blob 对象的 Promise。
 */
function url_to_blob(url: string): Promise<Blob> {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url, true)
    xhr.responseType = 'arraybuffer'
    return new Promise((resolve, reject) => {
        xhr.onload = function () {
            const blob = new Blob([this.response])
            resolve(blob)
        }
        xhr.onerror = reject
        xhr.send()
    })
}

export {
    url_to_blob,
    blob_to_date_URI,
}
