'use strict';
let bt = require('../tree/tree.js');

function fizzBuzzTree(tree) {
  let current = tree.root;
  while(current.right){
    if((!(current.right.value%5))&&(!(current.right.value%3))){
      current.right.value = 'FizzBuzz';       
    } else if (((current.right.value%5))&&(!(current.right.value%3))){
      current.right.value = 'Fizz';       
    } else if ((!(current.right.value%5))&&((current.right.value%3))){
      current.right.value = 'Buzz';       
    }

    current = current.right;
  }
  current = tree.root;
  while(current.left){
    if((!(current.left.value%5))&&(!(current.left.value%3))){
      current.left.value = 'FizzBuzz';       
    } else if (((current.left.value%5))&&(!(current.left.value%3))){
      current.left.value = 'Fizz';       
    } else if ((!(current.left.value%5))&&((current.left.value%3))){
      current.left.value = 'Buzz';       
    }

    current = current.left;
  }
  if(tree.root){
    if((!(tree.root.value%5))&&(!(tree.root.value%3))){
      tree.root.value = 'FizzBuzz';       
    } else if (((tree.root.value%5))&&(!(tree.root.value%3))){
      tree.root.value = 'Fizz';       
    } else if ((!(tree.root.value%5))&&((tree.root.value%3))){
      tree.root.value = 'Buzz';       
    }
  }

  return tree;
}


//test
const five = new bt.Node(5);
const three = new bt.Node(3);
const fifteen = new bt.Node(15);
const eleven = new bt.Node(11);
const twentyseven = new bt.Node(27);
const twentyfive = new bt.Node(25);
const twentyone = new bt.Node(21);
const twelve = new bt.Node(12);
const four = new bt.Node(4);
const six = new bt.Node(6);
const zero = new bt.Node(0);
const one = new bt.Node(1);

five.right = fifteen;
five.left = three;

three.right = eleven;
three.left = twentyseven;

twentyseven.left = twentyfive;

eleven.left = twentyone;

fifteen.right = twelve;
fifteen.left = four;

fifteen.right = twelve;
fifteen.left = four;

twelve.right = six;

four.right = zero;
four.left = one;

let tree = new bt.BinaryTree(five);
console.log('before',tree.inOrder());
console.log('after', fizzBuzzTree(tree).inOrder());