type UnionToCross<T> = (T extends T ? (s: () => T) => void : never) extends (
  s: infer R
) => void
  ? R
  : never

type GetCrossLast<T> = T extends () => infer R ? R : never

export type UnionToTuple<T, Result extends Array<string> = []> = [T] extends [never]
  ? Result
  : [
      ...UnionToTuple<Exclude<T, GetCrossLast<UnionToCross<T>>>>,
      GetCrossLast<UnionToCross<T>>,
    ]

export type ObjectKey = string | number | symbol

export type TupleToUnion<Tuple extends Array<unknown>> = Tuple[number]

export type TupleToObject<T extends ObjectKey[], V = boolean> = {
  [k in TupleToUnion<T>]: V
}