import { get_contrast_color, get_lightness_value, hex_to_rgb, rgb_to_hex } from '../src/modules/color'
import { describe, expect, it } from 'vitest'

describe('color', () => {
    it('rgb_to_hex', () => {
        expect(rgb_to_hex([255, 0, 0])).toMatchInlineSnapshot(
            '"#FF0000"',
        )

        expect(rgb_to_hex([0, 0, 0])).toMatchInlineSnapshot(
            '"#000000"',
        )

        expect(rgb_to_hex([255, 255, 255])).toMatchInlineSnapshot(
            '"#FFFFFF"',
        )
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

    it('get_lightness_color', () => {
        expect(get_lightness_value('#FF0000').toFixed(2)).toMatchInlineSnapshot('"0.50"')
        expect(get_lightness_value('#00FF00').toFixed(2)).toMatchInlineSnapshot('"0.50"')
        expect(get_lightness_value('#0000FF').toFixed(2)).toMatchInlineSnapshot('"0.50"')
        expect(get_lightness_value('#FFFFFF').toFixed(2)).toMatchInlineSnapshot('"1.00"')
        expect(get_lightness_value('#000000').toFixed(2)).toMatchInlineSnapshot('"0.00"')
        expect(get_lightness_value([255, 0, 0]).toFixed(2)).toMatchInlineSnapshot('"0.50"')
        expect(get_lightness_value([255, 255, 0]).toFixed(2)).toMatchInlineSnapshot('"0.50"')
        expect(get_lightness_value([255, 0, 255]).toFixed(2)).toMatchInlineSnapshot('"0.50"')
        expect(get_lightness_value([0, 0, 255]).toFixed(2)).toMatchInlineSnapshot('"0.50"')
        expect(get_lightness_value([100, 50, 153]).toFixed(2)).toMatchInlineSnapshot('"0.40"')
    })
})
