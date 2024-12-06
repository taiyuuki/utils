import type { KeyboardEventCallback, KeyboardEventKeys, KeyboardEventOptions, KeyboardEventType } from '../types'
import { is_fn } from './is'
import { key_in } from './obj'

function resolve_options<T extends KeyboardEventOptions>(options: T) {
    return is_fn(options) ? options() : options
}

/**
 * 该函数添加带有选项的键盘事件，并提供关闭、关闭/打开和手动触发事件的方法。
 * @public
 * @param type - 要侦听的键盘事件类型，例如“keydown”、“keyup”或“keypress”。
 * @param eventsOptions - `eventsOptions` 参数是一个对象，其中包含要添加的键盘事件的选项。它可以包括
 * `ctrlKey`、`altKey`、`shiftKey`、`metaKey`、`code`、`key`、`keyCode`、`charCode` 等属性。这些选项是
 * @returns 函数 add_keyboard_events 返回一个具有四种方法的对象：close、off、on 和 emit。
 * @example
 * ```ts
 * // 绑定事件
 * const ctrl = add_keyboard_events('keydown', {
 *  KeyW(){
 *    console.log('w')
 *  },
 *  Enter(){
 *    console.log('enter')
 *  }
 * })
 * // 手动触发事件
 * ctrl.emit('KeyW')
 * // 关闭事件
 * ctrl.off()
 * // 重新开启事件。
 * ctrl.on()
 * // 解除事件绑定，无法再开启。
 * ctrl.close()
 * ```
 */
function add_keyboard_events<T extends KeyboardEventOptions>(type: KeyboardEventType, eventsOptions: T) {
    let valid = true
    const events = resolve_options(eventsOptions) as Record<KeyboardEventKeys<T>, KeyboardEventCallback>
    function emit(code: keyof typeof events) {
        if (key_in(code, events)) {
            events[code]()
        }
    }
    function handler(e: KeyboardEvent) {
        if(valid && !e.isComposing) {
            emit(e.code as KeyboardEventKeys<T>)
        }
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

export { add_keyboard_events }
