class LRUCache {
    #count = 0;
    #cache = {};
    #stack = [];

    constructor(count = 0) {
        this.#count = count;
    }

    size() {
        return Object.keys(this.#cache).length;
    }

    get(key) {
        if (!(key in this.#cache)) {
            return null;
        }
        
        const index = this.#stack.indexOf(key);
        this.#stack.splice(index, 1);
        
        this.#stack.push(key);
        
        return this.#cache[key];
    }

    put(key, value) {
        if (key in this.#cache) {
            const index = this.#stack.indexOf(key);
            this.#stack.splice(index, 1);
        } 

        else if (Object.keys(this.#cache).length >= this.#count) {
            const leastRecentKey = this.#stack.shift();
            delete this.#cache[leastRecentKey];
        }
        
        this.#cache[key] = value;
        this.#stack.push(key);
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

const l2 = new LRUCache(2);

l2.put('a', 1);
l2.put('b', 2);
l2.get('b');
l2.put('c', 3);
console.log(l2.get('a'), l2.get('b'), l2.get('c'));