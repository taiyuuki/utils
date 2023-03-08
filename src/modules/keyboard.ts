import type { KeyboardEventType, KeyboardEventOptions } from '../types'
import { keyIn } from './obj'

/**
 * 给document绑定键盘事件，可以给每一个按键绑定不同的方法。
 * @public
 * @param type - 事件类型
 * @param eventsOptions - 配置对象
 * @returns 控制事件的对象
 * @example
 * ```ts
 * // 绑定事件
 * const ctrl = addKeyboardEvents('keydown', {
 *  KeyW(){
 *    console.log('按下了W键')
 *  },
 *  Enter(){
 *    console.log('按下了回车键')
 *  }
 * })
 * // 手动触发W键
 * ctrl.emit('KeyW')
 * // 临时关闭事件，可以再开启。
 * ctrl.off()
 * // 重新开启事件。
 * ctrl.on()
 * // 解除事件绑定，无法再开启。
 * ctrl.close()
 * ```
 */
export function addKeyboardEvents<T extends KeyboardEventOptions>(type: KeyboardEventType, eventsOptions: T) {
  let valid = true
  function emit(code: keyof typeof eventsOptions) {
    if (keyIn(code, eventsOptions)) {
      eventsOptions[code]()
    }
  }
  function handler(e: KeyboardEvent) {
    if (e.isComposing && !valid) {
      return
    }
    const code = e.code
    emit(code)
  }
  document.addEventListener(type, handler)
  return {
    /**
     * 取消事件绑定，无法再开启。
     */
    close() {
      document.removeEventListener(type, handler)
    },
    /**
     * 临时关闭事件，可以再开启。
     */
    off() {
      valid = false
    },
    /**
     * 取消事件绑定，无法再开启。
     */
    on() {
      valid = true
    },
    /**
     * 手动触发按键事件，即使已经取消了绑定，也能触发。
     * @param code - Keyboard.code
     */
    emit,
  }
}