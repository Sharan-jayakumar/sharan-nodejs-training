class LRUCache {
    #size = 0;
    #cache = new Map();

    constructor(size = 0) {
        this.#size = size;
    }

    size() {
        return this.#cache.size;
    }

    get(key) {
        if (!this.#cache.has(key)) {
            return null;
        }
        
        const value = this.#cache.get(key);
        
        this.#cache.delete(key);
        this.#cache.set(key, value);
        
        return value;
    }

    put(key, value) {
        if (this.#cache.has(key)) {
            this.#cache.delete(key);
        }

        else if (this.#cache.size >= this.#size) {
            const leastRecentKey = this.#cache.keys().next().value;
            this.#cache.delete(leastRecentKey);
        }

        this.#cache.set(key, value);
    }
}

const l1 = new LRUCache(3);

l1.put('a', 1);
l1.put('b', 2);
l1.put('c', 4);
l1.put('d', 10);

console.log(l1.get('a'), l1.get('b'), l1.get('c'), l1.get('d'));

l1.get('b');
l1.put('e', 5);

console.log(l1.get('a'), l1.get('b'), l1.get('c'), l1.get('d'), l1.get('e'));