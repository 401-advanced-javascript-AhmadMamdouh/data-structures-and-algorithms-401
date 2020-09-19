'use strict';
const linkedListModule = require('../LinkedList/linked-list.js');

function llZip(linkedList1, linkedList2){
  let first = linkedList1.head.value;
  let second = linkedList2.head.value;
  let firstNewNode = new linkedListModule.Node(first);
  let newLinkedList = new linkedListModule.LinkedList();
  newLinkedList.head = firstNewNode;
  newLinkedList.append(second); 
 
  while((linkedList1.head.next) || ( linkedList2.head.next)){
    if (linkedList1.head.next){
      let val = linkedList1.head.next.value;
      newLinkedList.append(val);
    }
    if(linkedList2.head.next){
      let val = linkedList2.head.next.value;
      newLinkedList.append(val);
    }  
    linkedList1.head = linkedList1.head.next;
    linkedList2.head = linkedList2.head.next;
    if(!linkedList1.head){
      linkedList1 = {head: 1, next: null};
    }
    if(!linkedList2.head){
      linkedList2 = {head: 1, next: null};
    }
  }
  return newLinkedList;
}
  
const linkedListInstance1 = new linkedListModule.LinkedList();
linkedListInstance1.append(1);
linkedListInstance1.append(3);
linkedListInstance1.append(2);
const linkedListInstance2 = new linkedListModule.LinkedList();
linkedListInstance2.append(5);
linkedListInstance2.append(9);
  
let newLinked = llZip(linkedListInstance1,linkedListInstance2);
console.log(newLinked.toString());


module.exports = llZip;