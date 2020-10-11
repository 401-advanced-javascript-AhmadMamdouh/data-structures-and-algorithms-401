# Insertion Sort
Sorting algorithm.

## Challenge
Features Sort an array using insertion sort. The provided pseudo code :

InsertionSort(int[] arr)

FOR i = 1 to arr.length

  int j <-- i - 1
  int temp <-- arr[i]
  
  WHILE j >= 0 AND temp < arr[j]
    arr[j + 1] <-- arr[j]
    j <-- j - 1
    
  arr[j + 1] <-- temp
Link to code
[insertion-sort-code](insertion-sort.js)