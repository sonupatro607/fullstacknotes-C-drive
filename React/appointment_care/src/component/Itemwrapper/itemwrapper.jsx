import React from "react";
import "./itemwrapper.css";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Booking } from "../Booking/booking";
export const Itemwrapper = (props) => {
  console.log(props.x.id);
  console.log(props.x.name);
  console.log(props.x.speciality);
  // yeh jo "props.x.id" ka pata apko browser
  // ke console se chal jata ha mugup krne ki jarurt nhi

  // const [bookingbox, setBookingbox] = useState(false);
  let navigate = useNavigate();
  function messagehandler() {
    navigate("/book-appointment/message");
  }
  // function bookingboxhandler() {
  //   setBookingbox(true);
  // }

  return (
    <div className="item_wrapper">
      <h2 className="id">{props.x.id}</h2>
      <h2 className="employeename">{props.x.name}</h2>
      <h2 className="profession">{props.x.speciality}</h2>
      <button className="message" onClick={messagehandler}>
        Message
      </button>
      <button className="bookingAppointment">Book Appointment</button>
    </div>
  );
};
