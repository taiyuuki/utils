import type { KeyboardEventType, KeyboardEventOptions, KeyboardEventKeys, KeyboardEventCallback } from '../types'
import { key_in } from './obj'

function resolve_options<T extends KeyboardEventOptions>(options: T) {
    return typeof options === 'function' ? options() : options
}

/**
 * This function adds keyboard events with specified options.
 * @public
 * @param type - KeyboardEventType is a type alias that represents the different
 * types of keyboard events that can be listened to, such as "keydown", "keyup", or "keypress".
 * @param eventsOptions - `eventsOptions` is a generic type parameter that extends
 * `KeyboardEventOptions`. It is used to specify additional options for the keyboard event listener,
 * such as whether the event should be captured or not.
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
 * ctrl.emit('KeyW')
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

export { add_keyboard_events }
