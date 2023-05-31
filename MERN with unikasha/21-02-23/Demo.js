/*
question: 
how to access the last element of this array.

var arr = [1,2,3,4,5]

solution:
arr[4] ----> 5
arr[arr.length-1] ------> 5

------------------------------------

question:
palindrom question ------> same from both side 
example:
abccba

answer1:

function stacks(n) {
  var stack = n;
  
  for (var i = 0; i < stack.length; i++) {
    if (stack[i] == stack[stack.length - 1] && i < 5) {
      console.log("it is the staring of our palendrom");
    } else if (stack[i] == stack[stack.length - i - 1]) {
      console.log("it is our palandrom");
    } else {
      console.log("it is not a palandrom");
    }
  }
}
stacks(["a", "b", "c", "c", "b", "a"]);

solution:
it is the staring of our palendrom
it is our palandrom 
it is our palandrom 

answer2:

function stacks(n) {
  var stack = n;
  
  for (var i = 0; i < stack.length; i++) {
    if (stack[i] == stack[stack.length - 1] && i < 5) {
      console.log("it is the staring of our palendrom");
    }  else {
      console.log("it is not a palandrom");
    }
    stack.pop();
  }
}
stacks(["a", "b", "c", "c", "b", "a"]);

solution:
it is our palandrom 
it is our palandrom 
it is our palandrom 

answer3:

function palandrom(value) {
  var stack = [];
  for (var i = 0; i < value.length; i++) {
    stack.push(value[i]);
  }
  var i = 0;
  while (i < stack.length) {
    if (stack[i] != stack[stack.length - 1]) {
      return "it is not a palandrom";
    } else {
      i++;
      stack.pop();
    }
  }
  return "it is a palandrom";
}
console.log(palandrom("abccba")); ------> it is a palandrom
console.log(palandrom("abcaby")); ------> it is not a palandrom
console.log(palandrom("abcaca")); ------> it is not a palandrom

question:
"123869" ----> stack -----> remove 1/2 ----> output>> 1, 2,3

answer:

function half(value) {
  var stack = [];
  for (var i = 0; i < value.length; i++) {
    stack.push(value[i]);
  }
  var i = 0;
  while (i <= stack.length) {
    if (i <= stack.length / 2) {
      stack.pop();
    }
    i++;
  }
  console.log(stack);
}

half("123869");

solution:
[ '1', '2', '3' ]

question:
"avinas" ----> stack ---> remove half of stack from end ---> output>>a,v,i

answer:

function half(value) {
  var stack = [];
  for (var i = 0; i < value.length; i++) {
    stack.push(value[i]);
  }
  var i = 0;
  while (i < stack.length) {
    if (i <= stack.length / 2) {
      stack.pop();
    }
    i++;
  }
  console.log(stack);
}

half("avinash");

solution: 
[ 'a', 'v', 'i' ]



question:
"avinash" ----> stack ---> remove half of stack from end(stack/2) ---> output>>a,v,i,n

answer1:

function half(value) {
  var stack = [];
  for (var i = 0; i < value.length; i++) {
    stack.push(value[i]);
  }
  var i = 0;
  while (i < stack.length) {
    if (i <= stack.length / 2) {
      stack.pop();
    }
    i++;
  }
  console.log(stack);
}

half("avinash");

solution:
[ 'a', 'v', 'i', 'n' ]


answer2: 

function half(value) {
  var stack = [];
  for (var i = 0; i < value.length; i++) {
    stack.push(value[i]);
  }
  var i = 0;
  while (i < stack.length) {
    if (i <= stack.length / 2) {
      stack.pop();
    }
    i++;
  }
  for (var v of stack) {
    console.log(v);
  }
}

half("avinash");

solution: a;
v;
i;
n;


question:
10823 ----> stack ---> output>>3,2,8,0,1

answer1: ----> by me  (doubt)

function reverse(value) {
  var cnvrt = value.toString();
  var stack = [];
  for (var i = 0; i < cnvrt.length; i++) {
    stack.push(cnvrt[i]);
  }
  var j = 0;
  for (var i = stack.length - 1; i >= 0; i--) {
    stack[j] = stack[i];
    j++;
  }
  console.log(stack);
}
reverse(10823);

solution:
[ '3', '2', '8', '2', '3' ]

answer2: -----> by sir

Note: (summary how to solve)
10823 % 10 ----> reminder----> 3 -----> stack.push(3)
1082 % 10 ------> reminder ----> 2 -----> stack.push(2)
108 % 10 ------> reminder ------> 8  -----> stack.push(8)
..
..
..

function revrse(value) {
  var stack = [];

  for (var i = 0; i < 5; i++) {
    var x = value % 10;
    stack.push(x);
    value = parseInt(value / 10);
  }
  console.log(stack);
}
revrse(10823);

solution:
[ 3, 2, 8, 0, 1 ]

Note:
2080/10 ---> 208.0
208/10 -----> 20.8
20/10 ------> 2.0

how to remove decimal value when i divide n by any number. i just only want integer value for this we use here parseInt()

parseInt(2080/10) -----> 208
parseInt(208/10) -------> 20
parseInt(20/10) ------> 2

-------------------------------------------------

2)- ****************QUEQUE ****************
HERE WE HAVE BOTH THE END IS OPENED

FIFO ----> FIRST IN FIRST OUT
LILO ----> LAST IN LAST OUT

                      ----------------------------
 shift<----------           !    !    !    !    !     <----------------PUSH
                          !    !    !    !    !
                      ----------------------------

                      ----------------------------
 unshift---------->           !    !    !    !    !     ---------------->POP
                          !    !    !    !    !
                      ----------------------------

DEFINATAION:
Queue is a data structure that work on first in first out principle.

All the methods is also same as stack.

how to performe queue operations:

var queuw = [];

push operation ----> queue.push();
pop operation ----> queue.shift();
peek(which you push first in queue that is peek/who pop first that is peek) operation ----> queue[first index];
size operation ----> queue.length();

var queue = [];

queue.push(6);
queue.push(7);
queue.push(8);
queue.push(9);

console.log(queue.shift()); ------> 6
console.log(queue.shift()); ------> 7
console.log(queue.shift()); ------> 8
console.log(queue.shift()); ------> 9

console.log(queue[0]); ------> undefine

console.log(queue.length); ------> 0

*/
