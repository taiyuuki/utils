<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [debounce](./utils.debounce.md)

## debounce() function

为给定函数实现去抖动功能。

**Signature:**

```typescript
declare function debounce<T extends Fn>(func: T, timeFrame: number): T
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

func


</td><td>

T


</td><td>

需要去抖动的函数


</td></tr>
<tr><td>

timeFrame


</td><td>

number


</td><td>

时间间隔


</td></tr>
</tbody></table>
**Returns:**

T

去抖动后的函数

