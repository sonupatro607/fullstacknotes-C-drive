/*
Question: print passing number is a prime number or not

Answer:

function prime(num) {
  if (num < 2) {
    return num + "is not a prime number";
  }
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return num + "is not a prime number";
    }
  }
  if (num == i && num % i == 0) {
    return num + "is a prime number";
  }
}

console.log(prime(5));
console.log(prime(10));
console.log(prime(11));
console.log(prime(15));
console.log(prime(21));
console.log(prime(27));
console.log(prime(101));
console.log(prime(45));

Question:
print any M-strong number.

output:
123456 --------> 1**6+2**6+3**6+4**6+5**6+6**6 ----> 67171

answer:

function strong(num) {
  var digits = num.toString().split("");

  sum = 0;

  digits.forEach(south);
  function south(value) {
    var x = value ** digits.length;
    sum += x;
  }
  return sum;
}
var prin = strong(123456);
console.log(prin); -------------> 67171
console.log(typeof prin);


question:
find the missing number from array.

given array --->  [1, 2, 4, 6, 3, 7, 8]

output:
5(missing number in array)

ansswer:

N = 8;
var arr = [1, 2, 4, 6, 3, 7, 8];
var arr1 = [5, ...arr];
if (arr.length != arr1.length) {
  arr.forEach(avinash);
  function avinash(value) {
    for (var i = 0; i <= N; i++) {
      if (arr[i] != arr1[i]) {
        console.log(arr1[0]);
      }
    }
  }
}

solution:
5


question:
add the number of same index and keep them in the same index or place in new array.

output:
[4, 6, 7]
[8, 1, 9]

new array => [12,7,16]

answer:

var arr1 = [4, 6, 7];

var arr2 = [8, 1, 9];

var arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i] + arr2[i];
}
console.log(arr3); ---------->[12,7,16]

question: 
find the count number of cards,total no. of ace, jack face cards.

given object:
var cards={
      spades:["2","3","4","5","6","7","8","9","10","king","queen","jack","ace"],
      club:["2","3","4","5","6","7","8","9","10","king","queen","jack","ace"],
     diamond:["2","3","4","5","6","7","8","9","10","king","queen","jack","ace"],
     heart:["2","3","4","5","6","7","8","9","10","king","queen","jack","ace"]
}


answer:

var len = 12;
var arr = [];
var arr1 = [];

var cards = {
  spades: [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "king",
    "queen",
    "jack",
    "ace",
  ],
  club: [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "king",
    "queen",
    "jack",
    "ace",
  ],
  diamond: [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "king",
    "queen",
    "jack",
    "ace",
  ],
  heart: [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "king",
    "queen",
    "jack",
    "ace",
  ],
};
for (var i = 0; i < len; i++) {
  if (
    cards["spades"][i] != "king" &&
    cards["spades"][i] != "queen" &&
    cards["spades"][i] != "jack" &&
    cards["spades"][i] != "ace"
  ) {
    arr.push(cards["spades"][i]);
    arr.push(cards["club"][i]);
    arr.push(cards["diamond"][i]);
    arr.push(cards["heart"][i]);
  }
  if (
    cards["spades"][i] === "king" ||
    cards["spades"][i] === "queen" ||
    cards["spades"][i] === "jack" ||
    cards["spades"][i] === "ace"
  ) {
    arr1.push(cards["spades"][i]);
    arr1.push(cards["club"][i]);
    arr1.push(cards["diamond"][i]);
    arr1.push(cards["heart"][i]);
  }
}
console.log("count total number of numbers cards: " + arr.length);
console.log("count total number of  cards: " + arr1.length);



question: 
find the permutation it is nothing but no of arragement you can perform in the Object.

output:
avinash ------> 2 ---> av,vi,in,na,as,sh,...etc

answer:


var str = "avinash";
var n = 1;
var n_r = 1;
for (var i = str.length; i > 0; i--) {
  n *= i;
}

for (var j = str.length - 2; j > 0; j--) {
  n_r *= j;
}
var permutation = n / n_r;
console.log(permutation);

*/
