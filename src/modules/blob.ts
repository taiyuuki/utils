import { is_not_void } from './is'

/**
 * This function converts a Blob object to a data URI string or ArrayBuffer.
 * @public
 * @param blob - The `blob` parameter is a `Blob` object, which represents a file-like object of
 * immutable, raw data. It can be used to represent data that is not necessarily in a JavaScript-native
 * format.
 * @returns A Promise that resolves to a string or ArrayBuffer, depending on the result of reading the
 * provided Blob as a data URL.
 */
function blob_to_date_uri(blob: Blob): Promise<string | ArrayBuffer> {
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
 * This function takes a URL and returns a Promise that resolves to a Blob object obtained by making an
 * XMLHttpRequest to the URL and converting the response to an array buffer.
 * @public
 * @param url - The URL of the resource that needs to be converted to a Blob object.
 * @returns The function `urlToBlob` returns a Promise that resolves to a Blob object.
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
    blob_to_date_uri,
}
