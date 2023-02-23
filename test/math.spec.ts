import { mathToFixed, mathRandomInt } from '../src/math'
import { describe, expect, it } from 'vitest'
import { getKeys } from '../src/overwrite'

describe('math', () => {
  it('四舍五入', () => {
    expect(mathToFixed(1.254)).equal(1)
    expect(mathToFixed(1.554)).equal(2)
    expect(mathToFixed(2.5)).equal(3)
    expect(mathToFixed(2.5123, 3)).equal(2.512)
  })

  it('随机整数', () => {
    const length = 6
    const count = 3000
    const numbers = Array.from({ length }).map((_, i) => {
      return `${i}`
    })
    const list = {} as Record<string, number>
    for (let i = 0;i <= count;i++) {
      const n = mathRandomInt(0, 5)
      if (list[n] === void 0) {
        list[n] = 0
      }
      else {
        list[n]++
      }
    }
    const keys = getKeys(list)
    expect(numbers.every(n => {
      return keys.includes(n)
    })).equal(true)
    expect(keys.every((n) => {
      const r = mathToFixed((list[n] / count), 2)
      return numbers.includes(n) && r >= (1 / length) - 0.02 && r <= (1 / length) + 0.02
    })).equal(true)
  })
})