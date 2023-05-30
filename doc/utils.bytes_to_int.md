<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [bytes\_to\_int](./utils.bytes_to_int.md)

## bytes\_to\_int() function

The function converts an array of four bytes into a single integer value.

**Signature:**

```typescript
declare function bytes_to_int(bytes: [number, number, number, number]): number;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  bytes | \[number, number, number, number\] | The parameter <code>bytes</code> is an array of four numbers representing a 32-bit integer in big-endian byte order. The function <code>bytes_to_int</code> converts this byte array into a single integer value. |

**Returns:**

number

The function `bytes_to_int` is returning an integer value that is obtained by concatenating the four bytes in the input array `bytes` in big-endian order.

## Example


```
bytes_to_int([0x78, 0x56, 0x34, 0x12]) // 0x12345678
```
