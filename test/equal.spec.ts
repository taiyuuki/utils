import { describe, expect, it } from 'vitest'
import { deep_equal } from '../src/modules/equal'

describe('equal', () => {
    it('deep equal', () => {
        expect(deep_equal({
            a: 1,
            b: 2,
            c: {
                d: '123',
                e: 'xyz',
                f: false,
                g: null,
            },
        }, {
            a: 1,
            b: 2,
            c: {
                d: '123',
                e: 'xyz',
                f: false,
                g: null,
            },
        })).equal(true)
        expect(deep_equal(NaN, NaN)).equal(true)
        expect(deep_equal([1, 'xyz', { name: 'abc' }], [1, 'xyz', { name: 'abc' }])).equal(true)
        expect(deep_equal(/abc/g, new RegExp(/abc/g))).equal(true)
    })
})
