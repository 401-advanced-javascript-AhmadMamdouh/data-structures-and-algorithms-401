'use strict';

let Stack = require('../stacksAndQueues/stack-and-queue.js');

function multiBracketValidation(input){
  if(input.length>1){
    let newStack = new Stack();
    for(let i = 0; i<input.length; i++){
      if((input[i]==='(')||(input[i]==='{')||(input[i]==='[')){
        newStack.push(input[i]);
      } else if((input[i]===')')||(input[i]==='}')||(input[i]===']')){
        if(!(newStack.isEmpty())){
          if((input[i] === ')' && newStack.top.value === '(') || (input[i] === '}' && newStack.top.value === '{') || (input[i] === ']' && newStack.top.value === '[')){
            newStack.pop();
          }else{
            return false;
          }
        }
      }
    }
    if (newStack.isEmpty()){
      return true;
    }else {
      return false;
    }
  }else{
    return false;
  }
}


let case1 = '{}';
let case2 = '{}(){}';
let case3 = '()[[Extra Characters]]';
let case4 = '(){}[[]]';
let case5 = '{}{Code}[Fellows](())';
let case6 = '[({}]';
let case7 = '(](';
let case8 = '{(})'; //check should be false not true
let case9 = '{'; //check undefined?
let case10 = ')'; //check undefined?
let case11 = '[}';

console.log(multiBracketValidation(case1));
console.log(multiBracketValidation(case2));
console.log(multiBracketValidation(case3));
console.log(multiBracketValidation(case4));
console.log(multiBracketValidation(case5));
console.log(multiBracketValidation(case6));
console.log(multiBracketValidation(case7));
console.log(multiBracketValidation(case8));
console.log(multiBracketValidation(case9));
console.log(multiBracketValidation(case10));
console.log(multiBracketValidation(case11));