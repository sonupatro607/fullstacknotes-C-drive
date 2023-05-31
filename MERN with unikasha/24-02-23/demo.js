/*
**************HOSTING*************************

ability to use a variable even before the delceration and inialization.

var -----> hoisting
let -------> not hoisting
const ------> not hoisting

Example:

1)- for "var"-->

console.log(a);  ---------> undefine

var a = 10;

2)- for "let"-->

console.log(b); ---------> Error

let b = 20;

3)- for "const"-->

console.log(c);  ---------> Error

const c = 30;




var x = new Map();
x.set("a", 8);
x.set("b", 9);
x.set("c", -1);
x.set("d", 13);
x.set("e", 18);

for (let [key] of x) {
  console.log(x.get(key));
}

#### DIFFERENT instance we are going to see of hoisting##

1)-
 for "var"-->

console.log(a);  ---------> undefine

var a = 10;

 for "let"-->

console.log(b); ---------> Error

let b = 20;

 for "const"-->

console.log(c);  ---------> Error

const c = 30;

2)- for in loop inside the Map

var x = new Map();
x.set("a", 8);
x.set("b", 9);
x.set("c", -1);
x.set("d", 13);
x.set("e", 18);


## wrong approach of for-of loop in map

for (let key of x) {
  console.log(x.get(key));
}

output:
undefine
undefine
undefine
undefine
undefine

for (let key of x) {
  console.log(key);
}

output:
["a", 8] ---> [index(0), index(1)]
["b", 9]
["c", -1]
["d", 13]
["e", 18]

for (let key of x) {
  console.log(x.get(key[0]));
}

solution:
8
9
-1
13
18

NOTE:
we cannot use direct key it will not produce desired output.

bcz it insitally trying to access everything from map that why
 we need to rapping it into to the square bracket.

## correct approach of for-of loop in map


for (let [key] of x) {
  console.log(x.get(key));
}

output:
8
9
-1
13
18

for (let key of x) {
  console.log(x.get(key));
}



question: 
map = { 'a' => 8, 'b' => 9, 'c' => -1, 'd' => 13, 'e' => 18 }
remove two lowest values from map 

output:
{ 'b' => 9, 'd' => 13, 'e' => 18 }

answer:

var flkey = " ";
var firstlowest = 100;
var slkey = " ";
var secondlowest = 100;
var x = new Map();
x.set("a", 8);
x.set("b", 9);
x.set("c", -1);
x.set("d", 13);
x.set("e", 18);

for (var [key] of x) {
  if (x.get(key) < firstlowest) {
    firstlowest = x.get(key);
    flkey = key;
  } else if (x.get(key) < secondlowest) {
    secondlowest = x.get(key);
    slkey = key;
  }
}
x.delete(flkey);
x.delete(slkey);
console.log(x);

solution:
{ 'a' => 8, 'd' => 13, 'e' => 18 }

question:
map = { 'a' => 8, 'b' => 9, 'c' => -1, 'd' => 13, 'e' => 18 }
remove even values from map

output:
{ 'b' => 9, 'c' => -1, 'd' => 13 }


answer:

var x = new Map();
x.set("a", 8);
x.set("b", 9);
x.set("c", -1);
x.set("d", 13);
x.set("e", 18);
var evenkey = " ";

for (var [key] of x) {
  if (x.get(key) % 2 == 0) {
    evenkey = key;
    x.delete(evenkey);
  }
}
console.log(x);

solution:
{ 'b' => 9, 'c' => -1, 'd' => 13 }

*/
