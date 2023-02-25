import { describe, expect, it } from 'vitest'
import { getKeys } from '../src/modules/overwrite'

describe('overwrite', () => {
  const t1 = {
    a: 1, b: 2, c: {},
  }
  it('获取对象的键', () => {
    expect(getKeys(t1)).toMatchInlineSnapshot(`
      [
        "a",
        "b",
        "c",
      ]
    `)
  })
})