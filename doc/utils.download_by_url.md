<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [download\_by\_url](./utils.download_by_url.md)

## download\_by\_url() function

此函数使用可选文件名从给定的 URL 下载文件。

**Signature:**

```typescript
declare function download_by_url(URL: string, fileName?: string): void
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

URL


</td><td>

string


</td><td>

URL参数是一个字符串，表示需要下载的文件的URL。


</td></tr>
<tr><td>

fileName


</td><td>

string


</td><td>

_(Optional)_ fileName 参数是一个字符串，指定要下载的文件的名称。如果没有为 fileName 提供值，该函数将生成一个随机 UUID 字符串作为文件名。


</td></tr>
</tbody></table>
**Returns:**

void

