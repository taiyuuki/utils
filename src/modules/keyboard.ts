import type { KeyboardEventType, KeyboardEventOptions, KeyboardEventKeys, KeyboardEventCallback } from '../types'
import { keyIn } from './obj'

function resolveOptions<T extends KeyboardEventOptions>(options: T) {
  return typeof options === 'function' ? options() : options
}

/**
 * 给document绑定键盘事件，可以给每一个按键绑定不同的方法。
 * @public
 * @param type - 事件类型
 * @param eventsOptions - 配置对象，可以是函数。
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
  const events = resolveOptions(eventsOptions) as Record<KeyboardEventKeys<T>, KeyboardEventCallback>
  function emit(code: keyof typeof events) {
    if (keyIn(code, events)) {
      events[code]()
    }
  }
  function handler(e: KeyboardEvent) {
    valid && !e.isComposing && emit(e.code as KeyboardEventKeys<T>)
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
     * 重新开启事件。
     */
    on() {
      valid = true
    },
    /**
     * 手动触发按键事件，即使已经取消了绑定，也能触发。
     * @param code - KeyboardEvent.code
     */
    emit,
  }
}