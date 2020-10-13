'use strict';

function quickSort(arr) {
  if (arr.length > 1) {
    let pivot = arr[0];
    const left = [];
    const right = [];
    
    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    let quickSortResultLeft = quickSort(left);
    let quickSortResultRight = quickSort(right);

    let newArr = [];
    for(let i = 0; i<quickSortResultLeft.length; i++){
      newArr[newArr.length] = quickSortResultLeft[i];
    }

    newArr[newArr.length] = pivot;

    for(let i = 0; i<quickSortResultRight.length; i++){
      newArr[newArr.length] = quickSortResultRight[i];
    }
    return newArr;
  } 
  return arr;
}

console.log(quickSort([8,4,23,42,16,15]));