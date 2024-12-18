<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [rgb\_to\_hsl](./utils.rgb_to_hsl.md)

## rgb\_to\_hsl() function

该函数将 RGB 颜色值转换为其对应的 HSL 颜色值。

**Signature:**

```typescript
declare function rgb_to_hsl(rgb: RgbColor): HslColor
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

rgb


</td><td>

RgbColor


</td><td>

一个包含四个数字的数组，表示 RGB 颜色空间中颜色的红色、绿色、蓝色和 alpha 值。 RGB 分量的值应介于 0 和 255 之间，alpha 分量的值应介于 0 和 1 之间。


</td></tr>
</tbody></table>
**Returns:**

HslColor

函数 rgb\_to\_hsl 返回一个 HSL 颜色值作为数字数组。如果输入的 `rgb` 颜色有一个 alpha 值，该函数返回一个数组，其中包含四个元素，分别代表色调、饱和度、亮度和 alpha 值。如果输入的 `rgb` 颜色没有 alpha 值，该函数返回一个数组，其中包含三个代表色调的元素，

