<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [objectPick](./utils.objectpick.md)

## objectPick() function

提取对象中部分属性

**Signature:**

```typescript
declare function objectPick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  obj | T | 对象 |
|  keys | K\[\] | 属性构成的数组 |

**Returns:**

Pick&lt;T, K&gt;

提取属性后的对象
