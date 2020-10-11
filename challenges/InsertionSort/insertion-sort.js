'use strict';

function InsertionSort(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    let j = i - 1;
    let temp = arr[i];
    while ((j >= 0) && (temp < arr[j])) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

let arr = [8, 4, 23, 42, 16, 15];
let reverseSorted = [20,18,12,8,5,-2];
let fewUniques = [5,12,7,5,5,7];
let nearlySorted = [2,3,5,7,13,11];

console.log('before', arr);
console.log('after', InsertionSort(arr));
console.log('before', reverseSorted);
console.log('after', InsertionSort(reverseSorted));
console.log('before', fewUniques);
console.log('after', InsertionSort(fewUniques));
console.log('before', nearlySorted);
console.log('after',InsertionSort(nearlySorted));