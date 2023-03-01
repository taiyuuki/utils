import { describe, expect, it } from 'vitest'
import { isNotVoid, isVoid, isEmptyString, isEmptyArray, isEmptyObj, isObject, isDate, isRegexp, isNumber, isRgbColor, isHexColor } from '../src/modules/is'

describe('is', () => {
  it('值判断', () => {
    expect(isNotVoid(null)).toEqual(false)
    expect(isNotVoid(undefined)).toEqual(false)
    expect(isNotVoid(0)).toEqual(true)
    expect(isNotVoid('')).toEqual(true)

    expect(isVoid(null)).toEqual(true)
    expect(isVoid(undefined)).toEqual(true)
    expect(isVoid(NaN)).toEqual(true)
    expect(isVoid(0)).toEqual(false)
    expect(isVoid('')).toEqual(false)

    expect(isEmptyString('')).toEqual(true)
    expect(isEmptyString('  ')).toEqual(false)
    expect(isEmptyString('  ', true)).toEqual(true)
    expect(isEmptyString(null)).toEqual(true)
    expect(isEmptyString(undefined)).toEqual(true)

    expect(isEmptyArray([])).toEqual(true)
    expect(isEmptyArray(null)).toEqual(false)
    expect(isEmptyArray(NaN)).toEqual(false)
    expect(isEmptyArray(undefined, false)).toEqual(true)
    expect(isEmptyArray([[]])).toEqual(false)

    expect(isEmptyObj([])).toEqual(false)
    expect(isEmptyObj({})).toEqual(true)
    expect(isEmptyObj(undefined)).toEqual(false)
    expect(isEmptyObj(NaN)).toEqual(false)
    expect(isEmptyObj(NaN, false)).toEqual(true)
    expect(isEmptyObj([{}])).toEqual(false)

    expect(isObject({})).toEqual(true)
    expect(isObject([])).toEqual(false)
    expect(isObject(null)).toEqual(false)

    expect(isDate(null)).toEqual(false)
    expect(isDate(Date.now())).toEqual(false)
    expect(isDate(new Date())).toEqual(true)

    expect(isRegexp(new RegExp('.+?'))).toEqual(true)
    expect(isRegexp(/abc/g)).toEqual(true)
    expect(isRegexp({})).toEqual(false)
    expect(isRegexp('')).toEqual(false)

    expect(isNumber(NaN)).toEqual(false)
    expect(isNumber(123)).toEqual(true)
    expect(isNumber(Number.MAX_SAFE_INTEGER)).toEqual(true)
    expect(isNumber(Number.NEGATIVE_INFINITY)).toEqual(false)
    expect(isNumber(Number.POSITIVE_INFINITY)).toEqual(false)

    expect(isRgbColor([1, 2, 3])).toEqual(true)
    expect(isRgbColor([100, 184, 300])).toEqual(false)
    expect(isRgbColor([125, 200, 3])).toEqual(true)
    expect(isRgbColor([32, 120, 3, 1])).toEqual(true)
    expect(isRgbColor([25, 220, 3, 2])).toEqual(false)

    expect(isHexColor('66ccff')).toEqual(true)
    expect(isHexColor('#66ccff')).toEqual(true)
    expect(isHexColor('#66abll')).toEqual(false)
    expect(isHexColor('fff')).toEqual(true)
    expect(isHexColor('#aaa')).toEqual(true)
  })
})