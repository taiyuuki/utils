<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [str\_no\_prefix](./utils.str_no_prefix.md)

## str\_no\_prefix() function

该函数从字符串中删除给定的前缀（如果存在）。

**Signature:**

```typescript
declare function str_no_prefix(s: string, prefix: string): string
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

s


</td><td>

string


</td><td>

可能有也可能没有需要删除的前缀的字符串。


</td></tr>
<tr><td>

prefix


</td><td>

string


</td><td>

prefix 参数是一个字符串，表示我们要从输入字符串的开头删除的前缀。


</td></tr>
</tbody></table>
**Returns:**

string

函数 str\_no\_prefix 返回一个字符串。如果输入字符串 s 以输入前缀 prefix 结尾，该函数返回 s 的不包括前缀的子字符串。否则，该函数返回原始字符串 s。

