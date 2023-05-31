/* **** CONTAINER TO HOLD THE DATA CAN BE THREE TYPE****
1. var 
2. let 
3. const 

**SYNTAX OF CONTAINER TO HOLD THE VALUE**

CONATAINER(VAR, LET, CONST) containerName(it can be anything)= assigned value;

EXAMPLES:
1)- FOR VAR -->
var a;
var firstName; -----> (container name should be in camel casing )
var first Name; ----> (invalid container name ) ---> (space is not allowed while giving a container name)
var first_name; ------> (use underscore instead of spacing b/w two words)
var first_Name; 

2)- FOR LET -->
let a;
let firstName; -----> (container name should be in camel casing )
let first Name; ----> (invalid container name ) ---> (space is not allowed while giving a container name)
let first_name; ------> (use underscore instead of spacing b/w two words)
let first_Name;

1)- FOR CONST -->
const a;
const firstName; -----> (container name should be in camel casing )
const first Name; ----> (invalid container name ) ---> (space is not allowed while giving a container name)
const first_name; ------> (use underscore instead of spacing b/w two words)
const first_Name; 


** DIFFERENCE BETWEEN OF VAR, LET AND CONST ? ***
# these are container which store the data.
# these are we also called variable.

-- var v/s let v/s const --
 # declaring and re-declaring
 # assigning and re-assigning

 EXAMPLES:
 1)- FOR VAR --->

 var a; ---> declaring
 var a; ----> re-declaring 

 a = 20; ----> assigning a value to the container a 
 a = 21;  -----> re-assigning a value to the container a 

 NOTE:
container of var type can be re-declared as well as re-assigned also.

 2)- FOR LET --->

 let a; ---> declaring
 let a; ----> re-declaring (container of let type, cannot be re-declared it)

 a = 20; ----> assigning a value to the container a 
 a = 21;  -----> re-assigning a value to the container a 

 NOTE:
container of let type can be re-assigned but not re-declared.

 3)- FOR CONST ---> it can neither be re-assigned nor be re-declared

 const a; ---> declaring
 const a; ----> re-declaring (container of const type, cannot be re-declared it)

 a = 20; ----> assigning a value to the container a 
 a = 21;  -----> re-assigning a value to the container a (container of const type, cannot be re-assign a value to the container also)

 NOTE:
container of const type, it can neither be re-assigned nor be re-declared

QUESTION:
1)- FOR VAR-->

var a; ---> declared 

a = 20; ----> assigned 

a = 21; ----> re-assigned 

var a; ----> re-declared

console.log(a); -----------> 21

2)- FOR LET-->

let a; ---> declared 

a = 20; ----> assigned 

a = 21; ----> re-assigned 

let a; ----> re-declared (let type, cannot be re-declared) (produce error)

console.log(a); -----------> 21


3)- FOR CONST-->

const a; ---> declared 

a = 20; ----> assigned 

a = 21; ----> re-assigned (const type, can be re-assigned) (produce error)

const a; ----> re-declared (const type, can be re-declared) (produce error)

console.log(a); -----------> 20

-----------------------------------------------------------------

*** OPERATORS IN JAVASCRIPT****

let a = 20; ----> (assigining a value 20 to a, = is an assignment operator)

let sum = 20+39; ----> (+ is a addition operator)

let mul = 20*39; ----> (* is a multiplication operator)

let expo = 20**39; ----> (** is a expontial operator)

let sub = 20-39; ----> (- is a substraction operator)

let div = 20/39; ----> (+ is a division operator)

let mod = 20%39; ----> (+ is a modulo operator)


----------------------------------------------------------

*** INCREMENT AND DECREMENT OPERATOR ****

INCREMENT ----> ++     (re-assigning a value to the container)
DECREMENT -----> --    (re-assigning a value to the container)

a++; >>> a = a+1 

EXAMPLE:
1)- FOR INCREMENT OPERATOR
a=10;
a++ / a=a+1 ---> a=10+1 ---> a=10

2)- FOR DECREMENT OPERATOR
a=10;
a-- / a=a-1 ---> a=10-1 ---> a=9

NOTE: 
# increment and decremet operator,we can only be use with variable/container.

# increment and decrement operator, we cannot use with constants.

EXAMPLE:
var a = 10;
let b = 20;
const c = 30; (we can neither be re-assigned a value nor be re-declared)


a++ / a=a+1 --> a=10+1 --> a=11
a-- / a=a-1 --> a=10-1 --> a=9

b++ / b=b+1 --> b=20+1 --> b=21
b-- / b=b-1 --> b=20-1 --> b=19

c++ / c=c+1 ---> produce error (because we cannot re-assign the value of const type of container)
c-- / c=c-1 ---> produce error (because we cannot re-assign the value of const type of container)

##increment and decrement operator, we cannot use with constants.
var c = 30++; ------------> produce error

*/
