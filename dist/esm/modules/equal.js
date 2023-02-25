import { isObject } from './is.js';

function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        return false;
    }
    if (isObject(a) && isObject(b)) {
        if (a.constructor !== b.constructor) {
            return false;
        }
        const aKeys = Object.keys(a);
        if (aKeys.length === Object.keys(b).length) {
            return aKeys.every(key => {
                return deepEqual(a[key], b[key]);
            });
        }
        else {
            return false;
        }
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length === b.length) {
            return a.every((_, i) => {
                return deepEqual(a[i], b[i]);
            });
        }
        else {
            return false;
        }
    }
    return Object.is(a, b);
}

export { deepEqual };
