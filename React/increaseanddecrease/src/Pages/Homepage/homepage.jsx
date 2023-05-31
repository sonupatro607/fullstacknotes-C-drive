import React, { useState } from "react";

import "./homepage.css";
/*
while creating react app we use commond on terminal --> npx create-react-app app name should not be contain capital letter

command for start--->
npm start 
/*
 usestate ui mai state ko hook kr ke rakhta ha isliye state
 mai koi bi changes show krni ha toh usestate ko use krna pdta ha
 const [num, setNum] 
 ismai num variable ha but iss variable ke value
  ko bas setNum he change kr skta ha 
  */
/* LINE NUMBER- 38,41 -->"onclick" same to same javascrip mai hum button element ko get kr ke
    usmai addEventlistener lagate the yeha apan direct uss elemet mai as
    attribute use krte ha onclick ka direct */
/*line number -39  , conditional randering ---> false && not rander , true && rander */
function Homepage() {
  const [num, setNum] = useState(0);

  const [warn, setWarn] = useState(false);

  function increasehandling() {
    if (num === 10) {
      setWarn(!warn);
    }
    setNum(num + 1);
  }
  function decreasehandling() {
    if (num === -10) {
      setWarn(!warn);
    }
    setNum(num - 1);
  }
  return (
    <div className="main-ctn">
      {warn === true && <div className="warning"></div>}

      <h2 className="heading">{num}</h2>
      <div className="butt">
        <button className="increase" onClick={increasehandling}>
          increase
        </button>
        <button className="decrease" onClick={decreasehandling}>
          decrease
        </button>
      </div>
    </div>
  );
}
export default Homepage;
// Note:
// function name must be start with capital
// and their file name should be different from function name which you gave to.
