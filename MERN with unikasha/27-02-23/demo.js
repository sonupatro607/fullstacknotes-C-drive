/*
arr=[2,3]
for(var x in arr){
    console.log("for in loop on arr "+x)
}

for(var x of arr){
    console.log("for of loop on arr "+x)
}

1)-----> for Map

var amap=new Map()
amap.set("a",15)
amap.set("b",25)
for(var x in amap){
    console.log("for-in loo : "+x);    // for-in loop is not working in map
}
for(var x of amap){
    console.log(x);
    console.log("for of loop on map : x[0] is showing key "+x[0]+","+ " x[1] is showing value "+x[1])
}

solution1:
["a",15]  ----> [index(0), index(1)]
["b",25]

solution2:
15
25


for(var [key , value] of amap){

    console.log(key + " " + value );
    console.log("for of loop on map : " + amap.get(key));
}

solution:
a 15
for of loop on map : 15
b 25
for of loop on map : 25


function doJob(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
}
amap.forEach(doJob);

solution:
15 a Map(2) { 'a' => 15, 'b' => 25 }
25 b Map(2) { 'a' => 15, 'b' => 25 }



2) ----> for set

var nset=new Set()
nset.add(10)
nset.add(20)
for(var x in nset){
    console.log(x)    // for-in loop is not working in set
}
for (var value of nset) {
  console.log(value); // for-of loop is working in set (it gives value) 
}

solution:
10
20

function dojob(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
}
nset.forEach(dojob);

solution:
10 10 Set(2) { 10, 20 }     // indexing is not working in set instead of index it returns value again.
20 20 Set(2) { 10, 20 }

----------------------------------------------


*****************LINK LIST ***************************

#READ PDF FIRST THEN START QUESTION FROM BOTTOM#

question:
print 1 to 5 using link list.

answer:

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}
var start = new Node(1);

for (var i = 2; i < 6; i++) {
  var temp = start;

  var temp_node = new Node(i);

  while (temp.next != null) {
    temp = temp.next;
  }
  temp.next = temp_node;
}

var temp = start;
while (temp != null) {
  console.log(temp.value);
  temp = temp.next;
}

solotion:
1
2
3
4
5

question:
print A,B,C,D,E using Link list

answer:

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}
var start = new Node(String.fromCharCode(65));

for (var i = 66; i < 70; i++) {
  var temp = start;

  var temp_node = new Node(String.fromCharCode(i));

  while (temp.next != null) {
    temp = temp.next;
  }
  temp.next = temp_node;
}

var temp = start;
while (temp != null) {
  console.log(temp.value);
  temp = temp.next;
}

solution:
A
B
C
D
E

*/
