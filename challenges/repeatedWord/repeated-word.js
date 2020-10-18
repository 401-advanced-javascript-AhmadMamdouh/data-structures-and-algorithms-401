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
  }
  
  function repeatedWords(words){
    let hashmap = new Hashmap(4000);
    let splitted = words.toLowerCase().split(' '); //check if there is ,;?!
    let loop = false;
    let idx = 0;
    while(!loop){
      let hashed = hashmap.hash(splitted[idx].split(',')[0]);
      if (!hashmap.storage[hashed]) {
        const ll = new LinkedList();
        ll.prepend({ [hashed]: splitted[idx].split(',')[0] });
        hashmap.storage[hashed] = ll;
        idx++;
      } else {
        loop = true;
      }
    }
    return splitted[idx].split(',')[0];
  }

  
  
  let words= 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York';
  
  let words1= 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
  
  let words2= 'Once upon a time, there was a brave princess who...';
  
  
  console.log(repeatedWords(words));
  console.log(repeatedWords(words1));
  console.log(repeatedWords(words2));