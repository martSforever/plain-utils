const store = require('store')

class StorageService {

    store = store
    storageKey
    storage

    constructor(storageKey = 'plain') {
        this.storageKey = storageKey || 'plain'
        this.storage = this.store.get(this.storageKey) || {}
    }

    get(key) {
        return this.storage[key]
    }

    set(key, val) {
        this.storage[key] = val
        this.store.set(this.storageKey, this.storage)
    }
}

export default StorageService