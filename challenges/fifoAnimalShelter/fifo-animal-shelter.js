'use strict';

class AnimalShelter {
  constructor() {
    this.queue = [];
    this.front = null;
  }
  enqueue(animal) {
    if ((animal === 'dog') || (animal === 'cat')) {
      this.queue.push(animal);
      this.front = this.queue[0];
    }
    else {
      console.log('look for other shelter please');
    }
  }
  dequeue(pref) {
    if ((pref === 'dog') || (pref === 'cat')) {
      let counter = 0;
      let newQueue = [];
      for (let i = 0; i < this.queue.length; i++) {
        newQueue.push(this.queue[i]);
        console.log('test');
        if ((this.queue[i] === pref) && (counter === 0)) {
          newQueue.pop();
          counter++;
        }
      }
      this.queue = newQueue;
      this.front = this.queue[0];
      return (counter)? pref: console.log('not found');
    } else {
      console.log(`we don't have ${pref} in our shelter`);
      return null;
    }
  }
}

let shelter = new AnimalShelter();
shelter.enqueue('dog');
shelter.enqueue('dog');
shelter.enqueue('cat');
shelter.enqueue('cat');
shelter.enqueue('dog');

shelter.dequeue('cat');


console.log(shelter);