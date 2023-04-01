import { tempCompiler } from '../src/modules/template'
import { describe, expect, it } from 'vitest'

describe('模板解析', () => {
  it('tempCompiler', () => {
    const data = {
      name: '张三',
      age: 18,
      gender() {
        return '男'
      },
    }
    const temp1 = '<div>姓名：${name}，年龄：${age}</div>'
    const temp2 = `
      <div>姓名：\${name}</div>
      <div>年龄：\${age}</div>
      <div>性别：\${gender()}</div>
    `
    const temp3 = `
      <div>姓名：\${name === '' ? '未知' : name }</div>
      <div>年龄：\${age > 0 ? age : 0}</div>
    `

    expect(tempCompiler(temp1, data)).toMatchInlineSnapshot('"<div>姓名：张三，年龄：18</div>"')
    expect(tempCompiler(temp2, data)).toMatchInlineSnapshot(`
      "
            <div>姓名：张三</div>
            <div>年龄：18</div>
            <div>性别：男</div>
          "
    `)
    expect(tempCompiler(temp3, {
      name: '',
      age: -12,
    })).toMatchInlineSnapshot(`
      "
            <div>姓名：未知</div>
            <div>年龄：0</div>
          "
    `)
  })
})