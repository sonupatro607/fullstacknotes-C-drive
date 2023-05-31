/*
Suppose in a Class, the Teacher asked students of roll number 1 to write 0 and roll number 2 to write 1 on the blackboard and asked for the rest of the students, to write the summation of your previous two students. The series written on the board will look like 0,1,1,2,3,5,8,……….

The teacher then told the students, this series is known as the Fibonacci series. It can be represented by the below equation

 Fn = Fn-1 + Fn-2
Input :
8
Output :
34



function fabonacci(n) {
  var num1 = 0;
  var num2 = 1;
  var sum;

  for (var i = 0; i < n; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return sum;
}

console.log(fabonacci(8));

*/
