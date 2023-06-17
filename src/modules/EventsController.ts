import type { FnNoArgs } from '../types'

interface EventItem {
    target: EventTarget
    type: string
    callback: FnNoArgs
}

/**
 * DOM Event Controller
 * @beta
 * @example
 * ```ts
 * const evt_ctrl = new EventsController()
 * evt_ctrl.add_evt(el1, 'click', callback1)
 * evt_ctrl.add_evt(el2, 'keypress', callback2)
 * evt_ctrl.close()
 * ```
 */
export class EventsController {
    private _events: EventItem[]
    constructor() {
        this._events = []
    }

    /**
     * 绑定事件
     * @param target - 需要绑定事件的对象，比如DOM元素
     * @param type - 事件类型
     * @param callback - 回调
     */
    add_evt<T extends EventTarget>(target: T, type: Parameters<T['addEventListener']>[0], callback: FnNoArgs) {
        this._events.push({
            target,
            type,
            callback,
        })
        target.addEventListener(type, callback)
        return this
    }

    /**
   * 解除所有绑定的事件
   */
    close() {
        this._events.forEach(item => {
            item.target.removeEventListener(item.type, item.callback)
        })
        this._events.length = 0
    }
}
