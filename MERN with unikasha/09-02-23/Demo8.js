/*

************METHODS OF ARRAY ************

var arr = [1,2,3,4,5];

1)- arr.length ----> it will return the lemgth of array.

2)- arr.push(7) ----->it will add an element at end of the array

solution:
arr --> [1,2,3,4,5,7]

3)- arr.pop() -----> it extract the element from the end of the array

arr -->[1,2,3,4]

4)- arr.shift() ----> it extract the element from beginning of the arrray

arr ---> [2,3,4,5]

5)-arr.unshift(90) ----> it add an element at the beginning.

arr ---> [90,1,2,3,4,5]

6)-delete ---> it will replace the index value with undefine/empty.

arr = [1,2,3,4]

arr.length ----> 4

delete arr[1];

arr --> [1,empty,3,4]

arr.length ---> 4

7)-splice() ----> it will delete the element from starting to counting element and also replacing deleting element with 3rd argument whatever that is.

a)-
arr.splice(starting index number , counting element)

arr.splice(1,2);

arr---> [1,4,5]

b)-
arr.splice(0,2,8,9);

arr ----> [8,9,3,4,5]

c)-
arr.splice(0,2,"avinash");

arr ---> [avinash,3,4,5]

NOTE:
From index 0,2 element will be deleted and 8,9 or "avinash" will be added at the place of removed element into the array.

8)- slice()

a)-
arr.slice(staring index no., ending index no.) ----. it will return strating index to ending index -1 in the form of another array  but it will not change anything in our original array.

arr.slice(0,3); -----> [1,2,3]

arr ----> [1,2,3,4,5]

arr.length ----> 5

b)-
arr.slice(1,100); ----> [2,3,4,5]

arr ---> [1,2,3,4,5]

9)-indexOf() ----> it will return first occurance of that value index.

var arr = [0,3,3,5.4];

syntax:

arr.indexOf(value)

arr.indexOf(3); -----> 1(index no.)



********************FUNCTION IN JAVASCRIPT*******************
1)- funtion---> doJob is a function to print "avinashpatro" in console.

function doJob(){
    console.log("avinashpatro")
}

doJob();        // calling to function (doJob)


QUESTIONS:
1)-PRINT all the odd numbers in b/w 0 to 100.

function odd(){
   
    for(let i = 0; i <= 100; i++){
    if(i % 2=1){
        console.log(i)
    }
    }
}

odd();

### ARGUMENT AND PARAMETERS IN FUNCTION###

function addTwoNumber(arguments){
console.log(a+b)
}

addTwoNumber(parameter);

Example:
function addTwoNumber(a,b){
console.log(a+b)
}

addTwoNumber(10+10)

QUESTION:
WRITE A FINCTON TO PRINT FACTORIAL OF NUMBER.

function factor(){
    var a = 5;
    for(let i =4; i>0; i--){
        a*=i
    }
    console.log(a);
}

factor();

### return value #####

function addTwoNumber(a,b){

    return a+b;
}

var sum = addTwoNumber(10, 10);

console.log(sum): ------> 20


##### multiple arguments ######

... ----> spread operator


function addNumbers(...args){
    return args; ----> it will return it in array 
}

var add = addNumbers(); 
console.log(add); ----->[]

var add =addNumbers(1);
console.log(add); ----> [1]

var add =addNumbers(1,2);
console.log(add); ----> [1,2]

var add =addNumbers(1,2,3);
console.log(add); ------>[1,2,3]

### atleast 2 argument and then any number of argument can be ######

function doJob(a,b,..args){

}

doJob(...args , a,b); ----> produce error

doJob(a,...args,b); ------> produce error

how we can copy all the elements from one variable to another variable?

var arr = [1,2,3,4,5,6];

##NOT CORRECT APPROACH:

var arr2 = arr; -----> what it does it ia also pointing to the same array 
 
solution:
arr---->[1,2,3,4,5,6]<-----arr2

##CORRECT APPROACH:

var arr2 = [...arr]; -----> it will copy the whole array from arr and paste it into the arr2.

console.log(arr2); -----> [1,2,3,4,5,6]

*/
