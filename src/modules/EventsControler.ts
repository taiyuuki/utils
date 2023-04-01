import type { FnNoArgs } from 'src/types'

interface EventItem {
  target: EventTarget
  type: string
  callback: FnNoArgs
}

/**
 * 用于管理多个DOM事件，适用于组件销毁时，注销组件内绑定的所有事件。
 * @beta
 * @example
 * ```ts
 * const evtCtrl = new EventControler()
 * // 绑定事件
 * evtCtrl.addEvt(el1, 'click', callback1)
 * evtCtrl.addEvt(el2, 'keypress', callback2)
 * // 解除所有绑定
 * evtCtrl.close()
 * ```
 */
export class EventsControler {
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
  addEvt<T extends EventTarget>(target: T, type: Parameters<T['addEventListener']>[0], callback: FnNoArgs) {
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