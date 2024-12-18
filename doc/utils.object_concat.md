<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [object\_concat](./utils.object_concat.md)

## object\_concat() function

函数 object\_concat 连接两个通用类型的对象并返回连接后的对象。

**Signature:**

```typescript
declare function object_concat<T extends object, S extends object>(target: T, source: S): Concat<T, S>
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

target


</td><td>

T


</td><td>

第一个参数表示将通过添加来自第二个参数“源”的属性来修改的对象。


</td></tr>
<tr><td>

source


</td><td>

S


</td><td>

表示将合并到“目标”对象中的对象。


</td></tr>
</tbody></table>
**Returns:**

Concat&lt;T, S&gt;

`object_concat` 函数返回 `Object.assign(target, source)` 的结果，这是一个合并了 `target` 和 `source` 对象属性的新对象。返回类型为“T”和“S”对象类型串联的类型。

