import { strUuid } from './string'

/**
 * 通过URL下载文件
 * @public
 * @param URL - url
 * @param fileName - 文件名
 */
export function downloadByURL(URL: string, fileName = strUuid()) {
  const a = document.createElement('a')
  a.href = URL
  a.download = fileName
  a.click()
}

/**
 * 下载blob文件
 * @public
 * @param blob - blob对象
 */
export function downloadBlob(blob: Blob, fileName?: string) {
  const url = URL.createObjectURL(blob)
  downloadByURL(url, fileName)
  URL.revokeObjectURL(url)
}

/**
 * 图片下载
 * @public
 * @param img - image元素
 * @param imageName - image名称
 */
export function downloadImage(img: HTMLImageElement, imageName?: string) {
  downloadByURL(img.src, imageName)
}

/**
 * 下载canvas图片
 * @public
 * @param cvs - canvas元素
 */
export function downloadCanvas(cvs: HTMLCanvasElement, imageName?: string) {
  downloadByURL(cvs.toDataURL(), imageName)
}