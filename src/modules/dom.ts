import type  { CSSStyleName } from '../types'
import { isElement, isWindow } from './is'

/**
 * 获取dom元素
 * @kind dom
 */
export function domGetEl(el: string) {
  if (el === void 0 || el === null) {
    return void 0
  }

  if (typeof el === 'string') {
    try {
      return document.querySelector(el) || void 0
    }
    catch (err) {
      return void 0
    }
  }
}

/**
 * 获取dom元素的CSS属性
 * @kind dom
 * @param el
 * @param prop 属性名
 */
export function domGetCSS<T extends Element>(el: T, prop: CSSStyleName) {
  return window.getComputedStyle(el).getPropertyValue(prop)
}

/**
 * 给dom元素设置CSS属性
 * @kind dom
 * @param el
 * @param CSS 包含CSS属性的对象
 */
export function domSetCSS(el: HTMLElement, CSS: Partial<CSSStyleDeclaration>) {
  const style = el.style
  for (const prop in CSS) {
    style[prop] = CSS[prop] ?? style[prop]
  }
}

/**
 * 获取dom尺寸
 * @kind dom
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
 * @kind
 * @varName 变量名 不需要--
 * @value 变量值
 */
export default function domSetCssVar(varName: string, value: string, el = document.body) {
  if (typeof varName !== 'string') {
    throw new TypeError('Expected a string as propName')
  }
  if (typeof value !== 'string') {
    throw new TypeError('Expected a string as value')
  }
  if (!isElement(el)) {
    throw new TypeError('Expected a DOM element')
  }

  el.style.setProperty(`--${ varName }`, value)
}