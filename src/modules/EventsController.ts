import type { FnNoArgs } from '../types'

interface EventItem {
    type: string
    callback: FnNoArgs
}

/**
 * DOM Event Controller
 * @beta
 * @example
 * ```ts
 * const evt_ctrl = new EventsController(el)
 * evt_ctrl.add_evt('click', callback1)
 * evt_ctrl.add_evt('keypress', callback2)
 * evt_ctrl.remove_all()
 * ```
 */
export class EventsController<T extends EventTarget> {
    private _events: EventItem[]
    private _target: T
    /**
     *
     * @param target 绑定对象，例如DOM，每一个实例只维护一个对象
     */
    constructor(target: T) {
        this._target = target
        this._events = []
    }

    /**
     * 绑定事件
     * @param type - 事件类型
     * @param callback - 回调
     */
    add_evt<T extends EventTarget>(type: Parameters<T['addEventListener']>[0], callback: FnNoArgs) {
        this._events.push({
            type,
            callback,
        })
        this._target.addEventListener(type, callback)
        return this
    }

    /**
     * 解除所有绑定的事件
     */
    remove_all() {
        this._events.forEach((item) => {
            this._target.removeEventListener(item.type, item.callback)
        })
        this._events.length = 0
    }
}
