/*
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], 
[3, 10, 26, 7]];

Sample Output :


row 0
 1
 2
 1
 24
row 1
 8
 11
 9
 4
row 2
 7
 0
 7
 27
row 3
 7
 4
 28
 14
row 4
 3
 10
 26
 7

 */

var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

var row = 5;
var column = 4;

for (let i = 0; i < row; i++) {
  console.log("row " + i);
  console.log("/n");
  for (let j = 0; j < column; j++) {
    console.log(a[i][j]);
    console.log("/n");
  }
}
