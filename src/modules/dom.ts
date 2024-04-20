import type { CSSStyleName } from '../types'
import { throw_type_error } from './error'
import { is_element, is_void, is_window } from './is'
import { str_ensure_prefix } from './string'

/**
 * 该函数根据给定的选择器字符串返回 DOM 元素，如果选择器无效或未找到该元素，则返回未定义的元素。
 * @public
 * @param selector - 表示用于从 DOM 中选择元素的 CSS 选择器的字符串。
 * @returns 此函数返回与给定选择器匹配的 DOM 元素，如果选择器无效或未找到元素，则返回“undefined”。
 */
function dom_get_el(selector: string) {
    if (is_void(selector) || typeof selector !== 'string') {
        return void 0
    }
    try {
        return document.querySelector(selector) || void 0
    } catch (err) {
        return void 0
    }
}

/**
 * 该函数返回给定 DOM 元素的指定 CSS 属性的值。
 * @public
 * @param el - 我们要为其获取计算的 CSS 样式的 HTML 元素。
 * @param prop - CSSStyleName 是表示 CSS 属性名称的字符串的类型别名。它用作 dom_get_css
 * 函数的第二个参数，以指定从给定元素的计算样式中检索哪个 CSS 属性。
 * @returns 函数 dom_get_css 返回给定 DOM 元素 (el) 的指定 CSS 属性 (prop)
 * 的值。该值是使用“window.getComputedStyle”方法获取的，并以字符串形式返回。
 */
function dom_get_css<T extends Element>(el: T, prop: CSSStyleName) {
    return window.getComputedStyle(el).getPropertyValue(prop)
}

/**
 * 该函数在给定的 HTML 元素上设置 CSS 样式。
 * @public
 * @param el - HTMLElement - 应用 CSS 样式的 DOM 元素。
 * @param css - `css` 参数是一个包含 CSS 属性值对作为键值对的对象。
 */
function dom_set_css(el: HTMLElement, css: Partial<CSSStyleDeclaration>) {
    const style = el.style
    for (const prop in css) {
        style[prop] = css[prop] as string
    }
}

/**
 * 该函数返回 DOM 元素或窗口的大小。
 * @public
 * @param el - 参数 `el` 的类型为 `Element | Window`，这意味着它可以是 HTML 元素或window对象。函数 dom_get_size
 * 返回元素或窗口的宽度和高度，具体取决于 el 的类型。
 * @returns 函数 dom_get_size 返回一个对象，该对象具有表示给定 DOM 元素或window大小的 `width` 和 `height`
 * 属性。如果参数是window，它返回window的内部宽度和高度。如果参数是一个元素，它会返回从其 getBoundingClientRect() 方法获得的元素的宽度和高度。如果参数既不是
 * window也不是元素，它会抛出一个错误。
 */
function dom_get_size(el: Element | Window) {
    if (is_window(el)) {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    } else if (is_element(el)) {
        const elSize = el.getBoundingClientRect()

        return {
            width: elSize.width,
            height: elSize.height,
        }
    } else {
        throw_type_error('DOM element or window', 'el')
    }
}

/**
 * 这个函数在给定的 DOM 元素上设置一个 CSS 变量。
 * @public
 * @param varName - 一个字符串，表示要设置的 CSS 变量的名称。
 * @param value - 为 CSS 变量设置的值。它应该是一个字符串。
 * @param el - 应应用 CSS 变量的 DOM 元素。如果没有指定元素，CSS 变量将默认应用于文档主体。
 */
function dom_set_css_var(varName: string, value: string, el = document.body) {
    if (typeof varName !== 'string') {
        throw_type_error('string', 'propName')
    }
    if (typeof value !== 'string') {
        throw_type_error('string', 'value')
    }
    if (!is_element(el)) {
        throw_type_error('DOM element', 'el')
    }

    el.style.setProperty(str_ensure_prefix(varName, '--'), value)
}

export {
    dom_get_el,
    dom_get_css,
    dom_set_css,
    dom_set_css_var,
    dom_get_size,
}
