import type  { CSSStyleName } from '../types'
import { isElement, isWindow } from './is'
import { strEnsurePrefix } from './string'

/**
 * 获取dom元素
 * @public
 * @param selector - 选择器
 * @returns DOM元素
 */
export function domGetEl(selector: string) {
  if (selector === void 0 || selector === null) {
    return void 0
  }

  if (typeof selector === 'string') {
    try {
      return document.querySelector(selector) || void 0
    }
    catch (err) {
      return void 0
    }
  }
}

/**
 * 获取dom元素的CSS属性
 * @public
 * @param el - DOM元素
 * @param prop - 指定CSS属性名
 * @returns 指定元素的指定CSS值
 */
export function domGetCSS<T extends Element>(el: T, prop: CSSStyleName) {
  return window.getComputedStyle(el).getPropertyValue(prop)
}

/**
 * 给dom元素设置CSS属性
 * @public
 * @param el - DOM元素
 * @param css - 包含CSS属性的对象
 */
export function domSetCSS(el: HTMLElement, css: Partial<CSSStyleDeclaration>) {
  const style = el.style
  for (const prop in css) {
    style[prop] = css[prop] ?? style[prop]
  }
}

/**
 * 获取dom尺寸
 * @public
 * @param el - DOM元素
 * @returns 一个包含width、height属性的对象
 */
export function domGetSize(el: Element | Window) {
  if (isWindow(el)) {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }
  else if (isElement(el)) {
    const elSize = el.getBoundingClientRect()
    return {
      width: elSize.width,
      height: elSize.height,
    }
  }
  else {
    throw new TypeError('Expected a DOM element or window.')
  }
}

/**
 * 给DOM元素添加CSS变量
 * @public
 * @param varName - CSS变量名 不需要--前缀
 * @param value - CSS变量值
 */
export function domSetCssVar(varName: string, value: string, el = document.body) {
  if (typeof varName !== 'string') {
    throw new TypeError('Expected a string as propName')
  }
  if (typeof value !== 'string') {
    throw new TypeError('Expected a string as value')
  }
  if (!isElement(el)) {
    throw new TypeError('Expected a DOM element')
  }

  el.style.setProperty(strEnsurePrefix(varName, '--'), value)
}