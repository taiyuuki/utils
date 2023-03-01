import { describe, expect, it } from 'vitest'
import { JSDOM } from 'jsdom'
import { domGetCSS, domSetCSS, domSetCssVar } from '../src/modules/dom'
// @vitest-environment jsdom

const html = `
<!DOCTYPE html>
<body>
  <div id="test" style="width: 100px;display: block;color: #fff;">测试</div>
</body>
`

const dom = new JSDOM(html)

const testEl = dom.window.document.querySelector('#test') as HTMLElement

describe('dom', () => {
  it('获取DOM元素的CSS属性', () => {
    expect(domGetCSS(testEl, 'display')).equal('block')
    expect(domGetCSS(testEl, 'color')).equal('rgb(255, 255, 255)')
  })
  it('给DOM元素设置CSS', () => {
    domSetCSS(testEl, {
      'width': '200px',
      'height': '200px',
    })
    expect(testEl.style.width).equal('200px')
    expect(testEl.style.height).equal('200px')
  })
  it('给DOM元素设置CSS变量', () => {
    domSetCssVar('primary', '#66ccff')
    expect(window.document.body.style).toMatchInlineSnapshot(`
      CSSStyleDeclaration {
        "0": "--primary",
        "_importants": {
          "--primary": undefined,
        },
        "_length": 1,
        "_onChange": [Function],
        "_values": {
          "--primary": "#66ccff",
        },
      }
    `)
  })
})