var buttons = document.getElementsByTagName("button");

console.log(buttons[0]); // in browser console, we can see button elementfirst.
console.log(buttons[1]); // in browser console, we can see the button element with class name.
console.log(buttons[2]); // in browser console, we can see button element with class name 2
console.log(buttons[3]); // in browser console, we can see button element with id name

//**************************** 0R

var buttons = document.getElementsByTagName("button")[0];
var buttons = document.getElementsByTagName("button")[1];
var buttons = document.getElementsByTagName("button")[2];
var buttons = document.getElementsByTagName("button")[3];

//  -------------------------------------

var button1 = document.getElementsByClassName("Type1");
console.log(button1[0]); // in browser console, we can see button element with classname-type1.
console.log(button1[1]); // in browser console, we can see button element with classname-type2.

// --------------------------------------------

var button2 = document.getElementById("Type2");
console.log(button2);

// NOTE:
// getElemetById ---> in this methos we use Element
// instead of using Elements bcz id name is unique alway
//  same id name we cannot use further on any other elements.
