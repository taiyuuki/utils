import { dom_set_css } from './dom'
import { is_not_void, is_string_like } from './is'
import { str_maybe_number } from './string'

/**
 * 该函数使用剪贴板 API（如果可用）将文本复制到剪贴板，否则它回退到创建临时文本区域元素并使用 execCommand 方法。
 * @public
 * @param target - 目标可以是字符串、数字或 HTMLElement。它是将被复制到剪贴板的文本。
 * @param addition - 在将文本复制到剪贴板之前将附加到文本的可选字符串。如果未提供任何值，则文本将按原样复制。
 */
function copy_text(target: HTMLElement | number | string, addition?: string) {
    let text = is_string_like(target) ? str_maybe_number(target) : target.textContent as string
    if (is_not_void(addition)) {
        text += addition
    }
    function copyBySelect() {
        const textarea = document.createElement('textarea')
        dom_set_css(textarea, {
            position: 'fixed',
            left: '-999px',
            opacity: '0',
        })
        document.body.appendChild(textarea)
        textarea.value = text
        textarea.select()
        document.execCommand('copy', true)
        document.body.removeChild(textarea)
    }
    if ('clipboard' in navigator) {
        navigator.clipboard.writeText(text).catch(copyBySelect)
    } else {
        copyBySelect()
    }
}

export { copy_text }
