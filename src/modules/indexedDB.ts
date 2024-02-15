/**
 * 这是一个类，用于简单创建和访问 IndexedDB 数据库中的储存对象。
 * @beta
 * 每一个 DB 实例都只对应一个存储对象（object store）。
 */
class DB<T = any> {
    private _dataFactory = window.indexedDB
    private _dbName: string
    private _storeName: string
    private _database!: IDBDatabase
    private _res: IDBRequest

    /**
     * 这是 IndexedDB 数据库的构造函数，用于创建对象存储。
     * @param dbName - 将创建或访问的 IndexedDB 数据库的名称。
     * @param storeName - 将在 IndexedDB 数据库中创建或访问的存储对象的名称。
     * @param version - 存储对象的版本。
     * @returns DB类的实例
     */
    constructor(dbName: string, storeName: string, version?: number) {
        this._dataFactory = window.indexedDB
        this._dbName = dbName
        this._storeName = storeName
        this._res = this._dataFactory.open(this._dbName, version)

        this._res.addEventListener('success', () => {
            this._database = this._res.result
            if (!this._database.objectStoreNames.contains(this._storeName)) {
                this._database.createObjectStore(this._storeName, { keyPath: 'id' })
            }
        })
        this._res.addEventListener('error', () => {
            console.error('indexedDB load error')
        })
        this._res.addEventListener('upgradeneeded', () => {
            this._database = this._res.result
            if (!this._database.objectStoreNames.contains(this._storeName)) {
                this._database.createObjectStore(this._storeName, { keyPath: 'id' })
            }
        })
    }

    private get _store() {
        return this._database.transaction([this._storeName], 'readwrite').objectStore(this._storeName)
    }

    /**
     * 将对象存储中的数据写入 IndexedDB 数据库。
     * @param id - 数据的唯一标识。
     * @param data - 数据。
     */
    set_item(id: string, data: T) {
        this._store.put({ id, data })
    }

    /**
     * 从对象存储中读取数据。
     * @param id - 数据的唯一标识。
     * @returns 数据，它是一个Promise。
     *
     */
    get_item(id: string): Promise<T> {
        const res = this._store.get(id)
        return new Promise((resolve, reject) => {
            res.addEventListener('success', () => {
                resolve(res.result.data)
            })
            res.addEventListener('error', reject)
        })
    }

    /**
     * 从对象存储中删除数据。
     * @param id - 数据的唯一标识。
     */
    remove_item(id: string) {
        this._store.delete(id)
    }

    /**
     * 清空对象存储中的所有数据。
     */
    clear() {
        this._store.clear()
    }
}

export {
    DB,
}
