'use strict';

let insertShiftArray = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > val) {
        let firstSlice = arr.slice(0, i);
        firstSlice[firstSlice.length]= val;
        let secondSlice = arr.slice(i, arr.length);
        secondSlice.forEach(element => {
          firstSlice[firstSlice.length]= element;
        });
        return firstSlice;
      }
    }
  };
  
  console.log(insertShiftArray([2,4,6,8], 5));
  
 