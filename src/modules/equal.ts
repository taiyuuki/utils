import { is_object } from './is'
import { object_keys } from './obj'

/**
 * 该函数检查两个对象或数组是否相等。
 * @public
 * @param a - 函数的第一个参数，可以是任何数据类型。
 * @param b - `deep_equal` 函数的第二个参数，可以是任何数据类型。它表示与第一个参数“a”进行深度相等比较的第二个值。
 * @returns 一个布尔值，指示两个输入值是否深度相等。
 */
function deep_equal(a: any, b: any): boolean {
    if (a === b) {
        return true
    }
    if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        return false
    }
    if (is_object(a) && is_object(b)) {
        if (a.constructor !== b.constructor) {
            return false
        }
        const aKeys = object_keys(a)
        if (aKeys.length === Object.keys(b).length) {
            return aKeys.every(key => {
                return deep_equal(a[key], b[key])
            })
        }
        else {
            return false
        }
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length === b.length) {
            return a.every((_, i) => {
                return deep_equal(a[i], b[i])
            })
        }
        else {
            return false
        }
    }
    return Object.is(a, b)
}

export { deep_equal }
