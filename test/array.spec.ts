import { describe, expect, it } from 'vitest'
import { arr_move, arr_random, arr_remove, arr_to_obj, arr_unique, arr_value_index } from '../src/modules/array'

describe('array', () => {
    it('arr_to_obj', () => {
        expect(arr_to_obj(['1', 'abc', 'xyz'])).toMatchInlineSnapshot(`
          {
            "1": true,
            "abc": true,
            "xyz": true,
          }
        `)
    })

    it('arr_unique', () => {
        expect(arr_unique([1, 1, 2, 3, 4, 'abc', 'xyz', 0, 1, 'abc'])).toMatchInlineSnapshot(`
          [
            1,
            2,
            3,
            4,
            "abc",
            "xyz",
            0,
          ]
        `)
    })

    it('arr_move', () => {
        expect(arr_move([0, 1, 2, 3, 4, 5, 6, 7], 2, 5)).toMatchInlineSnapshot(`
          [
            0,
            1,
            3,
            4,
            5,
            2,
            6,
            7,
          ]
        `)
    })

    it('arr_remove', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        expect(arr_remove(arr, 5)).equal(true)
        expect(arr).toMatchInlineSnapshot(`
          [
            1,
            2,
            3,
            4,
            6,
            7,
          ]
        `)
    })

    it('arr_value_index', () => {
        expect(arr_value_index(['a', 4, '4', '012'])).toMatchInlineSnapshot(`
          {
            "012": 3,
            "4": 2,
            "a": 0,
          }
        `)
    })

    it('arr_random', () => {
        const li = ['a', 'b', 'c']
        expect(arr_random(['a'])).toMatch('a')
        expect(arr_random(['a'])).toMatch('a')
        expect(arr_random(['a'])).toMatch('a')
        expect(arr_random(['a'])).toMatch('a')
        expect(arr_random(['a'])).toMatch('a')
        expect(arr_random(['a'])).toMatch('a')
        expect(arr_random(['a'])).toMatch('a')
        expect(arr_random(['a'])).toMatch('a')
        expect(arr_random(['a'])).toMatch('a')
        expect(li.includes(arr_random(li))).toBeTruthy()
        expect(li.includes(arr_random(li))).toBeTruthy()
        expect(li.includes(arr_random(li))).toBeTruthy()
        expect(li.includes(arr_random(li))).toBeTruthy()
        expect(li.includes(arr_random(li))).toBeTruthy()
        expect(li.includes(arr_random(li))).toBeTruthy()
        expect(li.includes(arr_random(li))).toBeTruthy()
        expect(li.includes(arr_random(li))).toBeTruthy()
        expect(li.includes(arr_random(li))).toBeTruthy()
        expect(li.includes(arr_random(li))).toBeTruthy()
    })
})
