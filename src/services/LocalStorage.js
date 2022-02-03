class LocalStorage {
    static getItem(key) {
        return JSON.parse(localStorage.getItem(key))
    }
    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export default LocalStorage