/**
 * 获取指定长度随机字符
 * @category string
 * @count 长度
 * @digit 进制 0-36
 * @example
 * ```ts
 * const str = strRandom(6, 16)// 获取取长度为6的随机16进制字符
 * ```
 */
function strRandom(count, digit = 16) {
    digit = digit > 36 ? 36 : digit;
    let result = '';
    for (let i = 1; i <= count; i++) {
        result += Math.floor(Math.random() * digit).toString(digit);
    }
    return result;
}
/**
 * 生成UUID
 * @category string
 */
function strUuid() {
    let uuid = '';
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
        uuid = crypto.randomUUID();
    }
    else if (typeof Blob == 'undefined') {
        uuid = `${strRandom(8)}-${strRandom(4)}-${strRandom(4)}-${strRandom(4)}-${strRandom(12)}`;
    }
    else {
        const url_uuid = URL.createObjectURL(new Blob());
        uuid = url_uuid.toString().substring(url_uuid.lastIndexOf('/') + 1);
        URL.revokeObjectURL(url_uuid);
    }
    return uuid;
}

export { strRandom, strUuid };
