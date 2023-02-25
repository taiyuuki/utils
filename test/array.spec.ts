import { arrMove, arrRemove, arrToObj, arrUnique } from '../src/modules/array'
import { describe, expect, it } from 'vitest'

describe('array', () => {
  it('数组转对象', () => {
    expect(arrToObj(['1', 'abc', 'xyz'])).toMatchInlineSnapshot(`
      {
        "1": true,
        "abc": true,
        "xyz": true,
      }
    `)
  })

  it('数组去重', () => {
    expect(arrUnique([1, 1, 2, 3, 4, 'abc', 'xyz', 0, 1, 'abc'])).toMatchInlineSnapshot(`
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
    expect(arrMove([0, 1, 2, 3, 4, 5, 6, 7], 2, 5)).toMatchInlineSnapshot(`
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
    expect(arrRemove(arr, 5)).equal(true)
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
})