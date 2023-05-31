/*

********METHODS OF Set*********

1)- add() ----> add an element to our set.

2)- delete() ---> use to delete an element.
----> return true if element is found and delete else it will return false.

example:
var x = new set([2,3,4,5]);
x.delete(3); -----> true (present and delete)
x.delete(8); -----> false
console.log(x); ----> {2,4,5}

NOTE:
we cannot use multiple element as an argument in delete method but if you might be use multiple element then it will take only one(first) element, if that are present then it will return true else it will return false.
x.delete(2,3); ----> true(for 2 only)

console.log(x); --->{3,4,5}

3)- has()---> check if an element is present in the set or not.

example:
var x = new set([2,3,4,5]);
x.has(3); -----> true
x.has(9); ------> false
4)- clear() ----> nremove all element from our set.

4)- clear() ----> it remove all the elements from set.

example:
var x = new set([2,3,4,5]);

x.clear(); 

console.log(x); ----> {0 set}

----------------------------------

*******BITWISE OPERATOR************

in pdf 


------------------------------------------------


*********MAP *************

map --> 
# it stores the key value pair.
      x : 20,
      y = 3

# map knows order of inserstion of keys.

## create a map

var x = new map();

## inserting a value to the map

x.set(key,value)

NOTE:
instead of using add(), we are using set() to insert an key : value in a map.

## forEach loop in map##(for accessing the key : value pair or indiviual also from  map)

example:

var x = new Map();
x.set("a",3);
x.set("b",6);
x.set("c",90);
x.set("d",65);

x.forEach(doJob);

function doJob(value,key,map){
  console.log(value,key,map);
}

solution:
3 a Map(4) { 'a' => 3, 'b' => 6, 'c' => 90, 'd' => 65 }
6 b Map(4) { 'a' => 3, 'b' => 6, 'c' => 90, 'd' => 65 }
90 c Map(4) { 'a' => 3, 'b' => 6, 'c' => 90, 'd' => 65 }
65 d Map(4) { 'a' => 3, 'b' => 6, 'c' => 90, 'd' => 65 }
###methods of map ##

1)- clear() ----> it remove all the key: value pair from map.

example:
var x = new map();

x.set("a",avi);
x.set("b","akash");

console.log(x); ----> {"a" : "avi", "b":"akash"}
x.clear(); 
console.log(x); -----> {0 map}

2)- delete(key) ----> it remove the key : value pair.

example:
x.delete("a"); ---> true

console.log(x); ---> {"b" : "akash"}

3)- size()---> return size of our map

example:

var y = x.size();

console.log(y); ----> give size of map

4)- has() ---> it will check key is present or not, if key is present it will return true otherwise it will return false.

5)- get(key) -----> it will return the corresponding value which you pass as a argument in this method.

example:

x.get("a"); ----> avi
x.get("b"); -----> akash

example:

var x = new map();

x.set("name","avinashpatro");

console.log(x); ----> {"name" : "avinashpatro"}

*/
