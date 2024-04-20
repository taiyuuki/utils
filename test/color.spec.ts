import { describe, expect, it } from 'vitest'
import { get_contrast_color, hex_to_rgb, hsl_to_rgb, rgb_to_hex, rgb_to_hsl } from '../src/modules/color'

describe('color', () => {
    it('rgb_to_hex', () => {
        expect(rgb_to_hex([255, 0, 0])).toMatchInlineSnapshot('"#FF0000"')

        expect(rgb_to_hex([0, 0, 0])).toMatchInlineSnapshot('"#000000"')

        expect(rgb_to_hex([255, 255, 255])).toMatchInlineSnapshot('"#FFFFFF"')
    })

    it('hex_to_rgb', () => {
        expect(hex_to_rgb('#FF0000')).toMatchInlineSnapshot(`
          [
            255,
            0,
            0,
          ]
        `)

        expect(hex_to_rgb('#000000')).toMatchInlineSnapshot(`
          [
            0,
            0,
            0,
          ]
        `)
        expect(hex_to_rgb('#FFFFFF')).toMatchInlineSnapshot(`
          [
            255,
            255,
            255,
          ]
        `)
    })

    it('get_contrast_color', () => {
        expect(get_contrast_color('#FF0000')).toMatchInlineSnapshot('"white"')
    })

    it('rgb_to_hsl', () => {
        const red = rgb_to_hsl([255, 0, 0])
        expect(red[0]).toBeCloseTo(0.0)
        expect(red[1]).toBeCloseTo(1.0)
        expect(red[2]).toBeCloseTo(0.5)

        const green = rgb_to_hsl([0, 255, 0])
        expect(green[0]).toBeCloseTo(120)
        expect(green[1]).toBeCloseTo(1.0)
        expect(green[2]).toBeCloseTo(0.5)

        const blue = rgb_to_hsl([0, 0, 255])
        expect(blue[0]).toBeCloseTo(240)
        expect(blue[1]).toBeCloseTo(1.0)
        expect(blue[2]).toBeCloseTo(0.5)

        const white = rgb_to_hsl([255, 255, 255])
        expect(white[0]).toBeCloseTo(0.0)
        expect(white[1]).toBeCloseTo(0.0)
        expect(white[2]).toBeCloseTo(1.0)

        const black = rgb_to_hsl([0, 0, 0])
        expect(black[0]).toBeCloseTo(0.0)
        expect(black[1]).toBeCloseTo(0.0)
        expect(black[2]).toBeCloseTo(0.0)

        const gray = rgb_to_hsl([128, 128, 128])
        expect(gray[0]).toBeCloseTo(0.0)
        expect(gray[1]).toBeCloseTo(0.0)
        expect(gray[2]).toBeCloseTo(0.5)

        const color_0 = rgb_to_hsl([123, 25, 110])
        expect(color_0[0]).toBeCloseTo(308, -1)
        expect(color_0[1]).toBeCloseTo(0.662)
        expect(color_0[2]).toBeCloseTo(0.29)
    })

    it('hsl_to_rgb', () => {
        const red = hsl_to_rgb([0.0, 1.0, 0.5])
        expect(red[0]).toBeCloseTo(255)
        expect(red[1]).toBeCloseTo(0)
        expect(red[2]).toBeCloseTo(0)

        const green = hsl_to_rgb([120.0, 1.0, 0.5])
        expect(green[0]).toBeCloseTo(0)
        expect(green[1]).toBeCloseTo(255)
        expect(green[2]).toBeCloseTo(0)

        const blue = hsl_to_rgb([240.0, 1.0, 0.5])
        expect(blue[0]).toBeCloseTo(0)
        expect(blue[1]).toBeCloseTo(0)
        expect(blue[2]).toBeCloseTo(255)

        const white = hsl_to_rgb([0.0, 0.0, 1.0])
        expect(white[0]).toBeCloseTo(255)
        expect(white[1]).toBeCloseTo(255)
        expect(white[2]).toBeCloseTo(255)

        const black = hsl_to_rgb([0.0, 0.0, 0.0])
        expect(black[0]).toBeCloseTo(0)
        expect(black[1]).toBeCloseTo(0)
        expect(black[2]).toBeCloseTo(0)

        const gray = hsl_to_rgb([0.0, 0.0, 0.5])
        expect(gray[0]).toBeCloseTo(128, -1)
        expect(gray[1]).toBeCloseTo(128, -1)
        expect(gray[2]).toBeCloseTo(128, -1)

        const color_0 = hsl_to_rgb([308, 0.662, 0.29])
        expect(color_0[0]).toBeCloseTo(123, -1)
        expect(color_0[1]).toBeCloseTo(25)
        expect(color_0[2]).toBeCloseTo(110, -1)
    })
})
