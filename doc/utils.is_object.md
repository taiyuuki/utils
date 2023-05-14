<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [is\_object](./utils.is_object.md)

## is\_object() function

The function checks if a given value is an object and not an array.

**Signature:**

```typescript
declare function is_object(o: any): o is Exclude<Object, Array<any>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  o | any | any type, which means it can be any data type including objects, arrays, strings, numbers, etc. |

**Returns:**

o is Exclude&lt;Object, Array&lt;any&gt;&gt;

a boolean value indicating whether the input parameter `o` is an object or not. The return type of the function is `o is Exclude<Object, Array<any>>`<!-- -->, which is a type predicate indicating that `o` is of type `Object` but not of type `Array<any>`<!-- -->.
