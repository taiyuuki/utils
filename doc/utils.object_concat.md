<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [object\_concat](./utils.object_concat.md)

## object\_concat() function

The function `object_concat` takes two objects of type `T` and `S` and returns a new object of type `T & S`<!-- -->.

**Signature:**

```typescript
declare function object_concat<T extends object, S extends object>(target: T, source: S): T & S;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  target | T | The first parameter <code>target</code> is an object of type <code>T</code> which is a generic type that extends the <code>object</code> type. This means that <code>target</code> can be any object that has properties and methods. |
|  source | S | The second parameter <code>source</code> is an object of type <code>S</code> which is a generic type that extends the <code>object</code> type. This means that <code>source</code> can be any object that has properties and methods. |

**Returns:**

T &amp; S

The function `object_concat` returns an object of type `T & S`<!-- -->.
