/*
question: 
find the maximun and minimum value of array.

answer 1: ( best appropriate answer)

var arr = [67, 09, 65456, -78, 5];
var max = arr[0];
var min = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > arr[0]) {
    max = arr[i];
  }
  if (arr[i] < arr[0]) {
    min = arr[i];
  }
}
console.log(max);
console.log(min);

solution:
65456
5

-------------------------------------

question:
reverse the string

answer:

var str = "avinash";

var emp = " ";

for(var i = str.length-1; i >=0; i--){
  emp+=str[i];
}

console.log(emp);

solution:
hsanina

---------------------------------

******FOR - OF - LOOP **********88
var arr = [1,2,3,4,5];

for(var v of arr){
  console.log(v); 
}

solution:
1
2
3
4
5

-----------------------------------

********arrow and anonymous function**********

x ----> arrow function

var x = ()=>{

}



anonymous function ----> it is nothing but there is no name of that fuction.

()=>{

}

IIFE ---> imediatly invoked function execution

(
  ()=>{
     console.log("hello");
}
)();


-----------------------------------------------------------------
####################DATA STRUCTURE#####################

1)-***********STACK *********************
HERE WE HAVE ONLY ONE OPEN END OTHER ONE IS CLOSED WITH WALL.

FILO --> FIRST IN LAST OUT
LIFO ---> LAST IN FIRST OUT

####METHOS OF STACK ###
1)- push ----> insert a value in your stack.

2)- pop ----> extract a value from your stack..

3)- peek ----> tell me the value that is on top(which you push last that is peek in stack but just oposite of queue)(who pop first that is peek ).

4)- size ---> tell me sixe of youe stack.

example:

-1                 -30
8         8         8
3         3         3

push(3)
push(8)
push(-1)
pop() ----> -1 (remove -1 from our stack)
size() -----> 2
peek() ------> 8 (peek will not remove any element)
size() -----> 2
push(-30)
size() -----> 3


-------------------------------

***********DATA STRUCTURE ****************

primitive -----> 
non- primitive ----->

##example of stacK:

var stack = [];

function push(val){
  stack.push(val);

}

function printstack(){
  for(var i =0; i < stack.length; i++){
      process.stdout.write(stack[i]);

  }
}
function pop(){
  console.log(stack.pop());
}

function size(){
  console.log(stack.size);
}

function peek(){
  if(stack.length == 0){
   console.log("stack is empty")
  }else{
    console.log(stack[stack.length-1])
  }
}


push(30);
push(20);
push(10);
printstack(); -----> 30,20,10
pop(); 
printstack();-------> 30,20
size(); -----> 2
peek(); -----> 20
size(); -------> 2

#############################

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

*/
