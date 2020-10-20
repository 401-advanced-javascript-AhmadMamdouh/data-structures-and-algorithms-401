'use strict';

const util = require('util');

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
      const obj = { [key]: [value] };
      this.storage[hash] = obj;
    } else {
      let entries = Object.entries(this.storage[hash])[0];
      entries[1].push(value);
    }
  }
  addHashed(hash, value) {
    let output = [];
    let key = Object.keys(this.storage[hash])[0];
    output.push(key);
    let existingValues = Object.values(this.storage[hash])[0];
    for(let i = 0; i<existingValues.length; i++){
      output.push(existingValues[i]);
    }
    if(value){
      let newValues = Object.values(value)[0];
      for(let i = 0; i<newValues.length; i++){
        output.push(newValues[i]);
      }
    } else {
      output.push(null);
    }
    this.storage[hash] = output;
  }
}

function leftJoin(hashmap1, hashmap2){
  if(hashmap1.storage.length>1){
    for (let i = 0; i<hashmap1.storage.length; i++){
      if (hashmap1.storage[i]){
        hashmap1.addHashed(i, hashmap2.storage[i]);
      }
    }
  }
  return hashmap1;
}


const hashmap1 = new Hashmap(4000); 
hashmap1.add('fond', 'enamored');
hashmap1.add('warth', 'anger');
hashmap1.add('diligent', 'employed');
hashmap1.add('outfit', 'garb');
hashmap1.add('guide', 'usher');


const hashmap2 = new Hashmap(4000); 
hashmap2.add('fond', 'averse');
hashmap2.add('warth', 'delight');
hashmap2.add('diligent', 'idle');
hashmap2.add('guide', 'follow');
hashmap2.add('flow', 'jam');

let joined = leftJoin(hashmap1, hashmap2);
console.log(util.inspect(joined, false, null, true));