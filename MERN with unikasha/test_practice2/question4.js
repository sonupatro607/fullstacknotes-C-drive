/*
Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length.

Sample Input -
 
let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];

Sample output: 
[12, 7, 16]
*/

let arr1 = [4, 6, 7];
let arr2 = [8, 1, 9];
var arr3 = [];
for (var i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i] + arr2[i];
}
console.log(arr3);
