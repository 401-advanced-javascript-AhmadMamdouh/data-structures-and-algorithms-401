'use strict';

function binarySearch(arr, searchKey) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchKey) {
      index = i;
    }
  }
  return (index) ? index : -1;
}

console.log(binarySearch([4, 8, 15, 16, 23, 42], 15));

console.log(binarySearch([11, 22, 33, 44, 55, 66, 77], 90));

module.exports = binarySearch;