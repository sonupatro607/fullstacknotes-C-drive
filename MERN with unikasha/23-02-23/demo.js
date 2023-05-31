/*
question1:
arr = [2, 8, 9, 8, -1, 3, 5]
2,8,9 ----> take even number only from those 3 numbers and add that numbers --> 2+8 ---> 10
8,9,8 -----> 8+8 ---> 16 
9,8,-1 ----> 8 
8,-1,3 ----> 8
-1,3,5 -----> 0

find the maximum number out of sum of even 3 consicutive number.
[ 10, 16, 8, 8, 0 ] ------> maximum (16)

output:
16

answer:

var arr = [2, 8, 9, 8, -1, 3, 5];
var arr1 = [];

for (var i = 0; i < 5; i++) {
  var j = i;
  var sum = 0;
  while (j <= i + 2) {
    if (arr[j] % 2 == 0) {
      sum += arr[j];
    }
    j++;
  }
  arr1.push(sum);
}
console.log(arr1);  ----------> [ 10, 16, 8, 8, 0 ]

var max = arr1[0];
for (var k = 0; k < arr1.length; k++) {
  if (arr1[k] > max) {
    max = arr1[k];
  }
}
console.log(max); ----------> 16

solution:
[ 10, 16, 8, 8, 0 ]
16

-----------------------

question2:
quantity = [2, 8, 6, 9, 3];
price = [5, 7, 9, 8, 7];

5*2+7*8+9*6+9*8+7*3 
213

output:
213

answer:

var quantity = [2, 8, 6, 9, 3];
var price = [5, 7, 9, 8, 7];
var multi = [];
var sum = 0;
for (var i = 0; i < quantity.length; i++) {
  multi[i] = quantity[i] * price[i];
  sum += multi[i];
}
console.log(sum);

solution: 
213

-----------------------------

question3:
create map ----->{"A", 2,"B", 3,"C", 4,"D", 5,"E", 6}
insert value 
delete even numbers from map.

output:
3,5

answer:
var a = new Map();
a.set("A", 2);
a.set("B", 3);
a.set("C", 4);
a.set("D", 5);
a.set("E", 6);
a.forEach(doJob);
function doJob(value) {
  if (value % 2 == 0) {
    a.delete(value);
  } else {
    console.log(value);
  }
}

Solution: 
3
5

-----------------------------

question4:
create Map -----------> { 'A' => 8, "B" => 3,'C' => 4, 'D' => 5, 'E' => 6 }
insert value
delete lowest element from map.

output:
{ 'A' => 8, 'C' => 4, 'D' => 5, 'E' => 6 }

answer:

var lowestkey = " ";
var min = 100;
var a = new Map();
a.set("A", 8);
a.set("B", 3);
a.set("C", 4);
a.set("D", 5);
a.set("E", 6);

a.forEach(doJob);

function doJob(value, key) {
  if (value < min) {
    min = value;
    lowestkey = key;
  }
}
console.log(min);
a.delete(min);
a.delete(lowestkey);
console.log(a);  -----------> { 'A' => 8, 'C' => 4, 'D' => 5, 'E' => 6 }

solution:
{ 'A' => 8, 'C' => 4, 'D' => 5, 'E' => 6 }

-----------------------------------

question5:
arr = [2, 8, 9, 8, -1, 3, 5]
2,8,9 ----> take  3 numbers and add that numbers --> 2+8+9 ---> 19
8,9,8 -----> 8+9+8 ---> 25
9,8,-1 ----> 9+8+-1 ----> 16
8,-1,3 ----> 8+-1+3 -----> 10
-1,3,5 -----> -1+3+5 -----> 7

output:
[
    19,  25,  16, 10,
     7, NaN, NaN
  ]
  maximum ---> 25

answer:

var arr = [2, 8, 9, 8, -1, 3, 5];
var arr1 = [];
for (var i = 0; i < arr.length; i++) {
  var j = i;
  var sum = 0;
  while (j < i + 3) {
    sum += arr[j];
    j++;
  }
  arr1.push(sum);
}
console.log(arr1);

var max = arr1[0];
for (var k = 0; k < arr1.length; k++) {
  if (arr1[k] > max) {
    max = arr1[k];
  }
}
console.log(max);

solution:
[
    19,  25,  16, 10,
     7, NaN, NaN
  ]
 maximum-> 25

 --------------------------------------

 question6:
 arr1 = [3, 8, 9, 15];
 arr2 = [6, -1, 3, 2];

 cross multiplication

3*2+8*3+9*(-1)+15*6
111

 output:
111

 answer:

var arr1 = [3, 8, 9, 15];
var arr2 = [6, -1, 3, 2];
var sum = 0;
for (var i = 0; i < arr1.length; i++) {
  sum += arr1[i] * arr2[arr2.length - 1 - i];
}
console.log(sum);

solution: 
111

*/
