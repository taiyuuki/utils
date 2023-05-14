import type  { CSSStyleName } from '../types'
import { throw_type_error } from './error'
import { is_element, is_void, is_window } from './is'
import { str_ensure_prefix } from './string'

/**
 * The function returns a DOM element selected by a given selector string or undefined if the selector
 * is invalid or the element is not found.
 * @public
 * @param selector - A string representing a CSS selector used to select an element in the
 * DOM.
 * @returns This function returns either the DOM element that matches the given selector or `undefined`
 * if the selector is invalid or no element is found.
 */
function dom_get_el(selector: string) {
    if (is_void(selector) || typeof selector !== 'string') {
        return void 0
    }
    try {
        return document.querySelector(selector) || void 0
    }
    catch (err) {
        return void 0
    }
}

/**
 * The function returns the value of a specified CSS property for a given DOM element.
 * @public
 * @param el - The DOM element for which we want to get the computed CSS property value.
 * @param prop - prop is a string representing the name of the CSS property whose value
 * is to be retrieved from the computed style of the given element. Examples of CSS properties include
 * "color", "font-size", "background-image", etc.
 * @returns The function `dom_getc_ss` returns the value of the specified CSS property (`prop`) for the
 * given DOM element (`el`). The value is obtained using the `window.getComputedStyle` method and
 * returned as a string.
 */
function dom_get_css<T extends Element>(el: T, prop: CSSStyleName) {
    return window.getComputedStyle(el).getPropertyValue(prop)
}

/**
 * The function sets CSS styles on a given HTML element.
 * @public
 * @param el - HTMLElement - a reference to the HTML element that you want to apply the
 * CSS styles to.
 * @param css - The `css` parameter is an object that contains a partial CSSStyleDeclaration. It is
 * used to set the CSS properties of an HTMLElement. The properties of the `css` object are the CSS
 * property names, and their values are the corresponding CSS property values.
 */
function dom_set_css(el: HTMLElement, css: Partial<CSSStyleDeclaration>) {
    const style = el.style
    for (const prop in css) {
        style[prop] = css[prop] as string
    }
}

/**
 * The function `dom_get_size` takes an element or window as input and returns its size.
 * @public
 * @param el - The `el` parameter is a reference to an HTML element or the window
 * object. It is used to determine the size of the element or the viewport.
 */
function dom_get_size(el: Element | Window) {
    if (is_window(el)) {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }
    else if (is_element(el)) {
        const elSize = el.getBoundingClientRect()
        return {
            width: elSize.width,
            height: elSize.height,
        }
    }
    else {
        throw_type_error('DOM element or window', 'el')
    }
}

/**
 * This function sets a CSS variable with a given name and value on a specified element or the document
 * body.
 * @public
 * @param varName - A string representing the name of the CSS variable to be set.
 * @param value - The value parameter is a string that represents the new value for the CSS
 * variable being set.
 * @param el - The `el` parameter is an optional parameter that specifies the element to which the CSS
 * variable should be applied. If no element is specified, the CSS variable will be applied to the
 * `document.body` element by default.
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
