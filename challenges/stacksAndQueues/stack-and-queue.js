class Node {
    constructor(val) {
      this.value = val;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.storage = [];
      this.top = null;
    }
    push(val) {
      let node = new Node(val);
      if (this.top) {
        this.storage.unshift(node);
        this.top = node;
        this.top.next = this.storage.length - 1;
      } else {
        this.storage.unshift(node);
        this.top = node;
      }
    }
    pop() {
      this.storage.shift();
      this.top = this.storage[0];
    }
    peek() {
      return this.top.value;
    }
    isEmpty() {
      return (!this.top) ? true : false;
    }
  }
  
  
  class Queue {
    constructor() {
      this.storage = [];
      this.front = null;
    }
    enqueue(val) {
      let node = new Node(val);
      this.storage.push(node);
      if (!this.front) {
        this.front = node;
        this.front.next = null;
      } else {
        var count = 2;
        for (let i = 0; i < this.storage.length - 1; i++) {
          this.storage[i].next = count;
          count++;
        }
      }
    }
    dequeue() {
      this.storage.shift();
      this.front = (this.storage[0]) ? (this.storage[0]) : null;
      for (let i = 0; i < this.storage.length - 1; i++) {
        this.storage[i].next = this.storage[i].next - 1;
      }
    }
    peek() {
      return this.front.value;
    }
    isEmpty() {
      return (!this.front) ? true : false;
    }
  }
  

  module.exports = { stack: Stack, queue: Queue };