/**
 * 给定一个数字，返回一个保持位于两数之间的数
 * @param v 给定数字
 * @param min 下限
 * @param max 上限
 */
function keepBetween(v, min, max) {
    if (min >= max) {
        [min, max] = [max, min];
    }
    return Math.min(max, Math.max(min, v));
}

export { keepBetween };
