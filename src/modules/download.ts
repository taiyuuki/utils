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
export function downloadBlob(blob: Blob) {
  const url = URL.createObjectURL(blob)
  downloadByURL(url)
  URL.revokeObjectURL(url)
}

/**
 * 图片下载
 * @public
 * @param img - image元素
 * @param imageName - iamge名称
 */
export function downloadImage(img: HTMLImageElement, imageName?: string) {
  downloadByURL(img.src, imageName)
}