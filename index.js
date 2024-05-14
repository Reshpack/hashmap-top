class hashmap {
    constructor() {
        this.mapArray = [];
    }

    hash(key) {
        let hashCode = 0;
      
   const primeNumber = 31;
   for (let i = 0; i < key.length; i++) {
     hashCode = primeNumber * hashCode + key.charCodeAt(i);
   }

   return hashCode;
    }

    set(key, value) {
        this.mapArray[key] = value;
    }

    get(key) {
        return this.mapArray[key];
    }

    has(key) {
        for (const mapKey in this.mapArray) {
            if (mapKey === key) {
                return true;
            }
        }
        return false;
    }

    remove(key) {
        if (this.has(key)) {
            delete this.mapArray(key);
            return true;
        }
        return false;
    }

    length() {
        return Object.keys(this.mapArray).length;
    }

    clear() {
        this.mapArray = [];
    }

    keys() {
        return Object.keys(this.mapArray);
    }

    values() {
        return Object.values(this.mapArray);
    }

    entries() {
        return Object.entries(this.mapArray);
    }
}

const HashSet = new hashmap();
HashSet.set('Mo', 'Salah');
HashSet.set('Lionel', 'Messi');
HashSet.set('Cristiano', 'Ronaldo');

console.log(HashSet.entries());
console.log(HashSet.length());
console.log(HashSet.keys());
console.log(HashSet.values());
console.log(HashSet.get('Mo'));
console.log(HashSet.has('Lionel'));
