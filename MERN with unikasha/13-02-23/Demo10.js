/*

********"break"/"continue" statement *******
1)-break --> it break the loop./ it is used to come out from loop.

2)-continue ----> it continue the loop from starting./ it is used to skip the loop.

example:

for(var i =0; i <=100; i++){
    if(i ==51){
        break;         
    }else if(i ==21){
        contiune;
    }
    else{
        process.stdout.write(i + " ");
    }
}

output:
1 2 3 4 5 6 ..20 22 23 24..50 then break the loop.

question: 
print the even number in the range of 1- 100 but not 16,18,52.

amswer:
for(var i = 1; i <=100; i++){
    if(i==6 || i ==18 || i==52){
        continue;
    }else{
        process.stdout.write(i)
    }
}

output:
1 2 3 ..5 7....17 19 .....51 53 ...100


*************math.random()*********

math.random()-----> it will randomly generate the value in the range of 0 to 1.


    100(max)
    !
    !
0 - 1 (range)
!
!
1(min)

## how to convert decimal into a number-

math.random()*(max-min+1)

example:
math.random()*(max-min+1)
0.78878*(100-1+1)
78

## floor -----> it will give you a lesser number of a decimal value.

example:
math.floor(8.6) ----> 8
math.floor(8.2) -----> 8

## ceil -------> it will give you a greater number of a decimal value.

example:
math.floor(8.2) ----> 9
math.floor(8.7) -----> 9

example:
math.random() ---> 0.5665
math.random() ---> 0.7677

math.floor(math.random()*max-min)+min ------> it will give you a maximum value.

example:
math.floor(0.9656*100-1)+1
math.floor(95.96)+1
95+1
96

math.floor(math.random()*max-min)-1 -------> it will give you a minimum value.

example:
math.floor(0.9656*100-1)-1
math.floor(95.96)-1
95-1
94

question:
1)-
keep generating a random number in between 10 - 20, print all 
but if you generate 12 don't print and if you generate 15 break loop.

answer:


while (true) {
  var num = Math.floor(Math.random() * 20 - 10) + 10;

  if (num == 12) {
    continue;
  } else if (num == 15) {
    break;
  } else {
    process.stdout.write(num + " ");
  }
}

solution:
0 6 7 14 9 3 16 11 19 8 6 13 8 0 16 3 3 17 6 19 0 14 5 3 4 3 10 16 14 19 13 3 16 4 7 16 18 5 11 16 19 19

Note:
solution always keep change.

2)-
keep generating a random number in between 1 - 100, unless yopu generate a multiple of 7.

for (var i = 1; i <= 100; i++) {
  var num = Math.floor(Math.random() * 100 - 1) + 1;

  if (i % 7 == 0) {
    break;
  } else {
    process.stdout.write(num + " ");
  }
}

solution:
97 30 47 4 66 18


***********Set ***********

set ---> it is the collection of unique elements.its means we cannot store the dublicate elements.

## create a set:

const x = new set();

## insert the element in set

x.add(3);
x.add(4);
x.add(5);

console.log(x);

## how to remove dublicates elements from array

var arr = [2,3,4,5,2,7,8];

var x = new set(arr);

conole.log(x); -----> (2,3,4,5,7,8)

## typeof set 

var x = new set();

console.log(typeof x); ----------> object

NOTE:
{} ---> it represent the object
[] ----> it reprent the array
() -----> it represent the set
example:

(2,3,4,5)----> it is set 

(2,2,3,4) -----> it is not a set.(it is not allowed)

#
var x = new set();

x.add(10);
x.add(10); ------> it won't produce any error 10 will not get inserted again in our set.


##### METHODS of Set ####

1)- forEach() - it demand function.

example:


var arr = [2, 2, 3, 4, 5, 6, 7];

var x = new Set(arr);

x.forEach(doJob);

function doJob(value, index, x) {
  // in this case index is nothing but the value, in set we don't have indexing concept.
  
  console.log(value, index, x);
}

solution:
2 2 Set(6) { 2, 3, 4, 5, 6, 7 }
3 3 Set(6) { 2, 3, 4, 5, 6, 7 }
4 4 Set(6) { 2, 3, 4, 5, 6, 7 }
5 5 Set(6) { 2, 3, 4, 5, 6, 7 }
6 6 Set(6) { 2, 3, 4, 5, 6, 7 }
7 7 Set(6) { 2, 3, 4, 5, 6, 7 }


*/
