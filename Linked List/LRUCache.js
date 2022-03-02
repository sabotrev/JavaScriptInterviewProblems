/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    // If does not exist then return -1
    if (!this.map.has(key)) {
        return -1;
    }

    // Reorder... move this key to front of stack.
    let valueCopy = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, valueCopy);

    return valueCopy;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.size === this.capacity) {
        if (!this.map.get(key)) {
            // Get first key
            let firstKey = this.map.keys().next().value;
            this.map.delete(firstKey);
        }
    }
    this.map.delete(key);
    this.map.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const lRUCache = new LRUCache(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
lRUCache.get(1);
lRUCache.put(1, 1);
lRUCache.put(3, 3);
