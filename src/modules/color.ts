import type { Color, RgbColor } from '../types'
import { isRgbColor } from './is'
import { mathToHex } from './math'
import { strNoPrefix } from './string'

/**
 * rgb转hex
 * This function converts an RGB color value to a hexadecimal color value.
 * @public
 * @param rgb - The `rgb` parameter is an array of numbers representing the red, green, and
 * blue values of a color. It can also optionally include an alpha value as the fourth element of the
 * array.
 * @returns a string representing the hexadecimal value of the given RGB color. If the RGB color has an
 * alpha channel, the function returns a string representing the hexadecimal value of the RGBA color.
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
 * hex转rgb
 * The function converts a hexadecimal color code to its corresponding RGB values.
 * @public
 * @param hex - The hex parameter is a string representing a hexadecimal color value, such as
 * "#FF0000" for red or "#00FF00" for green. The function converts this hex value to an RGB array,
 * where each element represents the red, green, and blue values of the color, respectively.
 * @returns The function `hexToRgb` takes a hexadecimal color code as a string and returns an array of
 * three integers representing the corresponding RGB values.
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
 * The function takes a color as input and returns either black or white as the contrasting color based
 * on the brightness of the input color.
 * @public
 * @param color - The color parameter is of type Color, which could be either a string
 * representing a color in hexadecimal format (e.g. "#FF0000" for red) or an object with properties for
 * red, green, and blue values [255, 0, 0].
 * @returns either the string 'black' or 'white' based on the contrast of the input color.
 */
export function getContrastColor(color: Color) {
  if (typeof color !== 'string') {
    color = rgbToHex(color)
  }
  const r = parseInt(color.substring(1, 2), 16)
  const g = parseInt(color.substring(3, 4), 16)
  const b = parseInt(color.substring(5, 6), 16)
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
  return yiq >= 10 ? 'black' : 'white'
}