<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [arr\_to\_obj](./utils.arr_to_obj.md)

## arr\_to\_obj() function

The function converts an array of strings and numbers into an object with boolean values.

**Signature:**

```typescript
declare function arr_to_obj<T extends Array<string | number>, V = boolean>(arr: T, v?: V): TupleToObject<T, V>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arr | T | An array of strings or numbers that will be used as keys in the resulting object. |
|  v | V | _(Optional)_ The parameter "v" is an optional parameter with a default value of boolean type. It is used to set the value of each key in the resulting object. If "v" is not provided, the default value of "true" will be used. |

**Returns:**

TupleToObject&lt;T, V&gt;

The function `arr_to_obj` returns an object with keys from the input array `arr` and values set to `v` if provided, otherwise `true`<!-- -->. The type of the returned object is determined by the generic type parameters `T` and `V`<!-- -->. The function returns an object of type `TupleToObject<T, V>`<!-- -->.
