import { describe, expect, it } from 'vitest'
import { keepBetween } from '../src/number'

describe('number', () => {
  const a = 20, b = 100
  it('两数之间', () => {
    expect(keepBetween(0, a, b)).equal(20)
    expect(keepBetween(21, b, a)).equal(21)
    expect(keepBetween(50, a, b)).equal(50)
    expect(keepBetween(120, a, b)).equal(100)
    expect(keepBetween(30, b, a)).equal(30)
  })
})