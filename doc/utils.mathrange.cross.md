<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [MathRange](./utils.mathrange.md) &gt; [cross](./utils.mathrange.cross.md)

## MathRange.cross() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

获取两个区间的交集，如果不存在交集则返回null

**Signature:**

```typescript
cross(other: MathRange): MathRange | null;
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

other


</td><td>

[MathRange](./utils.mathrange.md)


</td><td>


</td></tr>
</tbody></table>
**Returns:**

[MathRange](./utils.mathrange.md) \| null

交集，结果是开区间。
