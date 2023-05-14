import { describe, expect, it } from 'vitest'
import { is_not_void, is_void, is_empty_string, is_empty_array, is_empty_obj, is_object, is_date, is_regexp, is_number, is_rgb_color, is_hex_color } from '../src/modules/is'

describe('is', () => {
    it('值判断', () => {
        expect(is_not_void(null)).toEqual(false)
        expect(is_not_void(undefined)).toEqual(false)
        expect(is_not_void(0)).toEqual(true)
        expect(is_not_void('')).toEqual(true)

        expect(is_void(null)).toEqual(true)
        expect(is_void(undefined)).toEqual(true)
        expect(is_void(NaN)).toEqual(true)
        expect(is_void(0)).toEqual(false)
        expect(is_void('')).toEqual(false)
        expect(is_void({})).toEqual(false)
        expect(is_void(new RegExp('abc'))).toEqual(false)

        expect(is_empty_string('')).toEqual(true)
        expect(is_empty_string('  ')).toEqual(false)
        expect(is_empty_string('  ', true)).toEqual(true)
        expect(is_empty_string(null)).toEqual(true)
        expect(is_empty_string(undefined)).toEqual(true)

        expect(is_empty_array([])).toEqual(true)
        expect(is_empty_array(null)).toEqual(false)
        expect(is_empty_array(NaN)).toEqual(false)
        expect(is_empty_array(undefined, false)).toEqual(true)
        expect(is_empty_array([[]])).toEqual(false)

        expect(is_empty_obj([])).toEqual(false)
        expect(is_empty_obj({})).toEqual(true)
        expect(is_empty_obj(undefined)).toEqual(false)
        expect(is_empty_obj(NaN)).toEqual(false)
        expect(is_empty_obj(NaN, false)).toEqual(true)
        expect(is_empty_obj([{}])).toEqual(false)

        expect(is_object({})).toEqual(true)
        expect(is_object([])).toEqual(false)
        expect(is_object(null)).toEqual(false)

        expect(is_date(null)).toEqual(false)
        expect(is_date(Date.now())).toEqual(false)
        expect(is_date(new Date())).toEqual(true)

        expect(is_regexp(new RegExp('.+?'))).toEqual(true)
        expect(is_regexp(/abc/g)).toEqual(true)
        expect(is_regexp({})).toEqual(false)
        expect(is_regexp('')).toEqual(false)

        expect(is_number(NaN)).toEqual(false)
        expect(is_number(123)).toEqual(true)
        expect(is_number(Number.MAX_SAFE_INTEGER)).toEqual(true)
        expect(is_number(Number.NEGATIVE_INFINITY)).toEqual(false)
        expect(is_number(Number.POSITIVE_INFINITY)).toEqual(false)

        expect(is_rgb_color([1, 2, 3])).toEqual(true)
        expect(is_rgb_color([100, 184, 300])).toEqual(false)
        expect(is_rgb_color([125, 200, 3])).toEqual(true)
        expect(is_rgb_color([32, 120, 3, 1])).toEqual(true)
        expect(is_rgb_color([25, 220, 3, 2])).toEqual(false)

        expect(is_hex_color('66ccff')).toEqual(true)
        expect(is_hex_color('#66ccff')).toEqual(true)
        expect(is_hex_color('#66abll')).toEqual(false)
        expect(is_hex_color('fff')).toEqual(true)
        expect(is_hex_color('#aaa')).toEqual(true)
    })
})
