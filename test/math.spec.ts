import { math_to_fixed, math_random_int, math_between, math_to_hex } from '../src/modules/math'
import { describe, expect, it } from 'vitest'
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
        expect(keys.every((n) => {
            const r = math_to_fixed((list[n] / count), 2)
            return numbers.includes(n) && r >= (1 / length) - 0.03 && r <= (1 / length) + 0.03
        })).equal(true)
    })

    it('math_between', () => {
        const a = 20, b = 100
        expect(math_between(0, a, b)).equal(20)
        expect(math_between(21, b, a)).equal(21)
        expect(math_between(50, a, b)).equal(50)
        expect(math_between(120, a, b)).equal(100)
        expect(math_between(30, b, a)).equal(30)
    })

    it('math_to_hex', () => {
        expect(math_to_hex(255)).equal('FF')
    })
})
