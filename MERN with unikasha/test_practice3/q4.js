/*
Produce 10 random numbers in the range 1-100 , keep it in an array and print the array

note- manual grading is applied to this



var max = 100;
var min = 1;
var arr = [];
for (var i = 0; i < 10; i++) {
  arr[i] = Math.floor(Math.random() * max - min) + min;
}
console.log(arr);

solution:
[
    10, 79,  2, 91,  5,
    35, 15, 54, 34, 53
  ]

  */
