interface EventItem {
  target: EventTarget
  type: string
  callback: EventListenerOrEventListenerObject
}

/**
 * 管理多个事件，在需要解除事件时，不再需要一个一个的解除，只需clear()即可。
 * @alpha
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
  addEvt(target: EventTarget, type: string, callback: EventListenerOrEventListenerObject) {
    this._events.push({
      target,
      type,
      callback,
    })
    target.addEventListener(type, callback)
    return this
  }

  /**
   * 解除所有事件的绑定
   */
  clear() {
    this._events.forEach(item => {
      item.target.removeEventListener(item.type, item.callback)
    })
    this._events.length = 0
  }
}