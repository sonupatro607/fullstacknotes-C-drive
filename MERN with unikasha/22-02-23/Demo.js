/*
question:
28369 ------> reverse ---> 96382

answer:

var stack = [];

function rvrse(value) {
  for (var i = 0; value > 0; i++) {
    var x = value % 10;
    stack.push(x);
    value = parseInt(value / 10);
  }
  console.log(stack);
}
rvrse(28369);

solution: 
[9, 6, 3, 8, 2];

question: find the valid or invalid parenthesis.
(())) -----> invalid parenthesis
(()) -------> valid parenthesis

answer1: (by me)

var stack = [];
var countOpen = 0;
var countClose = 0;
function parenthesis(penthsis) {
  for (var i = 0; i < penthsis.length; i++) {
    stack.push(penthsis[i]);
  }
  for (var j = 0; j < stack.length; j++) {
    if (stack[j] == "(") {
      countOpen += 1;
    }
    if (stack[j] == ")") {
      countClose += 1;
    }
  }
  if (countOpen == countClose) {
    console.log("it is a valid parenthesis");
  } else {
    console.log("it is not a valid parenthesis");
  }
}

parenthesis("(())"); ------------> it is a valid parenthesis
parenthesis("(()"); ----------->it is not a valid parenthesis


answer2:(by sir)

function parenthesis(penthsis) {
  var stack = [];
  for (var i = 0; i < penthsis.length; i++) {
    if (penthsis[i] == "(") {
      stack.push(penthsis[i]);
    } else {
      stack.pop();
    }
  }
  if (stack.length == 0) {
    console.log("valid parenthesis");
  } else {
    console.log("invalid parenthesis");
  }
}

parenthesis("(())");
parenthesis("(()");


qustion:
"sx##tz#a" ------>#(delete previous character if you saw #)
s#tz#a
tz#a
ta 

output:
ta

answer:

function prvsn(value) {
  var stack = [];
  for (var i = 0; i < value.length; i++) {
    if (value[i] != "#") {
      stack.push(value[i]);
    } else {
      stack.pop();
    }
  }
  var x = stack.toString();
  console.log(x);
}

prvsn("sx##tz#a");

solution:
t,a


qustion:
"sud#ax" ------>#(delete next character if you saw #)
sudx

output:
sudx

answer1: --> (by me)

function prvsn(value) {
  var queue = [];
  for (var i = value.length - 1; i >= 0; i--) {
    if (value[i] != "#") {
      queue.unshift(value[i]);
    } else {
      queue.shift();
    }
  }
  var x = queue.toString();
  console.log(x);
}

prvsn("sud#ax");

solution:
s,u,d,x



answer2: ---->(by sir)

function prvsn(value) {
  var queue = [];
  var i = 0;
  while (i < value.length) {
    if (value[i] != "#") {
      queue.push(value[i]);
      i += 1;
    } else {
      i += 2;
    }
  }
  var x = queue.toString();
  console.log(x);
}

prvsn("sud#ax");

solution: 
s, u, d, x;

*/
