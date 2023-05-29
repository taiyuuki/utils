import { arr_move, arr_remove, arr_to_obj, arr_unique, arr_value_index } from '../src/modules/array'
import { describe, expect, it } from 'vitest'

describe('array', () => {
    it('数组转对象', () => {
        expect(arr_to_obj(['1', 'abc', 'xyz'])).toMatchInlineSnapshot(`
      {
        "1": true,
        "abc": true,
        "xyz": true,
      }
    `)
    })

    it('数组去重', () => {
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

    it('数组移动', () => {
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

    it('数组删除', () => {
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

    it('数组键值交换', () => {
        expect(arr_value_index(['a', 4, '4', '012'])).toMatchInlineSnapshot(`
          {
            "012": 3,
            "4": 2,
            "a": 0,
          }
        `)
    })
})
