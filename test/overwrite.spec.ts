import { describe, expect, it } from 'vitest'
import { objectKeys } from '../src/modules/obj'

describe('overwrite', () => {
  const t1 = {
    a: 1, b: 2, c: {},
  }
  it('获取对象的键', () => {
    expect(objectKeys(t1)).toMatchInlineSnapshot(`
      [
        "a",
        "b",
        "c",
      ]
    `)
  })
})