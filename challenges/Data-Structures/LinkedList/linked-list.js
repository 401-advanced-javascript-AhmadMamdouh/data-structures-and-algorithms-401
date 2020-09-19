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
    node.next = this.head;
    this.head = node;
    return this.head;
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

  append(value){
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this.head;
    }   

    let current = this.head;
    while (current.next){
      current = current.next;
    }
    current.next = node;
    return this.head;
  }

  insertBefore(value, newVal){
    const addedNode = new Node(newVal);

    let current = this.head;

    if(value === current.value){
      this.insert(newVal);
    } else {
      while (current.next){
        let prev = current;
        current = current.next;
        if (value === current.value){
          addedNode.next = current;
          prev.next = addedNode;
          return prev;
        }
      }
    }
  }

  insertAfter(value, newVal){
    const addedNode = new Node(newVal);

    let current = this.head;

    if(value === current.value){
      this.append(newVal);
    } else {
      while (current.next){
        current = current.next;
        let prev = current;
        if (value === current.value){
          addedNode.next = current.next;
          prev.next = addedNode;
        }
      }
    }
  }

  kthFromEnd(k){
    let counter = 0; 
    if ((typeof(k) === 'number') && k>=0){
      if (this.head){
        counter ++;
        let current = this.head;
        let anotherCurrent = this.head;
        while(current.next){
          current = current.next;
          counter++;
        }
        for (let i = 0; i<(counter-k-1); i++){
          anotherCurrent = anotherCurrent.next;
        }
        if ((counter-k-1)<0){
          return 'exception';
        }
        return anotherCurrent.value;
  
      } else {
        return 'empty linked list';
      }
    } else {
      return 'invalid value';
    }
  } 

}
module.exports = {
  Node,
  LinkedList,
};