<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [url\_to\_date\_URI](./utils.url_to_date_uri.md)

## url\_to\_date\_URI() function

此函数将 URL 转换为图像的数据 URI。

**Signature:**

```typescript
declare function url_to_date_URI(url: string, type?: string): Promise<string>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  url | string | 需要转换为数据 URI 的图像的URL。 |
|  type | string | _(Optional)_ 可选参数“type”是一个字符串，指定数据 URI 的图像格式。如果未提供，则默认值为“image/png”。其他可能的值包括“image/jpeg”和“image/webp”。 |

**Returns:**

Promise&lt;string&gt;

解析为表示从提供的 URL 加载的图像的数据 URI 的字符串的 Promise。

