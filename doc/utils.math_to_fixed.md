<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [math\_to\_fixed](./utils.math_to_fixed.md)

## math\_to\_fixed() function

The function returns a number rounded to a specified number of decimal places.

**Signature:**

```typescript
declare function math_to_fixed(n: number, digit?: number): number;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  n | number | a number that needs to be rounded to a certain number of decimal places. |
|  digit | number | _(Optional)_ The number of digits after the decimal point to which the given number should be rounded. If no value is provided for digit, it defaults to 0, which means the number will be rounded to the nearest integer. |

**Returns:**

number

The function `math_to_fixed` is returning a number that has been rounded to a specified number of digits after the decimal point. The number of digits after the decimal point is determined by the `digit` parameter, which defaults to 0 if not provided.
