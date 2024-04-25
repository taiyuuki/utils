import { describe, expect, it } from 'vitest'
import { object_pick } from '../src/modules/obj'

describe('object', () => {
    it('object pick', () => {
        expect(object_pick({
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
