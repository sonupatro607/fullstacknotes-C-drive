/*
question1:
Given a map find if a key exist in that map for with the value is >=60 but you have to print "there is exist greater or equal to 60" if you have >=60 in your map otherwise you have to print "there is not exist greater or equal to 60".
{ 'a' => 3, 'b' => 6, 'c' => 90, 'd' => 65 }
answer:

var x = new Map();

x.set("a", 3);
x.set("b", 6);
x.set("c",90 );
x.set("d", 65);

//console.log(x); -----------> { 'a' => 3, 'b' => 6, 'c' => 90, 'd' => 65 }

isAnsFound = false;

function doJob(value, key) {
  if (isAnsFound === true) {
    return;
  }
  if (value >= 60) {
    console.log("there is exist greater or equal to 60 ");
    isAnsFound = true;
  }
}

x.forEach(doJob);

if (isAnsFound === false) {
  console.log("there is not exist greater or equal to 60 ");
}

solution:
there is exist greater or equal to 60.

question2:

Given a map find if a key exist in that map for with the value is >=60 but you have to print "there is exist greater or equal to 60" if you have >=60 in your map otherwise you have to print "there is not exist greater or equal to 60".
{ 'a' => 3, 'b' => 6, 'c' => 9, 'd' => 6 }
answer:

var x = new Map();

x.set("a", 3);
x.set("b", 6);
x.set("c",9 );
x.set("d", 6);

//console.log(x); -----------> { 'a' => 3, 'b' => 6, 'c' => 9, 'd' => 6 }

isAnsFound = false;

function doJob(value, key) {
  if (isAnsFound === true) {
    return;
  }
  if (value >= 60) {
    console.log("there is exist greater or equal to 60 ");
    isAnsFound = true;
  }
}

x.forEach(doJob);

if (isAnsFound === false) {
  console.log("there is not exist greater or equal to 60 ");
}

solution:
there is not exist greater or equal to 60.

question3:
Given a map find sum of all odd values and even values.
{ 'a' => 8, 'b' => 9, 'c' => 17, 'd' => 13 }

output:
evenSum --> 8
oddSum ----> 39

answer1:

var x = new Map();

x.set("a", 8);
x.set("b", 9);
x.set("c", 17);
x.set("d", 13);

//console.log(x); ----------> { 'a' => 8, 'b' => 9, 'c' => 17, 'd' => 13 }

var evenSum = 0;
var oddSum = 0;

function doJob(value, key, mymap) {
  if (value % 2 == 0) {
    // (for even sum)
    evenSum += value;
  }
  if (value % 2 == 1) {
    // (for odd sum)
    oddSum += value;
  }
}
x.forEach(doJob);

console.log(evenSum);
console.log(oddSum);

solution: 
8
39

answer2:

var x = new Map();

x.set("a", 8);
x.set("b", 9);
x.set("c", 17);
x.set("d", 13);

//console.log(x); -------> { 'a' => 8, 'b' => 9, 'c' => 17, 'd' => 13 }

var evenSum = 0;
var oddSum = 0;

function doJob(value, key, mymap) {
  if (value % 2 == 0) {
    // (for even sum)
    evenSum += value;
  }else{
    // (for odd sum)
    oddSum += value;
  }
}
x.forEach(doJob);

console.log(evenSum);
console.log(oddSum);

solution: 
8
39


question3:
(given map){ 'a' => 3, 'b' => 4, 'c' => , 6,'d' => 8 } ------> [a,b,c,d,3,4,6,8](output)

answer1:

var x = new Map();

x.set("a", 3);
x.set("b", 4);
x.set("c", 6);
x.set("d", 8);

//console.log(x); -------> { 'a' => 3, 'b' => 4, 'c' => , 6,'d' => 8 }

var key_arr = [];
var value_arr = [];

function doJob(value, key, mymap) {
  key_arr.push(key);
  value_arr.push(value);
}

x.forEach(doJob);

console.log(key_arr); //------> [ 'a', 'b', 'c', 'd' ]
console.log(value_arr); //------> [ 3, 4, 6, 8 ]
console.log(key_arr + "," + value_arr); //------> a,b,c,d,3,4,6,8

solution:
a,b,c,d,3,4,6,8

answer2:



var x = new Map();

x.set("a", 3);
x.set("b", 4);
x.set("c", 6);
x.set("d", 8);

//console.log(x); -------> { 'a' => 3, 'b' => 4, 'c' => , 6,'d' => 8 }

var key_arr = [];
var value_arr = [];

function doJob(value, key, mymap) {
  key_arr.push(key);
  value_arr.push(value);
}

x.forEach(doJob);

var ans = [];
for (var i in key_arr) {
  ans.push(key_arr[i]);
}
for (var i in value_arr) {
  ans.push(value_arr[i]);
}

console.log(ans);

solution:
 ["a", "b", "c", "d", 3, 4, 6, 8];



var x = new Map();

var arr = [
  ["A", "B", "C"],
  [2, 3, 4],
  [5, 6, 7],
];

var n = 3;

for (var i = 0; i < n; i++) {
  var key = "";
  var value = 0;
  for (var j = 0; j < n; j++) {
    if (j == 0) {
      key = arr[j][i];
    } else {
      value += arr[j][i];
    }
  }
  x.set(key, value);
}

console.log(x); //----------> { 'A' => 7, 'B' => 9, 'C' => 11 }(map)



var x = new Map();

var arr = [
  ["A", "B", "C"],
  [2, 3, 4],
  [5, 6, 7],
];


answer2: (doubt have to ask with sir) --------> wrong way
var x = new Map();

var arr = [
  ["A", "B", "C"],
  [2, 3, 4],
  [5, 6, 7],
];

var n = 3;
var key = "";
var value = 0;

for (var i = 0; i < n; i++) {
  for (var j = 0; j < n; j++) {
    if (j == 0) {
      key = arr[j][i];
    } else {
      value += arr[j][i];
    }
  }
  x.set(key, value);
}

console.log(x);

 */
