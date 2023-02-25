import { deepEqual } from '../src/modules/equal'
import { describe, expect, it } from 'vitest'

describe('equal', () => {
  it('deep equal', () => {
    expect(deepEqual({
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
    expect(deepEqual(NaN, NaN)).equal(true)
    expect(deepEqual([1, 'xyz', { name: 'abc' }], [1, 'xyz', { name: 'abc' }])).equal(true)
    expect(deepEqual(/abc/g, new RegExp(/abc/g))).equal(true)
  })
})