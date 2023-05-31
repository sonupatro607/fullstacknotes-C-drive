/*
question:
Create a JS program to perform the following operations on two variable

get inputs
addition
subtraction
multiply
division
modulo
exponentiation
increment
decrement
Sample Input:

20

10

Sample Output:

30

10

200

2

0
*/

// answer:

var number1 = 50;
var number2 = 20;

console.log("multiplication :", number1 * number2);
console.log("Addition :", number1 + number2);
console.log("Substraction :", number1 - number2);
console.log("division :", number1 / number2);
console.log("modulo :", number1 % number2);
console.log("exponensial :", number1 ** number2);

// **********OR ***************

function addition(a, b) {
  console.log(a + b);
}
function substraction(a, b) {
  if (a > b) {
    console.log(a + b);
  } else {
    console.log(b - a);
  }
}
function multiplication(a, b) {
  console.log(a * b);
}
function division(a, b) {
  console.log(a / b);
}
function modulo(a, b) {
  console.log(a % b);
}
function exponensial(a, b) {
  console.log(a ** b);
}

addition(10, 20);
substraction(10, 20);
multiplication(10, 20);
division(10, 20);
modulo(10, 20);
exponensial(10, 20);
