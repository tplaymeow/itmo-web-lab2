class StorageService {
    constructor(storage) {
        this._storage = storage;
    }

    static get instanceWithSessionStorage() {
        return new StorageService(sessionStorage);
    }

    save(key, data) {
        this._storage.setItem(
            key,
            JSON.stringify(data)
        );
    }

    fetch(key) {
        let jsonData = this._storage.getItem(key);
        return JSON.parse(jsonData);
    }
}