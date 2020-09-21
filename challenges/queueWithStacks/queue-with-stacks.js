'use strict';

class Stack {
  constructor(){
    this.storage = {};
    this.size = 0;
  }
  push(value){
    this.storage[this.size ++] = value;
  }
  pop(){
    let result = this.storage[-- this.size];
    delete this.storage[this.size];
    return result;
  }
}

class PseudoQueue {
  constructor(){
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
  }
  enqueue(value){
    this.enqueueStack.push(value);
  }
  dequeue(){
    if(this.dequeueStack.size === 0){
      while(this.enqueueStack.size){
        this.dequeueStack.push(this.enqueueStack.pop());
      }
    }
    return this.dequeueStack.pop();
  }
}

let newPseudoQueue = new PseudoQueue();
newPseudoQueue.enqueue(20);
newPseudoQueue.enqueue(15);
newPseudoQueue.enqueue(10);

newPseudoQueue.enqueue(5);

newPseudoQueue.dequeue();

console.log(newPseudoQueue);