'use strict';

function mergeSort (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = [];
  const right = [];

  for (let i = 0; i<mid; i++){
    left[left.length] = arr[i];
  }
  for (let i = 1; i<arr.length-mid+1; i++){
    right[right.length] = arr[arr.length-i];
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    
    if (left[leftIndex] < right[rightIndex]) {
      resultArray[resultArray.length]=left[leftIndex];
      leftIndex++; 
    } else {
      resultArray[resultArray.length]=right[rightIndex];
      rightIndex++;
    }

  }
  // slice the left array
  let leftTempArr=[];
  for (let i = 1; i<left.length-leftIndex+1; i++){
    leftTempArr[leftTempArr.length]= left[left.length-i];
  }
  // concatenate the left arr with the result array
  for(let i = 0; i<leftTempArr.length; i++){
    resultArray[resultArray.length]=leftTempArr[i];
  }
  // slice the right array
  let rightTempArr=[];
  for (let i = 1; i<right.length-rightIndex+1; i++){
    rightTempArr[rightTempArr.length]= right[right.length-i];
  }
  
  return (
    resultArray
      .concat(right.slice(rightIndex)));
}

let arr = [8,4,23,42,16,15];
console.log(mergeSort (arr));