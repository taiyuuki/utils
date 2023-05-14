<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [dom\_set\_css\_var](./utils.dom_set_css_var.md)

## dom\_set\_css\_var() function

This function sets a CSS variable with a given name and value on a specified element or the document body.

**Signature:**

```typescript
declare function dom_set_css_var(varName: string, value: string, el?: HTMLElement): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  varName | string | A string representing the name of the CSS variable to be set. |
|  value | string | The value parameter is a string that represents the new value for the CSS variable being set. |
|  el | HTMLElement | _(Optional)_ The <code>el</code> parameter is an optional parameter that specifies the element to which the CSS variable should be applied. If no element is specified, the CSS variable will be applied to the <code>document.body</code> element by default. |

**Returns:**

void
