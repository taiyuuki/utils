import { domSetCSS } from './dom'
import { isNotVoid, isStringLike } from './is'
import { strMaybeNumber } from './string'

/**
 * 复制文本到剪切板
 * The function copies text to the clipboard using the Clipboard API if available, otherwise it falls
 * back to creating a temporary textarea element and using the execCommand method.
 * @public
 * @param target - The target can be a string, number, or HTMLElement
 * that contains the text to be copied.
 * @param addition - Optional string parameter that can be added to the end of the text to
 * be copied. If not provided, the copied text will be the same as the target.
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