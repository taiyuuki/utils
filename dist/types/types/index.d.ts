type UnionToCross<T> = (T extends T ? (s: () => T) => void : never) extends (s: infer R) => void ? R : never;
type GetCrossLast<T> = T extends () => infer R ? R : never;
type UnionToTuple<T, Result extends Array<string> = []> = [T] extends [never] ? Result : [
    ...UnionToTuple<Exclude<T, GetCrossLast<UnionToCross<T>>>>,
    GetCrossLast<UnionToCross<T>>
];

export { UnionToTuple };
