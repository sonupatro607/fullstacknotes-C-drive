/*

**** LOGICAL OPERATOR *****

&& -----> logical AND 

|| ------> logical OR 

! -------> logical NOT 


1)- &&---->logical AND

it will produce true if cond1 and cond2 both are true

SYNTEX -
condition1 && condition2 = output(cond1 && cond2)
   true     &&  true     = true 
   true     &&  false    = false
   false     &&  true    = false
   false     &&  false   = false

2)- ||---->logical OR

it will produce true if at least one true either cond1 or cond2.

SYNTEX -
condition1 || condition2 = output(cond1 || cond2)
   true     ||  true     = true 
   true     ||  false    = true
   false     ||  true    = true
   false     ||  false   = false

   3)- !---->logical NOT

SYNTEX -
! condition1 = output(! condition1)
 !  true     = false
!  false    = true
 
QUESTIONS:
1)-
var a = 3, b=6
var d = (a++ >=3 && b--<=6)
= 3 >= 3 && 6 <= 6
= true && true 
= true 

solution:
d = true , a = 4 , b = 5

2)-
var a =3, b = 6

var d = ( a++ >=b-- && b++<=a--)
= 3 >= 6 ------> logical && has been produce false at begining therefore we don't need to go anymore further.
         -------> if my 1st operand become false then the 2nd oprand will never get evaluate.       

= false ------> logical && has been produce false at begining therefore we don't need to go anymore further.

solution:
d = false , a = 4 , b = 5

3)- 
var a =3, b = 6

var d = ( a++ <=b-- || b++<=a--)
= 3<= 6 ----> if my 1st operand become true then the 2nd oprand will never get evaluate.       
= true ----> if my 1st operand become false then the 2nd oprand will never get evaluate.     

solution:
d = true , a = 4 , b = 5

---------------------------------------

***** RELATION OPERATOT ******

== 
<=
>=
!=

NOTE:
relation b/w logical and relation operator is they both are produce boolean value (true, false)

-----------------------------------------------------

***** STRING **********

value that enclosed between " "

Example:
var name = "avinash"
(index no.)-0123456

access the value one by one 
name[0] = a
name[5] = s
name[3] = n
name[2] = i

"avinash"[0] = a
"avinash"[3] = n
"avinash"[2] = i
"avinash"[1] = v

***** METHODS ON STRING *****
var s = "shudhansu"

1)- length 

Example:
s.length = 9
"shudhansu".length = 9

2)- slice 
                           -9-8-7-6-5-4-3-2-1 <-----------(negative indexing)
                            s h u d h a n s u 
(positive indexing)------>  0 1 2 3 4 5 6 7 8

syntax - s.slice(starting index no.(Start) , ending index no.(end))

it will return the string from index start to end-1.

Example:
s.slice(3,7) = dhan
"shudhansu".slice(3,7) = dhan

s.slice(-3,-7) = nahd

NOTE: 
# negative index is not valid with indexing
example:

s[-3] ----> undefined

# negative index is valid only with slice()

example:
s.slice(-3,-7) = "nahd"
s.slice(-3) = "nsu"
s.slice(-7) = "udhansu"
s.slice(2,-2) = "dhans"
s.slice(-2,2) = ''  ------> there is lots of glich in the javascrip(glich is nothing but it doesn't produce error but for user it creates trouble)

3)- substring()

var s = "shudhansu"

                           -9-8-7-6-5-4-3-2-1 <------(not allowed)
                            s h u d h a n s u 
(positive indexing)------>  0 1 2 3 4 5 6 7 8

syntax -
 s.slice(starting index no.(Start) , ending index no.(end))

 it will return the string from index start to end-1.

 example:
 s.substring(2,7)= udhan

 4)- substr()

var s = "shudhansu"

                           -9-8-7-6-5-4-3-2-1 <------(not allowed)
                            s h u d h a n s u 
(positive indexing)------>  0 1 2 3 4 5 6 7 8

syntax -
 s.slice(starting index no.(Start) , length(no.of element))

 it will return the string from index start to given length.

 example:
 s.substr(2,4)= udha
 "shudhansu".substr(2,4)= udha

5)- replace()

var s = "shudhansu"

syntax -
s.replace(character appear in your value, want to replace with)

example:
1)-
"aaaassss".replace('a','j') 

solution: 
jaaassss (it replace only first apperance character)

2)-
s.replace('a','z').replace('z','x');
"shudhznsu".replace('z','x')

solution 
'shudhxsu'

3)-
s.replace('a','z').replace('d','x');
"shudhznsu".replace('z','x')

solution 
'shuxhzsu'

# it will replace 'a' with 'j' with their first apperance on value.

6)- replaceAll()

syntax -
s.replace(character appear in your value, want to replace with)

example:

"aaaassss".replace('a','j') 

solution: 
jjjjssss (it replace all the apperance characters)

# it will replace 'a' with 'j' with their all the apperance on value.

7)- toUpperCase() , toLowerCase()

var s = "shudhansu"

example:
s.toUpperCase() = "SHUDHANSU"

s.toLowerCase() = "shudhansu"

s.toUpperCase(0) = "SHUDHANSU" -----> there is a glich as we were talked about(meaning less)

s.toUpperCase(2) = "SHUDHANSU" -----> there is a glich as we were talked about

8)- charAt()

it will give you a char of that given sting based on theit index number.

syntax:

charAt(index no.)
charAt(by defalut it index is zero)  -----------> it is glich in javascript

example:
"shudhansu".charAt(3)= 'd'

"shudhansu".charAt()= 's' 

9)- charCodeAt()

it will give you a unicode value/ASCII of that given string's characters

syntax:

charCodeAt(index no.)
charCodeAt(by defalut it index is zero)  -----------> it is glich in javascript

example:
"shudhansu".charCodeAt(3)= 'd' ----> 100

"shudhansu".charCodeAt()= 's' ---> 115 

QUESTION:
var s = "shudhansu"

s.substring(2,7).charAt(2);
"udhan".charAt(2);

solution:
h


*/
