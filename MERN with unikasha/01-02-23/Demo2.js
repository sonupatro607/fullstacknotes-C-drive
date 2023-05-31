/*

*** ASSIGNMENT OPERATOR ***
= ---> assignment operator

var a;
a = 20; -----> 20 is being assigned to a

------------------------------

# += ----> a+=20; a=a+20;

# -= -----> a-=21; a=a-21;

# *= ------> a*=30; a=a*30;

# %= -------> a%=6; a=a%6;

# **= -------> a**=8; a=a**8;

QUESTION:
X=3 , Y = 5

1)- X+=Y
SOLUTION:
X=X+Y; X=3+5=8

2)- X**=Y
SOLUTION:
X=X**Y; X=3**5=3^5

3)- X-=Y+20
SOLUTION:
X=X-(Y+20); X=X-Y-20; X=3-5-20; X=3-25; X=-22

4)- X=++Y
5)- X= ++Y
6)- X%=(Y+3)
SOLUTION:
X=X%(Y+3); X=3%(5+3); X=3%8; X=3

---------------------------------------
var a = 20;

a++ ---> post increment
++a  ---> pre increment

a--  ---> post decrement
--a   ---> pre decrement

PRE-INCREMENT ---->  first increase the value by 1 and then assign the value

POST-INCREMENT ---> first assign the value and the increase the value by 1.

EXAMPLE:
1)-
var a = 20;

var b = a++ ----------> b = 20 , a = 21

var c = ++a  ----------> c = 21, a = 21

2)-
var a = 31;

var b = a++ ----------> b = 31 , a = 32

var c = ++a  ----------> c = 32, a = 32

QUESTIONS:
1)-
var a = 30;
var b = 3;

var c = a++ + b++ ------> 30 + 3 = 33

console.log(c); ---> 33
console.log(b); ---> 4
console.log(a); ---> 31

2)-
var a = 3;
var b = 4;
const c = (--a + a++ + b-- - --b);
= 2 + 2 + 4 - 2
= 8- 2
= 6

Final Solution:
c=6, a=3 , b=2
 
---------------------------------

**** COMPARISON OPERATOR *****
1)-
== -------> Equality check 

a==b -----> it will produce true if the value of a is equal to b other wise it will produce false.

EXAMPLE:
a = 2 
b = "2"

a==b ----> 2=="2" ----> true 

2)-
=== -------> strict equality check

a===b ------> it will produce true if the value of a as well as their data type is same as b other wise it will produce false.

EXAMPLE:
a = 2 (number/integer)
b = "2" (string)

a===b ----> 2==="2" ----> ijnteger===string -----> false

3)- 
> , < , >= , <= 

Example:
a = 20 ;
b= 20;

a > b ---> 20 > 20 ---> false 

a<= b ----> true 

4)-
!= ------> (it compare the value only)

!== --------> (it compare the value as well as their data type)

Example:
a = 2;
b = "3";

a != b ----> 2 != "3"---->true

a!== b -----> 2 !== "3" ----> integer !== string ---> false

--------------------------------------

*** TERMARY OPERATOR ****
    ? :

condition ? expression1 : expression2

NOTE:
IF the condition is true it will the output
 expression1 else the output is expression2  

 EXAMPLE:
1)-
var a = true ? 20 : 30

solution:
a will take 20 bcz condition is true.

2)-
var a = 30>=30 ? 3 : 5

solution:
condition is true so a will take a value 3.

3)-
let a = 80<60 ? 32 : 43

solution:
condition is false so a will take a value 43.


-------------------------------------------------------

*** CONCATITATION OPERATOR **********

+ ------> with numbers/in b/w numbers it will act as a additional operator.
  ------> with atleast one string, then it will act as a concatitation operator.

  EXAMPLE:
  1)-
  2+4+7 --------> 13

2)-
  2 + "2" -----> "22"

3)-
  2 + 3 + "avinash" -----> "5avinash"

4)-
  2 + "avinash" + 8 ------> "2avinash8"

5)-
 var c = 3;

 var d = c++ + --c + c-- + "s"
= 3 + 3+ 3 + "s"
= 9 + "s"
= "9s"

solution:
c = 2
d = "9s"

6)-
a=3 , b=4, c=5

d = (((a++ >= c--) ? 3 : 5) >= 2 ? 6 : 8 )
= ((3 >= 5 ? 3 : 5 ) >= 2 ? 6 : 8)
= 5 >= 2 ? 6 : 8 
= 6

solution:
a = 4 
b = 4 
c = 4 
d = 6

*/
