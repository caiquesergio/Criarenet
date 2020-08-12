
class StorageClient {
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    save(key, data) {
        return localStorage.setItem(key, JSON.stringify(data));
    }

    addItemToKey(key, item){
        const data = this.get(key)

        const newId = data != null || data != undefined ? ++data[data.length - 1].id : 1;
        item.id = newId;
        data.push(item);
        this.save(key, data);
    }

    removeAll(key) {
        return localStorage.removeItem(key);
    }

    removeItemById(key, id) {
        const data = this.get(key)
        const dataWithoutItem = data.filter(element => element.id !== id);
        this.save(key, dataWithoutItem);
        return this.get(key)
    }

    isExists(key) {
        const isData = this.get(key);
        if (isData != null || isData != undefined) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        return localStorage.clear();
    }
}

export default StorageClient;