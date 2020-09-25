'use strict';

const util = require('util');

class Node {
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
  preOrder() {
    //   root - left - right
    let results = [];
    let _traversal = (node) => {
      results.push(node.value);
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
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
  postOrder() {
    //   left - right - root
    let results = [];
    let _traversal = (node) => {
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
      results.push(node.value);
    };
    _traversal(this.root);
    return results;
  }
}

class BinarySearchTree {
  constructor() {  
    this.root = null;
  }
  add(val) {
    let newNode = new Node(val);
    if (this.root === null){
      this.root = newNode;
    } else {
      this.root.binaryAddNode(newNode);
    }
  }
  contain(val){
    let foundVal = this.root.search(val);  
    console.log(foundVal);
    return (foundVal)? true : false;  
  }
}




let newBinarySearchTree = new BinarySearchTree();

newBinarySearchTree.add(5);
newBinarySearchTree.add(6);
newBinarySearchTree.add(20);
newBinarySearchTree.add(15);
newBinarySearchTree.add(30);
newBinarySearchTree.add(8);
newBinarySearchTree.add(2);

newBinarySearchTree.contain(0);


console.log(util.inspect(newBinarySearchTree, false, null, true));


module.exports = {
  Node,
  BinaryTree,
};