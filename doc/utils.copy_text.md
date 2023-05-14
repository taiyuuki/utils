<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [copy\_text](./utils.copy_text.md)

## copy\_text() function

The function copies text to the clipboard using the Clipboard API if available, otherwise it falls back to creating a temporary textarea element and using the execCommand method.

**Signature:**

```typescript
declare function copy_text(target: string | number | HTMLElement, addition?: string): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  target | string \| number \| HTMLElement | The target can be a string, number, or HTMLElement that contains the text to be copied. |
|  addition | string | _(Optional)_ Optional string parameter that can be added to the end of the text to be copied. If not provided, the copied text will be the same as the target. |

**Returns:**

void
