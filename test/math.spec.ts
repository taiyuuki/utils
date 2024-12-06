import { describe, expect, it } from 'vitest'
import { bytes_to_int, int_to_bytes, math_between, math_random_int, math_to_fixed, math_to_hex } from '../src/modules/math'
import { object_keys } from '../src/modules/obj'

describe('math', () => {
    it('math_to_fixed', () => {
        expect(math_to_fixed(1.254)).equal(1)
        expect(math_to_fixed(1.554)).equal(2)
        expect(math_to_fixed(2.5)).equal(3)
        expect(math_to_fixed(2.5123, 3)).equal(2.512)
    })

    it('math_random_int', () => {
        const length = 6
        const count = 3000
        const numbers = Array.from({ length }).map((_, i) => {
            return `${i}`
        })
        const list = {} as Record<string, number>
        for (let i = 0; i <= count; i++) {
            const n = math_random_int(0, 5)
            if (list[n] === void 0) {
                list[n] = 0
            }
            else {
                list[n]++
            }
        }
        const keys = object_keys(list)
        expect(numbers.every(n => {
            return keys.includes(n)
        })).equal(true)
        expect(keys.every(n => {
            const r = math_to_fixed(list[n] / count, 2)

            return numbers.includes(n) && r >= 1 / length - 0.03 && r <= 1 / length + 0.03
        })).equal(true)
    })

    it('math_between', () => {
        const a = 20, 
            b = 100
        expect(math_between(0, a, b)).equal(20)
        expect(math_between(21, b, a)).equal(21)
        expect(math_between(50, a, b)).equal(50)
        expect(math_between(120, a, b)).equal(100)
        expect(math_between(30, b, a)).equal(30)
    })

    it('math_to_hex', () => {
        expect(math_to_hex(255)).equal('FF')
    })

    it('int_to_bytes', () => {
        const bytes_1 = int_to_bytes(0x12345678)
        expect(bytes_1[3]).equal(0x12)
        expect(bytes_1[2]).equal(0x34)
        expect(bytes_1[1]).equal(0x56)
        expect(bytes_1[0]).equal(0x78)

        const bf = new ArrayBuffer(4)
        const u8 = new Uint8Array(bf)
        const u32 = new Uint32Array(bf)
        u32[0] = 0x12345678
        const bytes_2 = int_to_bytes(u32[0])
        expect(bytes_2[0]).equal(u8[0])
        expect(bytes_2[1]).equal(u8[1])
        expect(bytes_2[2]).equal(u8[2])
        expect(bytes_2[3]).equal(u8[3])
    })

    it('bytes_to_int', () => {
        expect(bytes_to_int([0x12, 0x34, 0x56, 0x78])).equal(0x12345678)

        const bf = new ArrayBuffer(4)
        const u8 = new Uint8Array(bf)
        const u32 = new Uint32Array(bf)
        u32[0] = 0x12345678
        expect(bytes_to_int([u8[3], u8[2], u8[1], u8[0]])).equal(u32[0])
    })
})
