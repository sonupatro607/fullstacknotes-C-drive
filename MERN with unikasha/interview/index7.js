/*
Write a JS program to Find the pairs of array elements for which the sum is equal to the given target value

Sample Input :

n = 5

x = 8

array = { 2,6,4,7,5 }

Expected Output :

2 6

*/

var arr = [2, 6, 4, 7, 5];

for (var i = 0; i < arr.length - 1; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 8) {
      console.log(arr[i] + " " + arr[j]);
    }
  }
}
