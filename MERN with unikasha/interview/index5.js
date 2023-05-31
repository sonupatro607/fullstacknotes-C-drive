/*
Write a JS program to Find the number of days in a given month ( consider the year to be a non-leap year )

Sample Input :

2

Expected Output :

28


*/

function noOfDays(n) {
  if (
    n === 1 ||
    n === 3 ||
    n === 5 ||
    n === 7 ||
    n === 8 ||
    n === 10 ||
    n === 12
  ) {
    console.log(31);
  }
  if (n === 2) {
    console.log(28);
  }
  if (n === 4 || n === 6 || n === 9 || n === 11) {
    console.log(30);
  }
}
noOfDays(11);
