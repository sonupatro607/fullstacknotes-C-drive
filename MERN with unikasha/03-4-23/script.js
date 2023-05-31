// we get the body element
var body = document.getElementsByTagName("body")[0];

function scrollhandler() {
  // when i scroll body it will show as a next div after first div in bottom
  var mid_ctn = document.createElement("div");
  // i gave same class name so that all the style also become same
  mid_ctn.classList.add("mid-ctn");
  body.appendChild(mid_ctn);

  //heading text inside the above div which it will create by scrolling
  var heading = document.createElement("h2");
  // i gave same class name so that all the style also become same
  heading.classList.add("heading");
  heading.innerHTML = "This is a static div with a static test";
  mid_ctn.appendChild(heading);
}

// when i click on the webpage it automatiocally call the scrollhandler function which i wrote above it
body.addEventListener("click", scrollhandler);
/*
it takes whole body during scroll on window thats why we need to use window instead of body 
during scrolling on window it automatiocally call the scrollhandler function which 
i wrote above it
*/
// body.addEventListener("scroll", scrollhandler); // wrong way to get new divs by scrolling
window.addEventListener("scroll", scrollhandler); // correct way to get new divs by scrolling
