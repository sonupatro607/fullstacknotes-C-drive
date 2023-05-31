/*
question:
Write a program in JS with Switch statement to perform Calculator operations of binary arithmetic operations ( addition, subtraction, multiplication, division, and exponentiation ) for variables a & b;

Input:

10

20

+

Output:

30
*/

// amswer:

var a = 30,
  b = 20;

switch ("multiplication") {
  case "addition":
    console.log(a + b);
    break;
  case "substraction":
    console.log(a - b);
    break;
  case "multiplication":
    console.log(a * b);
    break;
  case "division":
    console.log(a / b);
    break;
  case "exponentiation":
    console.log(a ** b);
    break;
}
