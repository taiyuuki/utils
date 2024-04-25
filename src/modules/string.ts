import { math_between } from './math'

/**
 * 该函数接受一个数字或字符串并将其作为字符串返回。
 * @public
 * @param target - 参数“目标”可以是数字或字符串。
 * @returns 输入参数的字符串表示形式，无论是数字还是字符串。
 */
function str_maybe_number(target: number | string) {
    return target.toString()
}

/**
 * 该函数生成指定长度和基数的随机字符串。
 * @public
 * @param count - 将生成的随机字符串中的字符数。
 * @param radix - Radix 是指用于随机字符串生成的基数系统。默认值为 16，这意味着字符串将使用十六进制数字（0-9 和 A-F）生成。但是，可以将基数设置为 2 到 36
 * 之间的任何值以使用
 * @returns 具有指定长度和基数（基数）的随机生成的字符串。 radix 是可选的，如果未提供则默认为 16。
 */
function str_random(count: number, radix = 16) {
    radix = math_between(radix, 2, 36)
    let result = ''
    for (let i = 1; i <= count; i++) {
        result += Math.floor(Math.random() * radix).toString(radix)
    }

    return result
}

/**
 * 生成 UUID 字符串。
 * @public
 * @returns 返回表示 UUID（通用唯一标识符）的字符串。
 */
function str_uuid(): string {
    let uuid = ''
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
        uuid = crypto.randomUUID()
    } else if (typeof Blob === 'undefined') {
        uuid = `${str_random(8)}-${str_random(4)}-${str_random(4)}-${str_random(4)}-${str_random(12)}`
    } else {
        const url_uuid = URL.createObjectURL(new Blob())
        uuid = url_uuid.toString().substring(url_uuid.lastIndexOf('/') + 1)
        URL.revokeObjectURL(url_uuid)
    }

    return uuid
}

/**
 * 该函数确保给定的字符串具有指定的前缀。
 * @public
 * @param s - 我们要确保的字符串具有特定的前缀。
 * @param prefix - prefix
 * 参数是一个字符串，我们要确保它位于输入字符串的开头。如果输入字符串已经以前缀开头，则函数按原样返回输入字符串。否则，该函数将前缀添加到输入字符串的开头并返回结果字符串
 * @returns
 * 函数“str_ensure_prefix”返回一个字符串。如果输入字符串“s”以“prefix”字符串开头，则该函数按原样返回“s”。否则，它返回一个新字符串，它是“prefix”字符串和原始“s”字符串的串联。
 */
function str_ensure_prefix(s: string, prefix: string) {
    return s.startsWith(prefix) ? s : `${prefix}${s}`
}

/**
 * 该函数确保给定的字符串以指定的后缀结尾。
 * @public
 * @param s - 我们要确保以特定后缀结尾的字符串。
 * @param suffix - “suffix”参数是一个字符串，它表示需要添加到“s”字符串末尾（如果不存在）的所需后缀。
 * @returns 函数“str_ensure_suffix”返回一个字符串。具体来说，如果它已经以 `suffix` 参数结尾，它返回原始字符串 `s`，或者如果 `s` 还没有以 `suffix`
 * 结尾，它返回一个新的字符串，它是 `s` 和 `suffix` 的连接。
 */
function str_ensure_suffix(s: string, suffix: string) {
    return s.endsWith(suffix) ? s : `${s}${suffix}`
}

/**
 * 该函数从字符串中删除给定的前缀（如果存在）。
 * @public
 * @param s - 可能有也可能没有需要删除的前缀的字符串。
 * @param prefix - prefix 参数是一个字符串，表示我们要从输入字符串的开头删除的前缀。
 * @returns 函数 str_no_prefix 返回一个字符串。如果输入字符串 s 以输入前缀 prefix 结尾，该函数返回 s 的不包括前缀的子字符串。否则，该函数返回原始字符串 s。
 */
function str_no_prefix(s: string, prefix: string) {
    return s.startsWith(prefix) ? s.substring(prefix.length) : s
}

/**
 * 该函数从字符串中删除给定的后缀（如果存在）。
 * @public
 * @param s - 可能以指定后缀结尾的字符串。
 * @param suffix - “后缀”参数是一个字符串，表示我们要删除的输入字符串“s”的结尾字符。
 * @returns 函数 str_no_suffix 返回一个字符串。如果输入字符串 s 以输入后缀 suffix 结尾，则该函数返回 s 的不包括后缀的子字符串。否则，该函数返回原始字符串 s。
 */
function str_no_suffix(s: string, suffix: string) {
    return s.endsWith(suffix) ? s.substring(0, s.length - suffix.length) : s
}

/**
 * 该函数将给定字符串的第一个字母大写。
 * @public
 * @param str - 参数“str”是一个字符串输入，表示需要大写的文本。
 * @returns 函数 `str_capital` 返回一个新字符串，第一个字符大写，其余字符不变。
 */
function str_capital(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 该函数将给定字符串中每个单词的首字母大写。
 * @public
 * @param str - 包含一个或多个由空格分隔的单词的字符串。
 * @returns 函数 str_capital_all 返回一个新字符串，其中输入字符串中的所有单词都大写。
 */
function str_capital_all(str: string) {
    return str.split(' ').map(str_capital)
        .join(' ')
}

/**
 * 该函数将前导零添加到数字或字符串中以使其具有特定长度。
 * @public
 * @deprecated 已废弃，建议使用 padStart 或 padEnd。
 * @param n - 需要用前导字符格式化的输入数字或字符串。
 * @param len - 结果字符串的长度。如果输入字符串的长度小于 len，该函数将在字符串的开头添加字符，直到达到所需的长度。
 * @param char - 用于填充字符串的字符。如果未提供任何字符，则使用“0”作为默认值。
 * @returns 函数 `str_complement` 返回一个字符串，该字符串可以是原始输入 `n` 转换为字符串，也可以是长度为 `len` 的字符串，字符 `char`
 * 根据需要重复多次以填充剩余空间，然后是原始输入 `n` 转换为字符串。
 */
function str_complement(n: number | string, len = 2, char = '0') {
    n = `${n}`

    return n.length >= len ? n : Array.from({ length: len - n.length + 1 }).join(char) + n
}

/**
 * 函数从输入字符串中删除所有非中文字符。
 * @public
 * @param str - 输入字符串
 * @returns 返回一个排除了非中文字符的新字符串，中文字符的判定范围`\u4e00-\u9fa5`。
 */
function str_ensure_chinese(str: string) {
    return str.replace(/[^\u4E00-\u9FA5]/g, '')
}

export {
    str_maybe_number,
    str_random,
    str_uuid,
    str_ensure_prefix,
    str_ensure_suffix,
    str_no_prefix,
    str_no_suffix,
    str_capital,
    str_capital_all,
    str_complement,
    str_ensure_chinese,
}
