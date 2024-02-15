import { describe, expect, it } from 'vitest'
import { clone_deep } from '../src/modules/clone'

describe('clone', () => {
    it('deep clone', () => {
        const source = {
            a: '123',
            b: {
                c() {
                    return null
                },
            },
            d: {
                e: '123',
                f: 1234,
                g: {
                    h() {
                        return null
                    },
                },
                h: null,
                i: undefined,
            },
        } as any
        source.b.test = source
        source.__proto__.a = '123'
        const target = clone_deep(source)

        expect(target).toEqual(source)
        expect(target === target.b.test).toEqual(true)
        expect(target === source.b.test).toEqual(false)
        expect(target.a).toEqual('123')
    })
})
