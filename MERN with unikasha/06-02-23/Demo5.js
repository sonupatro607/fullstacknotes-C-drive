/* 

***ARRAY *****
linear data structure to hold multiple values of any type.
                        or

Array can hold multiple values of any types.

Example:
1)- 
          -8    -7      -6 -5 -4 -3  -2   -1  <----------------(negative index are not allowed)
var arr = [1, "avinash", 2, 3, 5, 7, 'a', 'f']
           0,    1     , 2, 3, 4, 5,  6,   7   <----------------(index number)

if you want to access the element of Array
arr[0] --->  1
arr[5] ---> 7
arr[3] ---> 3
arr[7] ---> f

2)-
arr = []  /empty Array

arr[0]= 1  // arr = [1]
arr[1] = 10   // arr = [1 , 10]
arr[1] = 30   // arr = [1 , 30] ---> (when you reuse index, the presenrt value at that index will be overridden)

3)-
arr = []

arr[1] = 3   // arr = [empty , 3]
arr[0] -----> undefine


****** METHODS OF ARRAY ******
1)- push()-
arr.push(35) ----> arr = [1, 30, 35]

arr.push(35,40,46)-----> arr = [1,30,35, 35, 40, 46] -----> (we can push multiple values also into the array)

exapmle:
1)-
var arr = []

arr[0] = 23
console.log(arr)   -----> arr = [23]

arr.push(24)
console.log(arr)   -----> arr = [23, 24]

arr.push("shudhansu" , 34)
console.log(arr)   ------> arr = [23, 24, "shudhansu",  34]

2)- JOIN METHOD: it convert array to string
arr = [a, b, c,d]

console.log(arr.join("")); -----> abcd


2)-most important concept it is 
Note - 
we were thinging, we cannot change the arr of const type but there is using differnt concept there we are not changing the value to the arr, only we are changing on cells of array.

const arr = []

arr[0] = 3
arr[1]= 30

console.log(arr)----> [3,30]

arr = 34 -----> produce error
arr = [34,54] -----> produce error

EXACT CONCEPT BEHIND ABOVE CODE:

(4 byte)         22, 26,30,34,38 <----------(unique memory location)
 const   arr =   [2, 3, 8, 9, 10]
                  0, 1, 2, 3,  4 <------(index number)

arr[1] = 8  ---> it is not pointing to arr to change their value, however it is pointing to the unique memory locator to change the value of that index number.

arr = 22 -----> it is directing pointing to change the arr value but we cannot change it value bcz it's a const type and also it has contain array as well.

arr = [54, 897] -----> we cannot create other array with same name of an array 

NOTE : 
LINEAR + DATA STRUCTURE: 
LINEAR ----> change something line by line 
Data structure ------> it is nothing but a container which holds tha data into it.


--------------------------------------------------------------

***** 2D- DIMENSIONAL ARRAY *****************

[] -----------> It represent the dimension of array 

 
        0, 1, 2, 3  0, 1, 2, 3   0, 1, 2, 3  0, 1, 2, 3  <-------------(2D-ARRAY INDEX NUMBER)
arr = [[1, 2, 3, 4][2, 4, 5, 6,][5, 6, 9, 7][4, 6, 5, 7]]
           0              1          2            3      <---------------(1D-ARRAY INDEX NUMBER)

      row/coloumn 
               0  1  2  3
               !  !  !  !
               !  !  !  !
               !  !  !  !
               !  !  !  !
               
       0 ----> 1, 2, 3, 4
       1 ----> 2, 4, 5, 6
       2 ----> 5, 6, 9, 7
       3 ----> 4, 6, 5, 7

        
HOW TO ACCESS 2D-ARRAY ELEMENTS:
i ---> it represent 1D- ARRAY 
J ----> it represent 2D- ARRAY

syntax to access the elements of 2D-ARRAY

arr[i][j]

arr[0][3] -----> 4

arr[3][2] ------> 5


## how to assign the value to the empty 2D-ARRAY 

arr = [[][][][]]

arr[0][0] = 1
arr[0][1] = 3
arr[0][2] = 4
arr[0][3] = 5

arr[1][0] = 8
arr[1][1] = 9
arr[1][2] = 1
arr[1][3] = 5

final 2D-ARRAY become like this

arr = [[1,3,4,5][8,9,1,5]]

---------------------------------------------
1)- length -----> it is a object in a javascript

arr = [1,2,4]

arr.length -----> 3


2)- sort()  -----> it is a method which sort the array in the ascending order.
                                   or 
                it will sort the array but before sorting it, will convert all the element into the string.
                                   or
                  it checks only first character.('10'/10/11/12---> 1 )(21/22/23/24 ----> 2)

3)- reverse() -----> array will convert into a string then it will reverse the order of an array.


EXAMPLE:
1)-
arr = ['1', '2']      // already in ascending order

arr.sort() -----> ['1', '2']

2)-
arr = ['2', '1' ]      

arr.sort() -----> [1, 2]

3)-
arr = ['2', '5', '6', '8' , '10']        

arr.sort() ------> ['10','2','5','6','8']

4)-
arr = [4,5,7,10,11]

arr.sort() -------> [10,11,4,5,7]

5)-
arr = [4,5,7,10,11]

arr.reverse() -------> [11,10,7,5,4]

QUESTIONS:
1)-

arr = ['a', 'c', 'f', 'b']

arr[1] = 'g'
arr.sort()
arr[2] = 'k
arr = ?

solution:
#1 --> ['a', 'g', 'f', 'b']
#2 ---> ['a', 'b', 'f', 'g']
#3 arr----> ['a', 'b', 'k', 'g']  -----> final solution

2)-

arr = [2, 8, 6, 9, 11, 16, 32]

arr.sort()
arr[1] = 7
arr.sort()
arr[3] = 5
arr = ?

solution:
#1 --> [11,16,2,32,6,8,9]
#2 ---> [11,7,2,32,6,8,9]
#3 ----> [11,2,32,6,7,8,9]  
#4 arr---> [11,2,32,5,7,8,9] ------> final solution

--------------------------------------------------------------

***** FOR- LOOP *******************

syntax: 

for(initialisation; condition check ; increment/decrement operator ){

    doing job 

}

HOW WE CAN WRITE THIS FOR LOOP IN DIFFERENT VARIENT:
1)-
       1          2       3
for(let i = 0; i <= 10; i++){
    console.log(i); ----> // job(4)
}

Execution Order :
        !---<----<---<----<-----!
        !                       !
        !                       !
1 ---> 2 ----(true)---> 4 ----> 3
       !
    (false) 
       !
       !
 (loop is break)

solution:
0,1,2,.......10

2)-

var i = 0;
for( ; i <= 10; i++){
    console.log("hello")
} 

solution:
hello(0),hello(1) .......hello(10)

3)-

var i = 0;
for( ; i <= 10; ){
    console.log("hii")
    i++
} 

solution:
hii(0),hii(1) .......hii(10)


QUESTIONS:
1)- print 1 to 10

solution:
for(let i = 1; i<=10; i++){
    console.log(i);
}


1, 2, 3,4 .....10

2)-
index no.->0,1,2,3,4, 5         
var arr = [2,3,8,6,9,10]

solution:

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

solution:
2,3,8,6,9,10

3)-
index no.->0,1,2,3,4,5,6
var arr = [3,8,8,6,9,6,5]

a)- WAP to print the array in the reverse order.
b)- WAP to find sum of all the numbers in an array.

solution:

var arr = [3, 8, 8, 6, 9, 6, 5];
var sum = 0;
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);

  sum += arr[i];
}

console.log(sum);



*/
