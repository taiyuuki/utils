import type { Color, RgbColor } from '../types'
import { throw_type_error } from './error'
import { is_rgb_color } from './is'
import { math_to_hex } from './math'
import { str_no_prefix } from './string'

/**
 * The function calculates the lightness value of a given color in RGB or hex format.
 * @public
 * @param color - The input color that we want to calculate the lightness of. It can be either
 * a string in hexadecimal format or an object of type RgbColor.
 * @returns the lightness value of a given color in the HSL color space.
 */
function get_lightness_value(color: Color) {
    let rgb = color as RgbColor
    if (typeof color === 'string') {
        rgb = hex_to_rgb(color)
    }
    const r = rgb[0]
    const g = rgb[1]
    const b = rgb[2]
    return  (Math.max(r, g, b) + Math.min(r, g, b)) / (2 * 255)
}

/**
 * This function converts an RGB color value to a hexadecimal color value.
 * @public
 * @param rgb - The `rgb` parameter is an array of numbers representing the red, green, and
 * blue values of a color. It can also optionally include an alpha value as the fourth element of the
 * array.
 * @returns a string representing the hexadecimal value of the given RGB color. If the RGB color has an
 * alpha channel, the function returns a string representing the hexadecimal value of the RGBA color.
 */
function rgb_to_hex(rgb: RgbColor) {
    if (!is_rgb_color(rgb)) {
        throw_type_error('array', 'rgb')
    }
    const r = math_to_hex(rgb[0])
    const g = math_to_hex(rgb[1])
    const b = math_to_hex(rgb[2])
    if (rgb[3]) {
        const a = math_to_hex(Math.floor(rgb[3] * 255))
        return `#${r}${g}${b}${a}`
    }
    return `#${r}${g}${b}`
}

/**
 * The function converts a hexadecimal color code to its corresponding RGB values.
 * @public
 * @param hex - The hex parameter is a string representing a hexadecimal color value, such as
 * "#FF0000" for red or "#00FF00" for green. The function converts this hex value to an RGB array,
 * where each element represents the red, green, and blue values of the color, respectively.
 * @returns The function `hex_to_rgb` takes a hexadecimal color code as a string and returns an array of
 * three integers representing the corresponding RGB values.
 */
function hex_to_rgb(hex: string): RgbColor {
    hex = str_no_prefix(hex, '#')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return [r, g, b]
}

/**
 * The function takes a color as input and returns either black or white as the contrasting color based
 * on the brightness of the input color.
 * @public
 * @param color - The color parameter is of type Color, which could be either a string
 * representing a color in hexadecimal format (e.g. "#FF0000" for red) or an object with properties for
 * red, green, and blue values [255, 0, 0].
 * @returns either the string 'black' or 'white' based on the contrast of the input color.
 */
function get_contrast_color(color: Color) {
    if (typeof color !== 'string') {
        color = rgb_to_hex(color)
    }
    const r = parseInt(color.substring(1, 2), 16)
    const g = parseInt(color.substring(3, 4), 16)
    const b = parseInt(color.substring(5, 6), 16)
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
    return yiq >= 10 ? 'black' : 'white'
}

export {
    rgb_to_hex,
    hex_to_rgb,
    get_contrast_color,
    get_lightness_value,
}
