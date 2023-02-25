import { strRandom, strUuid } from '../src/modules/string'
import { describe, expect, it } from 'vitest'

describe('string', () => {
  it('随机字符', () => {
    expect(strRandom(10, 36).match(/[a-z0-9]{10}/g) === null).equal(false)
    expect(strRandom(4).match(/[a-f0-9]{4}/g) === null).equal(false)
    expect(strRandom(6, 36).match(/[a-f0-9]{6}/g) === null).equal(true)
  })

  it('uuid', () => {
    expect(strUuid().match(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/g) === null).equal(false)
  })
})