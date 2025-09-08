class LRUCache {
    #count = 0;
    #obj = {};
    constructor(cnt = 0) {
        this.#count = cnt;
    }

    size() {
        return this.#count;
    }

    get(key) {
        return this.#obj[key] || null;
    }

    put(key, value) {
        // find and replace
        this.#obj[key] = value;
        // add and replace
        if(Object.keys(this.#obj).length > this.#count) {
            delete this.#obj[Object.keys(this.#obj)[this.#count - 1]]
        }
    }
}

const l1 = new LRUCache(3);

l1.put('a', 1);
l1.put('b', 2);
l1.put('c', 4);
l1.put('d', 10);

console.log(l1.get('a'), l1.get('b'), l1.get('c'), l1.get('d'));

l1.put('b', 3);
l1.put('c', 10);

console.log(l1.get('b'), l1.get('c'), l1.get('d'));
