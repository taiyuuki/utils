import type { Color, HslColor, RgbColor } from '../types'
import { throw_type_error } from './error'
import { is_rgb_color } from './is'
import { math_to_hex } from './math'
import { str_no_prefix } from './string'

/**
 * 该函数以 RGB 或十六进制格式计算颜色的亮度值。
 * @public
 * @param color - 颜色参数的类型为 Color，它可以是表示十六进制颜色代码的字符串（例如“#FF0000”表示红色），也可以是表示颜色的 RGB 值的三个整数数组（例如
 * [255, 0, 0 ] 为红色）。
 * @returns 颜色的亮度值，它是一个介于 0 和 1 之间的数字，表示颜色的感知亮度。
 */
function get_lightness_value(color: Color) {
    let rgb = color as RgbColor
    if (typeof color === 'string') {
        rgb = hex_to_rgb(color)
    }
    const r = rgb[0]
    const g = rgb[1]
    const b = rgb[2]

    return (Math.max(r, g, b) + Math.min(r, g, b)) / (2 * 255)
}

/**
 * 该函数将 RGB 颜色数组转换为十六进制颜色代码。
 * @public
 * @param rgb - 参数 `rgb` 应该是一个数字数组，表示 RGB 颜色模型中颜色的红色、绿色和蓝色值。它还可能包括一个可选的第四个值，表示颜色的
 * alpha（透明度）值。
 * @returns 函数 rgb_to_hex 返回一个字符串，表示给定 RGB 颜色的十六进制颜色代码。如果 RGB 颜色有一个 alpha 通道，该函数返回一个字符串，表示带有 alpha
 * 通道的十六进制颜色代码。
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
 * 该函数将十六进制颜色代码转换为其对应的 RGB 颜色值。
 * @public
 * @param hex - hex 参数是表示十六进制颜色代码的字符串，例如“#FF0000”代表红色或“#00FF00”代表绿色。
 * @returns 一个由三个整数组成的数组，表示 RGB 格式的颜色的红色、绿色和蓝色值。
 */
function hex_to_rgb(hex: string): RgbColor {
    hex = str_no_prefix(hex, '#')
    const r = Number.parseInt(hex.substring(0, 2), 16)
    const g = Number.parseInt(hex.substring(2, 4), 16)
    const b = Number.parseInt(hex.substring(4, 6), 16)

    return [r, g, b]
}

/**
 * 该函数将颜色作为输入，并根据输入颜色的亮度返回黑色或白色作为对比色。
 * @public
 * @param color - 颜色参数是表示十六进制颜色代码的字符串（例如“#FF0000”表示红色）或表示 RGB 颜色的对象（例如 [255, 0, 0]
 * 表示红色）。
 * @returns 字符串“black”或“white”，具体取决于输入颜色的计算 YIQ 值。
 */
function get_contrast_color(color: Color) {
    if (typeof color !== 'string') {
        color = rgb_to_hex(color)
    }
    const r = Number.parseInt(color.substring(1, 2), 16)
    const g = Number.parseInt(color.substring(3, 4), 16)
    const b = Number.parseInt(color.substring(5, 6), 16)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000
 
    return yiq >= 7 ? 'black' : 'white'
}

/**
 * 该函数将 RGB 颜色值转换为其对应的 HSL 颜色值。
 * @public
 * @param rgb - 一个包含四个数字的数组，表示 RGB 颜色空间中颜色的红色、绿色、蓝色和 alpha 值。 RGB 分量的值应介于 0 和 255 之间，alpha
 * 分量的值应介于 0 和 1 之间。
 * @returns 函数 rgb_to_hsl 返回一个 HSL 颜色值作为数字数组。如果输入的 `rgb` 颜色有一个 alpha
 * 值，该函数返回一个数组，其中包含四个元素，分别代表色调、饱和度、亮度和 alpha 值。如果输入的 `rgb` 颜色没有 alpha 值，该函数返回一个数组，其中包含三个代表色调的元素，
 */
function rgb_to_hsl(rgb: RgbColor): HslColor {
    const r = rgb[0] / 255
    const g = rgb[1] / 255
    const b = rgb[2] / 255
    const a = rgb[3]
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0
    let s = 0
    const l = (max + min) / 2
    if (max === min) {
        h = s = 0
    }
    else {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0)
                break
            case g:
                h = (b - r) / d + 2
                break
            case b:
                h = (r - g) / d + 4
                break
        }
        h *= 360 / 6
    }

    return a ? [h, s, l, a] : [h, s, l]
}

/**
 * 该函数将 HSL 格式的颜色转换为 RGB 格式。
 * @public
 * @param hsl - 表示 HSL 颜色值的四个数字的数组：色调 (0-360)、饱和度 (0-1)、亮度 (0-1) 和 alpha (0-1)。
 * @returns 函数“hsl_to_rgb”返回一个 RGB 颜色数组，具有三个值（红色、绿色、蓝色）或四个值（红色、绿色、蓝色、alpha），具体取决于输入 HSL 颜色是否具有 alpha 值。
 */
function hsl_to_rgb(hsl: HslColor): RgbColor {
    const h = hsl[0]
    const s = hsl[1]
    const l = hsl[2]
    const a = hsl[3]
    const c = (1 - Math.abs(2 * l - 1)) * s
    const x = c * (1 - Math.abs(h / 60 % 2 - 1))
    const m = l - c / 2
    const vRGB = []
    if (h >= 0 && h < 60) {
        vRGB.push(c, x, 0)
    }
    else if (h >= 60 && h < 120) {
        vRGB.push(x, c, 0)
    }
    else if (h >= 120 && h < 180) {
        vRGB.push(0, c, x)
    }
    else if (h >= 180 && h < 240) {
        vRGB.push(0, x, c)
    }
    else if (h >= 240 && h < 300) {
        vRGB.push(x, 0, c)
    }
    else if (h >= 300 && h < 360) {
        vRGB.push(c, 0, x)
    }
    const [vR, vG, vB] = vRGB
    const r = 255 * (vR + m)
    const g = 255 * (vG + m)
    const b = 255 * (vB + m)

    return a ? [r, g, b, a] : [r, g, b]
}

export {
    rgb_to_hex,
    hex_to_rgb,
    get_contrast_color,
    get_lightness_value,
    rgb_to_hsl,
    hsl_to_rgb,
}
