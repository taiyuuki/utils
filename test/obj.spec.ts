import { objectPick } from '../src/modules/obj'
import { describe, expect, it } from 'vitest'

describe('object', () => {
  it('object pick', () => {
    expect(objectPick({
      name: 'abc',
      value: false,
      age: 28,
    }, ['name', 'age'])).toMatchInlineSnapshot(`
      {
        "age": 28,
        "name": "abc",
      }
    `)
  })
})