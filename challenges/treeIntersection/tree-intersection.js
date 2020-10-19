'use strict';

class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }
  hash(key) {
    const hashKey = key;
    return hashKey;
  }
  add(value) {
    const hash = this.hash(value);
    if (!this.storage[hash]) {
      let arr = [];
      arr.push(value);
      this.storage[hash] = arr;
    } else {
      this.storage[hash] = value;
    }
  }
  contain(key) {
    const hash = this.hash(key);
    if (this.storage[hash]) {
      return true;
    } else {
      return false;
    }
  }
}

class treeNode {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
  binaryAddNode(node){
    if(node.value<this.value){
      if(this.left === null){
        this.left = node;
      } else {
        this.left.binaryAddNode(node);
      }
    } else if (node.value>this.value) {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.binaryAddNode(node);
      }
    }
  }
  search(val){
    if(this.value === val){
      return true;
    } else if ((val < this.value) && (this.left !== null)){
      return this.left.search(val);
    } else if ((val > this.value) && (this.right !== null)){
      return this.right.search(val);
    } else {
      return false;
    }
  }
}
class BinaryTree {

  constructor(root){
    this.root = root;
  }
  inOrder() {
    //   left - root - right
    let results = [];
    let _traversal = (node) => {
      if (node.left) _traversal(node.left);
      results.push(node.value);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
}

// First tree
let tree11 = new treeNode(150);
let tree12 = new treeNode(100);
let tree13 = new treeNode(250);
let tree14 = new treeNode(75);
let tree15 = new treeNode(160);
let tree16 = new treeNode(200);
let tree17 = new treeNode(350);
let tree18 = new treeNode(125);
let tree19 = new treeNode(175);
let tree110 = new treeNode(300);
let tree111 = new treeNode(500);
//150
tree11.right = tree13;
tree11.left = tree12;
// 100
tree12.right = tree15;
tree12.left = tree14;
// 250
tree13.right = tree17;
tree13.left = tree16;
// 160
tree15.right = tree19;
tree15.left = tree18;
// 350
tree17.right = tree111;
tree17.left = tree110;

// Second tree
let tree21 = new treeNode(42);
let tree22 = new treeNode(100);
let tree23 = new treeNode(600);
let tree24 = new treeNode(15);
let tree25 = new treeNode(160);
let tree26 = new treeNode(200);
let tree27 = new treeNode(350);
let tree28 = new treeNode(125);
let tree29 = new treeNode(175);
let tree210 = new treeNode(4);
let tree211 = new treeNode(500);
//42
tree21.right = tree23;
tree21.left = tree22;
// 100
tree22.right = tree25;
tree22.left = tree24;
// 600
tree23.right = tree27;
tree23.left = tree26;
// 160
tree25.right = tree29;
tree25.left = tree28;
// 350
tree27.right = tree211;
tree27.left = tree210;



let firstTree = new BinaryTree(tree11);
let secondTree = new BinaryTree(tree21);

function tree_intersection(tree1, tree2){
  let output = [];

  let hashmap = new Hashmap(4000);
  let firstTreeValues = tree1.inOrder();
  firstTreeValues.forEach(value=> {
    hashmap.add(value);
  });

  let secondTreeValues = tree2.inOrder();

  secondTreeValues.forEach(value=> {

    let key = hashmap.hash(value);
    if(hashmap.storage[key]){
      output.push(value);
    }
  });

  return output;
}

console.log(tree_intersection(firstTree, secondTree));
