<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [storage\_set](./utils.storage_set.md)

## storage\_set() function

The function stores a value of any type in the browser's local storage using a specified key.

**Signature:**

```typescript
declare function storage_set<T>(key: string, value: T): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  key | string | a string representing the key under which the value will be stored in the localStorage object. |
|  value | T | The value to be stored in the local storage. It can be of any data type, as the function is using generics to handle different types of values. |

**Returns:**

void
