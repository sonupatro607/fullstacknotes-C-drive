/*
Merge two array into a single one
Given two sorted arrays, the task is to merge them in a sorted manner.
Examples: 

Input: 

arr1[] = { 1, 3, 4, 5}, 

arr2[] = {2, 6, 7, 8} 
Output: 

Array after merging
1 2 3 4 5 6 7 8 



answer: 

arr1 = [1, 3, 4, 5];

arr2 = [2, 6, 7, 8];

arr3 = [];

for (var i = 0; i < arr1.length; i++) {
  arr3.push(arr1[i]);
}
if (arr3.length == arr1.length) {
  for (var j = 0; j < arr1.length; j++) {
    arr3.push(arr2[j]);
  }
}
console.log(arr3.sort());

solution: 
[1, 2, 3, 4, 5, 6, 7, 8]


*/
