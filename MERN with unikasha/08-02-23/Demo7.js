/*

QUESTION:

var arr = [1, [2, 3, null, 4], [null], 5];

OUTPUT:
1,2,3,null,4,null,5


aNSWER:

for (let i = 0; i < arr.length; i++) {
  if (i == 0 || i == 3) {
    console.log(arr[i]);
    continue;
  }
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

SOLUTION:
1
2
3
null
4
null
5

QUESTION:

var arr = [1, [2, 3, null, 4], [null], 5];

output:
1,2,3,4,5

answer:

for (let i = 0; i < arr.length; i++) {
  if (i == 0 || i == 3) {
    console.log(arr[i]);
    continue;
  }
  for (let j = 0; j < arr[i].length; j++) {
    var say = arr[i][j];
    if (say !== null) {
      console.log(arr[i][j]);
    }
  }
}

solution:
1
2
3
4
5

---------------------------------------

****** FOR-IN- LOOP ***********

QUESTION:
1)- FOR-IN-LOOP IN OBJECT
WE HAVE AN OBJECT HOW TO ACCESS THE KEY AND VALUE USING FOR-IN-LOOP

const person = {
    name : "avinashpatro",
    age : 24,
    height : "5ft 8 inch"
}

ANSWER:
for(let key in person){
    console.log(key,person[key]);
}

SOLUTION:
name avinashpatro, 
age  24,
height  5ft 8 inc

2)- FOR-IN-LOOP IN ARRAY
WE HAVE AN array HOW TO ACCESS THE element of array USING FOR-IN-LOOP.

var arr = [2,3,4,1,5,6,7,8];

answer:
for(var index in arr){
    console.log(index, arr[index]);
}

solution:
o 2 
1 3 
2 4 
3 1 
4 5
5 6
6 7 
7 8

QUESTIONS:
1)- to find sum of all element of an array using for-in loop [3,8,-1, 8, 9].

answer:

var arr = [3,8,-1, 8, 9];

var sum = 0;

for (var index in arr) {
  sum += arr[index];
}

console.log(sum);

solution:
27

2)-TO CREATE A STRING FROM ["s", "u", "d", "h", "a"] USING FOR-IN-LOOP.

ANSWER:


var dist = ["s", "u", "d", "h", "a"];

var sum = "";

for (let index in dist) {
  sum += dist[index];
}

console.log("string : " + sum);

solution: 
string: sudha

----------------------------------------------------

*******forEach-loop / for-0f loop *************

Example:

var arr1 = [5, 6, 3, 4, 56, 7, 8, 9];

arr1.forEach(myFunction); // it will call myfunction as much as no. of elements we have given in the array.

function myFunction() {
  console.log("avinash patro");
}
solution:
avinash patro
avinash patro
.
.
8 times

var arr1 = [5, 6, 3, 4, 56, 7, 8, 9];

arr1.forEach(myFunction); // it will call myfunction as much as no. of elements present in the given array.

// what forEach does ? --> it will pass three arguments with myfunction(value, index, array) automatically 

function myFunction(value, index, array) {

    console.log(value, index, array);

 myFunction's parameters will be recieve the argument in how many no. of time,as much as no of element present in the given array.
 #1- 5, 0 , [5, 6, 3, 4, 56, 7, 8, 9]
 #2- 6, 1, [5, 6, 3, 4, 56, 7, 8, 9]
 #3- 3, 2, [5, 6, 3, 4, 56, 7, 8, 9]
 #4- 4, 3, [5, 6, 3, 4, 56, 7, 8, 9]
 #5- 56, 4, [5, 6, 3, 4, 56, 7, 8, 9]
 #6- 7, 5, [5, 6, 3, 4, 56, 7, 8, 9]
 #7- 8, 6, [5, 6, 3, 4, 56, 7, 8, 9]
 #8- 9, 7, [5, 6, 3, 4, 56, 7, 8, 9]

}

--------------------------------------------------

******* DATE() object(INBUILT OBJECT in javascript) ***************

how many way to present date() object in javascript.

Date();
Date("23-02-08");
Date(year,month);
Date(year,month,days);
Date(year,month,days,hours);
Date(year,month,days,hours,minutes);
Date(year,month,days,hours,minutes,seconds);
Date(year,month,days,hours,minutes,seconds,miliseconds);

####### convert(Date object ----> string) ##########
1)- 1st way 
var date = new Date();

var date1 = string(date); ----------> (it will convert object to string)

2)- 2nd way
var date = new Date();

console.log(date.toDateString()); ---------> (it will convert object to string)

EXAMPLE:
1)-
var date = new Date();

console.log(date)  ----> 2023-02-08T17:45:00Z;

1)-
var date = new Date("2023-02-08");

console.log(date)  -----> 2023-02-08T00:00:00Z;

##
var date = new Date("2023-02-08");   // we cannot use slice() method on Date object/object, we can use it only on string

date1 = string(date);

console.log(date.slice(0,10)); ------> 2023-02-08/web feb 08



******************METHODS ON DATE OBJECT IN JAVASCRIPT*****************************

getYear;
getMonth;
getDay;
getDate;
getTime;
getHours;
getMinutes;
getSeconds;
getMiliseconds;
.
.
.
etc

EXAMPLE:

var date = new Date();


console.log(typeOf date); -----------> object


console.log(date.getHours); ---------> 22
console.log(date.getMinutes); ---------> 45
console.log(date.getSeconds); ---------> 56
console.log(date.getDate); ---------> 08-02-2023
console.log(date.getDay); ---------> wed
.
.
.
etc



*/
