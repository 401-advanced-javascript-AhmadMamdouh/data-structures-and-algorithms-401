class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    prepend(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
    }
  }
  
  class Hashmap {
    constructor(size) {
      this.size = size;
      this.storage = new Array(size);
    }
    hash(key) {
      const sumCharCode = key.split('').reduce((acc, char) => {
        return acc + char.charCodeAt(0);
      }, 0);
      const hashKey = (sumCharCode * 19) % this.size;
      return hashKey;
    }
    add(key, value) {
      const hash = this.hash(key);
      if (!this.storage[hash]) {
        const ll = new LinkedList();
        ll.prepend({ [key]: value });
        this.storage[hash] = ll;
      } else {
        this.storage[hash].prepend({ [key]: value });
      }
    }
  
    get(key) {
      const hash = this.hash(key);
      if (this.storage[hash]) {
        return this.storage[hash];
      } else {
        return 'no value for this key';
      }
  
    }
    contain(key) {
      // takes in the key and returns a boolean, indicating if the key exists in the table already.
      const hash = this.hash(key);
      if (this.storage[hash]) {
        return true;
      } else {
        return false;
      }
  
    }
  }
  
  const hashmap = new Hashmap(4000); // ==> [4000]
  hashmap.add('name', 'Ahmad');
  hashmap.add('one', 'thing');
  hashmap.add('eno', '1');
  hashmap.add('neo', '2');
  hashmap.add('this', 'nothing');
  console.log(hashmap.storage);
  console.log(hashmap.get('neo'));
  console.log(hashmap.get('ooo'));
  
  console.log(hashmap.contain('neo'));
  console.log(hashmap.contain('one'));
  
  console.log(hashmap.contain('ooo'));