interface EventItem {
  target: EventTarget
  type: string
  callback: EventListenerOrEventListenerObject
}

/**
 * 管理多个事件，在需要解除事件时，不再需要一个一个的解除，只需clear()即可。
 */
export class EventsControler {
  private _events: EventItem[]
  constructor() {
    this._events = []
  }

  addEvt(target: EventTarget, type: string, callback: EventListenerOrEventListenerObject) {
    this._events.push({
      target,
      type,
      callback,
    })
    target.addEventListener(type, callback)
    return this
  }

  clear() {
    this._events.forEach(item => {
      item.target.removeEventListener(item.type, item.callback)
    })
    this._events.length = 0
  }
}