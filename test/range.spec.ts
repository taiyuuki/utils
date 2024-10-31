import { describe, expect, it } from 'vitest'
import { MathRange } from 'src/modules/range'

describe('Range', () => {
    const range = new MathRange('(4, 10]')

    it('between', () => {
        expect(range.is_between(4)).toBe(false)
        expect(range.is_between(5)).toBe(true)
        expect(range.is_between(10)).toBe(true)
        expect(range.is_between(11)).toBe(false)
    })

    it('valid', () => {
        expect(MathRange.valid('(4, 10]')).toBe(true)
        expect(MathRange.valid('(4,10]')).toBe(true)
        expect(MathRange.valid('[ 4,10 )')).toBe(true)
        expect(MathRange.valid('( -4,10 )')).toBe(true)
        expect(MathRange.valid('[ -4 , 10 )')).toBe(true)
        expect(MathRange.valid('4,10')).toBe(false)
        expect(MathRange.valid('4,10)')).toBe(false)
        expect(MathRange.valid('[4,10')).toBe(false)
        expect(MathRange.valid('123546')).toBe(true)
    })
})
