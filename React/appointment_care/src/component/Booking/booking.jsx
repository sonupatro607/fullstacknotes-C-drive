import React from "react";
import "./booking.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Booking = (data) => {
  //   console.log(data.y.id);
  let navigate = useNavigate();

  function crossiconhandler() {
    navigate("/book-appointment");
  }
  function submitappointmenthandler() {
    navigate("/book-appointment");
  }

  return (
    <div className="main_box">
      <div className="bookingboxs">
        <FontAwesomeIcon
          className="crossicontop"
          onClick={crossiconhandler}
          icon={faXmark}
        />
        <div className="left">
          <img
            src="https://img.freepik.com/free-vector/beautiful-young-female-doctor-presenting-something-cartoon-illustration_56104-484.jpg"
            className="leftimg"
          ></img>
          <h2 className="leftname">{data.y.name}</h2>
        </div>
        <div className="right">
          <h2 className="righttitle">booking slot</h2>
          <input className="rightdate" type="date"></input>
          <button
            type="submit"
            className="right_btn"
            value="submit"
            onClick={submitappointmenthandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
