/*

QUESTION:

var arr = [1,2,3];

var arr2 = arr;

arr2.push(8);

final solution:
arr = arr2 = [1,2,3,8]


QUESTION:
1)-
BY ME:

var arr = [
  [2, 3, 4, 8],
  [6, 8, 9, 5],
  [3, 2, 1, 2],
];
var row = 3;
var column = 4;

for (let i = 0; i < row; i++) {
  for (let j = 0; j < column; j++) {
    console.log(arr[i][j]);
  }
}

BY SIR:

var arr = [
  [2, 3, 4, 8],
  [6, 8, 9, 5],
  [3, 2, 1, 2],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);                     // arr[row(i)][column(j)]--> row is static and cloumn is keep changing.
  }
}

solution:
2,3,4,8,6,8,9,5,3,2,1,2

2)-
a)- print --> 1,8,3,7,8,2,6,9,5
b)- print ---> sum of all the number in 2D-array 

var arr = [
  [1, 7, 6],
  [8, 8, 9],
  [3, 2, 5],
];

var sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[j][i]);           // arr[row(j)][column(i)]---> row is keep changing and column is static
    sum += arr[j][i];
  }
}
console.log(sum);

solution:
a)- 1,8,3,7,8,2,6,9,5
b)- 49


------------------------------------------

**** WHILE - LOOP ******

syntax:

while(condition){
    doing job
}

EXAMPLE:
1)-
var i = 0;
while(i<=10){
  console.log("hi");
}

solution:
0,0,0,0.................infinite times

2)-
var i = 0;
while(i<=10){
  console.log('hello");
  i+=1;
}

solution:
hello, hello ..................hello(10 times)

3)-
var i = 0;
while(i<=10){
  console.log(i);
  i+=2;
}

solution:
0,2,4,6,8,10

QUESTIONS:
a)- print odd numbers in the range of 1 to 100.
b)- print multiplication of 5 in the range of 1 to 100.
NOTE:
you have to print it both using while and for loop both.

1)-
#using while-loop

var i = 1;
while(i <= 100) {
  console.log(i);
  i += 2;
}

#using for-loop

for(var i = 1;i <= 100; i+=2) {
  console.log(i);
}

2)-
#using while-loop

var a = 5;
var b = 0;
multi = a*b

while (multi <= 100) {
  console.log(multi);
  b+=1;
  multi = a*b;
}

#using for-loop

for(var a = 5, b = 0; a*b <= 100; b++){
  console.log(a*b);
}

----------------------------------------------

***** DO-WHILE-LOOP*******

do{
  job 
}while(condition);

NOTE:
Job will be performed first and then as long as the condition is true job will keeps on executing.
                       or
execute output atleast once then it will check the condition.

Example:
1)-
var i =10;

do{
  console.log(i);
  i-=1;
}while(i>=5);

solution:
10,9,8,7,6,5

--------------------------------------

*******OBJECTS **************

it is nothing but the data structure which is used to hold the data of (key : value) pair.
                                    or
      first it convert the key into string then it can only access the value.

EXAMPLE:
1)-
const person = {
  name : "avinashpatro",
  age :  24
  height : 5.8
}

console.log(typeOf person); -------->  object

# Access the key-value pair
a)- 1st way

console.log(person.name); ------> avinashpatro
console.log(person.age); ------> 24
console.log(person.height); ------> 5.8

b)- 2nd way

console.log(person["name"]); ------> avinashpatro- 
console.log(person["age"]); ------> 24
console.log(person["height"]); ------> 5.8

#inserting the key-value pair into the object

person["passport"] = "yes";
person["addharcard"] = "yes";
person[xyz] -----> produce error  -----------> (bcz object )

console.log(person); ---------> {name:"avinashaptro",age : 24, height: 5.8, passport : "yes", addharcard : "yes"}

# updating the value of keys

console.log(person["name"]);  ----------> avinashpatro (current name)
a)- 1st way
person["name"] = "akashpatro";  --------> update the name
console.log(person["name"]); --------> akashpatro
b)- 2nd way
person.name = "ravisingh"; ----------> update the name
console.log(person["name"]); ------------> ravisingh

2)-object --> nexted object

const person = {
   person1 : {
    name : "avinashpatro",
    age : 24,
    height : 5.9
   }
}

solution:
console.log(person.person1.name); ----> avinashpatro
console.log(person.person1); ------> {name : "avinashpatro", age : 24, height : 5.9}
console.log(person["person1"]["age"]); -----> 24
person["person1"]["xyz"] = "samosa";  -----> inserting new key-value pair
console.log(person["person1"]);  -------> {name: 'avinashpatro', age: 24, height: 5.9, xyz: 'samosa'}
person["person1"]["age"] = 26; ------> updating the value of key
console.log(person["person1"]); -------> {name: 'avinashpatro', age: 26, height: 5.9, xyz: 'samosa'}


3)- 

const person = {
  name : "avinashpatro",     -------------> these are lost
  "name" : "akashpatro",

  age :  24,     -------------> these are lost
  "age" : 26,

  height : 5.8      -------------> these are lost
  "height" : 6.7
}

console.log(person); ---------> {name: akashpatro, age : 26, height : 6.7}---> (bcz object converts the key into string that the reson it gives the first priority to the string key)


*/
