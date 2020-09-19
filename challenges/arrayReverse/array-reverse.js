'use strict';

let arr = [1, 2, 3, 4, 5, 6];

let reverseArray = function(arr){
  let newArr = [];
  for (let i = 0; i<arr.length; i++){
    newArr.push(arr[arr.length-i-1]);        
  }
  return newArr;    
};

let reverseTheSameArray = function(arr){
  let newArr = [];
  for (let i = 0; i<arr.length; i++){
    newArr.push(arr[arr.length-i-1]);        
  }
  newArr.forEach(element=> arr.push(element));
  return arr.slice(arr.length-newArr.length, arr.length);    
};

console.log(reverseArray(arr));
console.log(reverseTheSameArray(arr));