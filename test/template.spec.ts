import { describe, expect, it } from 'vitest'
import { temp_compiler } from '../src/modules/template'

describe('模板编译', () => {
    it('temp_compiler', () => {
        const data = {
            name: 'Jack',
            score() {
                return 59
            },
            pass: false,
        }
        const temp1 = '<div>姓名：${name}，分数：${score()}, 及格：${pass ? "是" : "否"}</div>'
        const temp2 = `
      <div>姓名：\${name}</div>
      <div>分数：\${score()}</div>
      <div>及格：\${pass ? "是" : "否"}</div>
    `
        const temp3 = `
      <div>姓名：\${name === '' ? '未知' : name }</div>
      <div>年龄：\${age > 0 ? age : 0}</div>
    `
        const temp4 = `
      <div>姓名：{{ name }}</div>
      <div>分数：{{ score() }}</div>
      <div>及格：{{ pass ? "是" : "否"}}</div>
    `

        expect(temp_compiler(temp1, data)).toMatchInlineSnapshot('"<div>姓名：Jack，分数：59, 及格：否</div>"')
        expect(temp_compiler(temp2, data)).toMatchInlineSnapshot(`
          "
                <div>姓名：Jack</div>
                <div>分数：59</div>
                <div>及格：否</div>
              "
        `)
        expect(temp_compiler(temp3, {
            name: '',
            age: -12,
        })).toMatchInlineSnapshot(`
          "
                <div>姓名：未知</div>
                <div>年龄：0</div>
              "
        `)
        expect(temp_compiler(temp4.replaceAll('{{', '${').replaceAll('}}', '}'), data)).toMatchInlineSnapshot(`
          "
                <div>姓名：Jack</div>
                <div>分数：59</div>
                <div>及格：否</div>
              "
        `)
    })
})
