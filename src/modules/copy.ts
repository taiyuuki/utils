import { dom_set_css } from './dom'
import { is_not_void, is_string_like } from './is'
import { str_maybe_number } from './string'

/**
 * The function copies text to the clipboard using the Clipboard API if available, otherwise it falls
 * back to creating a temporary textarea element and using the execCommand method.
 * @public
 * @param target - The target can be a string, number, or HTMLElement
 * that contains the text to be copied.
 * @param addition - Optional string parameter that can be added to the end of the text to
 * be copied. If not provided, the copied text will be the same as the target.
 */
function copy_text(target: string | number | HTMLElement, addition?: string) {
    let text = is_string_like(target) ? str_maybe_number(target) : target.innerText
    if (is_not_void(addition)) {
        text += addition
    }
    function copyBySelect() {
        const textarea = document.createElement('textarea')
        dom_set_css(textarea, {
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

export {
    copy_text,
}
