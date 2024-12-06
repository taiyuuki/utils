/**
 * 二维向量类
 * @beta
 */
class Vec2 {
    x: number
    y: number

    /**
     * 类 Vec2 的构造函数，用于初始化 x 和 y 坐标。
     * @param x - x坐标
     * @param y - y坐标
     */
    constructor(x: number, y?: number) {
        this.x = x
        this.y = y ?? x
    }

    /**
     * 计算两个点的点积
     * @param v - 参数“v”是一个number或“Vec2”对象。
     * @returns - 点积
     */
    dot(v: Vec2 | number) {
        if (typeof v === 'number') {
            return this.x * v + this.y * v
        }
        else {
            return this.x * v.x + this.y * v.y
        }
    }

    /**
     * 计算两个点的叉积
     * @param v - 参数“v”是一个number或“Vec2”对象。
     * @returns - 叉积
     */
    cross(v: Vec2 | number) {
        if (typeof v === 'number') {
            return this.x * v - this.y * v
        }
        else {
            return this.x * v.y - this.y * v.x
        }
    }

    /**
     * 计算两个点相加
     * @param v - 参数“v”是一个number或“Vec2”对象。
     * @returns - 相加得到的点
     */
    add(v: Vec2 | number) {
        if (typeof v === 'number') {
            return new Vec2(this.x + v, this.y + v)
        }
        else {
            return new Vec2(this.x + v.x, this.y + v.y)
        }
    }

    /**
     * 计算两个点相减
     * @param v - 参数“v”是一个number或“Vec2”对象。
     * @returns - 相减得到的点
     */
    sub(v: Vec2 | number) {
        if (typeof v === 'number') {
            return new Vec2(this.x - v, this.y - v)
        }
        else {
            return new Vec2(this.x - v.x, this.y - v.y)
        }
    }

    /**
     * 计算两个点相乘
     * @param v - 参数“v”是一个number或“Vec2”对象。
     * @returns - 相乘得到的点
     */
    mul(v: Vec2 | number) {
        if (typeof v === 'number') {
            return new Vec2(this.x * v, this.y * v)
        }
        else {
            return new Vec2(this.x * v.x, this.y * v.y)
        }
    }

    /**
     * 计算两个点相除
     * @param v - 参数“v”是一个number或“Vec2”对象。
     * @returns - 相除得到的点
     */
    div(v: Vec2 | number) {
        if (typeof v === 'number') {
            return new Vec2(this.x / v, this.y / v)
        }
        else {
            return new Vec2(this.x / v.x, this.y / v.y)
        }
    }

    /**
     * 计算这个向量在另一个向量方向上的反射（投影）
     * @param v - 参数“v”是一个“Vec2”对象。
     * @returns - 反射得到的点
     */
    reflect(v: Vec2) {
        return new Vec2(this.x - 2 * this.dot(v) * v.x, this.y - 2 * this.dot(v) * v.y)
    }
}

/**
 * 函数“point_in_polygon”使用光线投射算法确定点是否在多边形内部。
 * @public
 * @param point - 参数“point”表示具有“x”和“y”坐标的点。
 * @param polygon - “polygon”参数是表示多边形顶点的“Vec”对象数组。每个“Vec”对象都有“x”和“y”属性，指示 2D 空间中点的坐标。
 * @returns 函数“point_in_polygon”返回一个布尔值，指示点“point”是否位于由顶点数组“polygon”定义的多边形内部。
 */
function point_in_polygon<Point extends { x: number, y: number }>(point: Point, polygon: Point[]) {
    const x = point.x
    const y = point.y
    let inside = false
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const xi = polygon[i].x
        const yi = polygon[i].y
        const xj = polygon[j].x
        const yj = polygon[j].y
        const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi
        if (intersect) {
            inside = !inside
        }
    }

    return inside
}

export { Vec2, point_in_polygon }
