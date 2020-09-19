'use strict';

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
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }   

    let current = this.head;
    while (current.next){
      current = current.next;
    }
    current.next = node;
    return this;
  }

  includes(value){
    let current = this.head;
    if(value === current.value){
      return true;
    } else {
      while (current.next){
        current = current.next;
        if (value === current.value){
          return true;
        }
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = '';
    string = `{ ${current.value} }`;
    while (current.next){
      current = current.next;
      string = string + ` -> { ${current.value} }`;
    }
    return string + ` -> { ${current.next} }`;
  }
}


module.exports = LinkedList;
