import React, { useState } from "react";
import "./doctorcare.css";
import doctor from "./doctor.jpg";
// import Navbar from "./component/Navbar/navbar";
import logo from "./hospital.png";
import { useNavigate } from "react-router-dom";
// we are going to learn how to capture the data // two way binding
// phele name or password emppty ha usestate use kiya gaya ha fir jo bi apan
// enter karenge wo console mai show hoga event.target.value mai

// Router--> Router ka use hum dusre page ko navigate krne ke liye use krte ha
// step-1- router ready krna hota ha with exact path
// step-2- import krna ha "useNavigate" ko
// step-3- usko ussi component ke function ke ander ek variable mai store krna ha
// fir uss varible se usko kahi se bi call kiya ja skta ha with router exact path.

export function Doctor() {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState(false);

  function namehandler(event) {
    setName(event.target.value);
    setWarning(false);
  }
  function passwordhandler(event) {
    setPassword(event.target.value);
    setWarning(false);
  }
  function submithandler() {
    if (name === "sonupatro607@gmail.com" && password === "avinash@1234") {
      // navigate the dashboard page when we click on login button by using router
      navigate("/book-appointment");
      // console.log("valid credential");
    } else {
      setWarning(true);
    }
    // console.log(name, password);
    setName("");
    setPassword("");
  }

  return (
    <div className="main-ctn">
      <div className="doctortop">
        <img src={logo} className="doctorimg0"></img>
        <h2 className="doctorheading1">People Care</h2>
      </div>
      <div className="bottom">
        <div className="bottom1">
          <img src={doctor} className="img1"></img>
        </div>
        <div className="bottom2">
          <input
            className="input1 input"
            type="email"
            placeholder="Enter Email/Name"
            onChange={namehandler}
            value={name}
          ></input>
          <input
            className="input2 input"
            type="password"
            placeholder="Enter Password"
            onChange={passwordhandler}
            value={password}
          ></input>
          <button className="loginbutton" onClick={submithandler}>
            Login
          </button>
          {warning && (
            <h4 className="warning1">Either email or password is wrong</h4>
          )}
        </div>
      </div>
    </div>
  );
}
