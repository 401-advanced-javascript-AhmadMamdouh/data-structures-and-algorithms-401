'use strict';


var binarySearch = function(array, value) {
  var guess,
    min = 0,
    max = array.length - 1;	

  while(min <= max){
    guess = Math.floor((min + max) /2);
    if(array[guess] === value)
      return guess;
    else if(array[guess] < value)
      min = guess + 1;
    else
      max = guess - 1;	
  }

  return -1;
};


console.log(binarySearch([4, 8, 15, 16, 23, 42], 15));

console.log(binarySearch([11, 22, 33, 44, 55, 66, 77], 90));

module.exports = binarySearch;