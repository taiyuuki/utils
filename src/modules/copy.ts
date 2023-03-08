import { domSetCSS } from './dom'
import { isNotVoid, isStringLike } from './is'
import { strMaybeNumber } from './string'

/**
 * 复制文本到剪切板
 * @public
 * @param target - 字符串或DOM元素
 * @param addition - 复制时在后面添加额外字符
 */
export function copyText(target: string | number | HTMLElement, addition?: string) {
  let text = isStringLike(target) ? strMaybeNumber(target) : target.innerText
  if (isNotVoid(addition)) {
    text += addition
  }
  function copyBySelect() {
    const textarea = document.createElement('textarea')
    domSetCSS(textarea, {
      'position': 'fixed',
      'left': '-999px',
      'opacity': '0',
    })
    document.body.appendChild(textarea)
    textarea.value = text
    textarea.select()
    document.execCommand('copy', true)
    document.body.removeChild(textarea)
  }
  if ('clipboard' in navigator) {
    navigator.clipboard.writeText(text).catch(copyBySelect)
  }
  else {
    copyBySelect()
  }
}