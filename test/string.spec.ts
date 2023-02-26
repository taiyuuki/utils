import { strCapital, strComplement, strEnsurePrefix, strEnsureSuffix, strNoPrefix, strNoSuffix, strRandom, strUuid } from '../src/modules/string'
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

  it('确保有前缀', () => {
    expect(strEnsurePrefix('primary', '--')).equal('--primary')
    expect(strEnsurePrefix('--primary', '--')).equal('--primary')
  })

  it('确保有后缀', () => {
    expect(strEnsureSuffix('output', '.epub')).equal('output.epub')
    expect(strEnsureSuffix('output.epub', '.epub')).equal('output.epub')
  })

  it('确保没有前缀', () => {
    expect(strNoPrefix('#66ccff', '#')).equal('66ccff')
    expect(strNoPrefix('iem:./modules/**/*', 'iem:')).equal('./modules/**/*')
  })

  it('确保没有后缀', () => {
    expect(strNoSuffix('abc.jpg', '.jpg')).equal('abc')
    expect(strNoSuffix('123:xyz', ':xyz')).equal('123')
  })

  it('首字母大写', () => {
    expect(strCapital('1abc')).equal('1abc')
    expect(strCapital('this')).equal('This')
  })

  it('字符串补零', () => {
    expect(strComplement('1')).equal('01')
    expect(strComplement('56')).equal('56')
    expect(strComplement('106', 4)).equal('0106')
    expect(strComplement('106', 2)).equal('106')
    expect(strComplement('1', 3)).equal('001')
    expect(strComplement('3', 4, '1')).equal('1113')
  })
})