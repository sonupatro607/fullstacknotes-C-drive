/*
Write a JS program to Find the sum of all the even numbers in a given range

Sample Input :

10

20

Expected Output :

90
*/

var sum = 0;
function sumOfEven(n1, n2) {
  for (var i = n1; i <= n2; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
}
sumOfEven(10, 20);
