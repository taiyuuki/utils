<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [str\_no\_suffix](./utils.str_no_suffix.md)

## str\_no\_suffix() function

该函数从字符串中删除给定的后缀（如果存在）。

**Signature:**

```typescript
declare function str_no_suffix(s: string, suffix: string): string
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

可能以指定后缀结尾的字符串。


</td></tr>
<tr><td>

suffix


</td><td>

string


</td><td>

“后缀”参数是一个字符串，表示我们要删除的输入字符串“s”的结尾字符。


</td></tr>
</tbody></table>
**Returns:**

string

函数 str\_no\_suffix 返回一个字符串。如果输入字符串 s 以输入后缀 suffix 结尾，则该函数返回 s 的不包括后缀的子字符串。否则，该函数返回原始字符串 s。

