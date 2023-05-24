import { str_uuid } from './string'

/**
 * This function downloads a file from a given URL with an optional filename.
 * @public
 * @param URL - The URL parameter is a string that represents the URL of the file that needs
 * to be downloaded.
 * @param fileName - The fileName parameter is a string that represents the name of the file that will
 * be downloaded. If no value is provided for fileName, the function will generate a random UUID string
 * as the file name.
 */
function download_by_url(URL: string, fileName = str_uuid()) {
    const a = document.createElement('a')
    a.href = URL
    a.download = fileName
    a.click()
}

/**
 * This function downloads a Blob object by creating a URL and revoking it after the download is
 * complete.
 * @public
 * @param blob - The `blob` parameter is a Blob object, which represents a file-like object of
 * immutable, raw data. It can be used to represent data that isn't necessarily in a JavaScript-native
 * format. The `downloadBlob` function takes this Blob object and downloads it as a file with a
 * specified file name
 * @param fileName - The fileName parameter is a string that represents the name of the file that will
 * be downloaded. If no value is provided for fileName, a random UUID (Universally Unique Identifier)
 * string will be generated as the file name.
 */
function download_blob(blob: Blob, fileName = str_uuid()) {
    const url = URL.createObjectURL(blob)
    download_by_url(url, fileName)
    URL.revokeObjectURL(url)
}

/**
 * This function downloads an image by its URL and saves it with a generated or provided name.
 * @public
 * @param img - HTMLImageElement - this is an object that represents an image
 * element in an HTML document.
 * @param imageName - The imageName parameter is a string that represents the name of the image file
 * that will be downloaded. If no value is provided for imageName, the function will generate a random
 * UUID string as the file name.
 */
function download_image(img: HTMLImageElement, imageName = str_uuid()) {
    download_by_url(img.src, imageName)
}

/**
 * This function downloads an HTML canvas element as an image with a default or specified name.
 * @public
 * @param cvs - HTMLCanvasElement - This is the canvas element that you want to
 * download as an image.
 * @param imageName - The imageName parameter is a string that represents the name of the downloaded
 * image file. If no name is provided, a random UUID (Universally Unique Identifier) string will be
 * generated as the file name.
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
