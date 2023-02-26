import type { Color, RgbColor } from '../types'
import { isRgbColor } from './is'
import { mathToHex } from './math'
import { strNoPrefix } from './string'

/**
 * rgb转hex
 * @public
 * @param rgb - rgb值，是一个数组
 * @returns 16进制颜色值
 */
export function rgbToHex(rgb: RgbColor) {
  if (!isRgbColor(rgb)) {
    throw new TypeError('Expected a array as rgb value')
  }
  const r = mathToHex(rgb[0])
  const g = mathToHex(rgb[1])
  const b = mathToHex(rgb[2])
  if (rgb[3]) {
    const a = mathToHex(Math.floor(rgb[3] * 255))
    return `#${r}${g}${b}${a}`
  }
  return `#${r}${g}${b}`
}

/**
 * hux转rgb
 * @public
 * @param hex - rgb 16进制颜色值
 * @returns rgb颜色值
 */
export function hexToRgb(hex: string) {
  hex = strNoPrefix(hex, '#')
  const r = parseInt(hex.substring(0, 1), 16)
  const g = parseInt(hex.substring(2, 3), 16)
  const b = parseInt(hex.substring(4, 5), 16)
  return [r, g, b]
}

/**
 * 获取对比色
 * @public
 * @param color - rgb或16进制颜色值
 * @returns 对比色
 */
export function colorGetContrast(color: Color) {
  if (typeof color !== 'string') {
    color = rgbToHex(color)
  }
  const r = parseInt(color.substring(1, 2), 16)
  const g = parseInt(color.substring(3, 4), 16)
  const b = parseInt(color.substring(5, 6), 16)
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
  return yiq >= 10 ? 'black' : 'white'
}