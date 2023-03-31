type UnionToCross<T> = (T extends T ? (s: () => T) => void : never) extends (
  s: infer R
) => void
  ? R
  : never

type GetCrossLast<T> = T extends () => infer R ? R : never

export type UnionToTuple<T, Result extends Array<string> = []>
  = [T] extends [never]
    ? Result
    : [
        ...UnionToTuple<Exclude<T, GetCrossLast<UnionToCross<T>>>>,
        GetCrossLast<UnionToCross<T>>,
      ]

export type Fn = (...args: any[]) => any

export type FnNoArgs = () => any

export type ObjectKey = string | number | symbol

export type TupleToUnion<Tuple extends Array<unknown>> = Tuple[number]

export type TupleToObject<T extends ObjectKey[], V = boolean> = {
  [k in TupleToUnion<T>]: V
}

export type Keys<T extends object> = UnionToTuple<keyof T>

export type Entries<T extends object, K extends keyof T = keyof T> = [K, T[K]][]

export type RgbColor = [number, number, number, number?]

export type Color = string | RgbColor

export type CSSStyleName<T = keyof CSSStyleDeclaration> = T extends string ? T : never

export type KeyboardEventType = 'keydown' | 'keypress' | 'keyup'

export type KeyboardEventCallback = () => any

export type KeyboardEventObject = Record<KeyboardEvent['code'], KeyboardEventCallback>

export type KeyboardEventOptions = KeyboardEventObject | (() => KeyboardEventObject)

export type KeyboardEventKeys<T> = T extends Fn ? keyof ReturnType<T> : keyof T