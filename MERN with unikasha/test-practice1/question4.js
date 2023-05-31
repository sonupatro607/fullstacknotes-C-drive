/* 

Write a JavaScript function that returns a passed string with letters in alphabetical order.

Example string : 'webmaster'

Expected Output : 'abeemrstw'

Assume punctuation and numbers symbols are not included in the passed string.



*/

// first approach

function alp(str) {
  var str;
  var slic = str.split("");
  var sor = slic.sort();
  var order = sor.join("");

  return order;
}
var retun = alp("webmaster");

console.log(retun);

// second approach
/*
function alp(str) {
  var str;
  str.sort();

  return str.sort();
}
var retun = alp("webmaster");

console.log(retun);
*/
