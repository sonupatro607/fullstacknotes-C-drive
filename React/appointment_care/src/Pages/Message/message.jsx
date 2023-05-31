import React from "react";
import logo from "./hospital.png";
import "./message.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Message = () => {
  let navigate = useNavigate();

  function backpage() {
    navigate("/book-appointment");
  }
  const [text, setText] = useState(" ");
  const [thanks, setThanks] = useState(false);

  function textcapture(event) {
    setText(event.target.value);
  }
  function sendmessagehandler() {
    if (text === "") {
      setThanks(false);
    } else {
      setThanks(true);
      setText(" ");
    }
  }
  function thanksclosehanding() {
    setThanks(false);
  }
  return (
    <div className="msg_main">
      <div className="msgtop">
        <img src={logo} className="msgimg0" onClick={backpage}></img>
        <h2 className="msgheading1">People Care</h2>
      </div>
      <div className="msg_bottom">
        {thanks && (
          <div className="thanksbox">
            <FontAwesomeIcon
              className="crossicon"
              onClick={thanksclosehanding}
              icon={faXmark}
            />
            <h3 className="thanksheading">thank for sending the message</h3>
          </div>
        )}
        <div className="bigbox">
          <textarea
            className="smallbox"
            type="text"
            placeholder="text1"
            onChange={textcapture}
            value={text}
          ></textarea>
          <button className="sendmessage" onClick={sendmessagehandler}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
