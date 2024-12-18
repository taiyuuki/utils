<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [image\_get\_type](./utils.image_get_type.md)

## image\_get\_type() function

该函数根据文件扩展名返回图像文件的 MIME 类型。

**Signature:**

```typescript
declare function image_get_type(filename: string): 'image/bmp' | 'image/gif' | 'image/jpeg' | 'image/png' | 'image/svg+xml' | 'image/tiff' | 'image/webp' | 'image/x-icon'
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

filename


</td><td>

string


</td><td>

表示图像文件名称的字符串，包括其扩展名。


</td></tr>
</tbody></table>
**Returns:**

"image/png" \| "image/jpeg" \| "image/gif" \| "image/webp" \| "image/bmp" \| "image/svg+xml" \| "image/x-icon" \| "image/tiff"

基于文件扩展名的图像文件的 MIME 类型。如果无法识别文件扩展名，它将返回默认的 MIME 类型。

