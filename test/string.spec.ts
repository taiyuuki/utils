import { describe, expect, it } from 'vitest'
import { str_capital, str_complement, str_ensure_prefix, str_ensure_suffix, str_no_prefix, str_no_suffix, str_random, str_uuid } from '../src/modules/string'

describe('string', () => {
    it('str_random', () => {
        expect(str_random(10, 36).match(/[\da-z]{10}/g) === null).equal(false)
        expect(str_random(4).match(/[\da-f]{4}/g) === null).equal(false)
        expect(str_random(6, 36).match(/[\da-f]{6}/g) === null).equal(true)
    })

    it('str_uuid', () => {
        expect(str_uuid().match(/[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}/g) === null).equal(false)
    })

    it('str_ensure_prefix', () => {
        expect(str_ensure_prefix('primary', '--')).equal('--primary')
        expect(str_ensure_prefix('--primary', '--')).equal('--primary')
    })

    it('str_ensure_suffix', () => {
        expect(str_ensure_suffix('output', '.epub')).equal('output.epub')
        expect(str_ensure_suffix('output.epub', '.epub')).equal('output.epub')
    })

    it('str_no_prefix', () => {
        expect(str_no_prefix('#66ccff', '#')).equal('66ccff')
        expect(str_no_prefix('iem:./modules/**/*', 'iem:')).equal('./modules/**/*')
    })

    it('str_no_suffix', () => {
        expect(str_no_suffix('abc.jpg', '.jpg')).equal('abc')
        expect(str_no_suffix('123:xyz', ':xyz')).equal('123')
    })

    it('str_capital', () => {
        expect(str_capital('1abc')).equal('1abc')
        expect(str_capital('this')).equal('This')
    })

    it('str_complement', () => {
        expect(str_complement('1')).equal('01')
        expect(str_complement('56')).equal('56')
        expect(str_complement('106', 4)).equal('0106')
        expect(str_complement('106', 2)).equal('106')
        expect(str_complement('1', 3)).equal('001')
        expect(str_complement('3', 4, '1')).equal('1113')
    })
})
