import React from "react";
import "./appointment.css";
import { useNavigate } from "react-router-dom";
// import { Fragment } from "react";
import logo from "./hospital.png";
// import { Booking } from "../../component/Booking/booking";
import { Itemwrapper } from "../../component/Itemwrapper/itemwrapper";
// import { Appointmentbook } from "./component/Appointmentbook/appointmentbook";
// Fragment--> we cannot return more the one value at a time hence we use one container as a div and inside div we use multiple values
// we have one more option instead of using div that is "React.Fragment" bcz this is a one thing which we return doesn;'t matter what we have inside this.
// but React.Fragment has one drawback that is we can use it for css we don't have any option to target this neither by element or id or classname.
// example-
// 1)-<div>
//   <h2>avi1</h2>
//   <h2>avi2</h2>
//   <h2>avi3</h2>
// </div>
// 2)_<React.Fragment>
// <h2>avi1</h2>
//   <h2>avi2</h2>
//   <h2>avi3</h2>
// </React.Fragment>

export const Appointment = () => {
  let navigate = useNavigate();

  function bringyoubackloginpage() {
    navigate("/");
  }
  const arr = [
    {
      id: 1,
      name: "avi",
      speciality: "MBBS1",
    },
    {
      id: 2,
      name: "akash",
      speciality: "MBBS2",
    },
    {
      id: 3,
      name: "ravi",
      speciality: "MBBS3",
    },
    {
      id: 4,
      name: "krish",
      speciality: "MBBS4",
    },
    {
      id: 5,
      name: "omp",
      speciality: "MBBS5",
    },
  ];

  return (
    <div className="booking">
      <div className="top">
        <img src={logo} className="img0"></img>
        <h2 className="heading1">People Care</h2>
      </div>
      <button className="logout" value="Logout" onClick={bringyoubackloginpage}>
        Logout
      </button>
      <div className="wrappers">
        {arr.map((item) => (
          <Itemwrapper x={item} />
        ))}
      </div>
      {/* <div className="stackboxappointment">
        {arr.map((item) => (
          <Booking y={item} />
        ))}
      </div> */}
    </div>
  );
};

// Note:
// API --> it is nothing but an array having store a multiple object.

// example-
// 1)-
// var arr = [1,2,3,4]
// how to get value or values of object of array using map method
// arr.map(value=>console.log(value); -----> 1,2,3,4

// 2)-
// var arr = [{id:1,name:"avi"},{id:2,name:"avi1"},{id:3,name:"avi2"},{id:4,name:"avi3"}]
// how to get values of object of an array using map
// arr.map(value=><componentrendering x={value}/>;

// Note:
// how we can supply the value as a parameter to a particular component
// using
// key= direct value or key = {variable}
// example:
// <componentrendering x={value}/>

// -----------------------------------

// jis component mai maine value supply kiya ha uss component main ja ke data ko recieve krna ha as a argument we use it in react as a "props" it is nothing but properties and supply value as a parameter we use it in react as "item"
// but we can use anything in as a parameter or argument.
