var numelement = document.getElementsByClassName("num")[0];
//we will get element text
var numtext = numelement.innerText;

//we will get the the increase button element
var increasebutton = document.getElementsByClassName("increase")[0];

//we will get the the decrease button element
var decreasebutton = document.getElementsByClassName("decrease")[0];

//we will get the mid container element
var midcontainer = document.getElementsByClassName("hidden")[0];

//we will get the cross icon image element
var closemidboxcontainer = document.getElementsByClassName("cut_img")[0];

// console.log(numelement);
// console.log(numtext);
// console.log(increasebutton);

function increaseNumber() {
  //it converts html number to integer number
  numtext = Number(numtext);
  if (numtext === 10) {
    midcontainer.classList.remove("hidden");
  }
  numtext = numtext + 1;
  numelement.innerText = numtext;
  // if (numtext >= 10) {
  //   alert("number cannot go above 10");
  //   return;
  // }
  // if (numtext === 10) {
  //   document.write("ERROR");
  // }
}
function decreaseNumber() {
  //it converts html number to integer number
  numtext = Number(numtext);
  if (numtext === -10) {
    midcontainer.classList.remove("hidden");
  }
  numtext = numtext - 1;
  numelement.innerText = numtext;
  // if (numtext <= -10) {
  //   alert("number cannot go below -10");
  //   return;
  // }
  // if (numtext < -10) {
  //   document.write("ERROR");
  // }
}
function closeTheMidBoxSection() {
  //Again we added the hidden class on mid conatiner to make it display none.
  midcontainer.classList.add("hidden");
}
increasebutton.addEventListener("click", increaseNumber);
decreasebutton.addEventListener("click", decreaseNumber);
closemidboxcontainer.addEventListener("click", closeTheMidBoxSection);
