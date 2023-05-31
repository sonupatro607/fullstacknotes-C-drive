// import logo from "./logo.svg";
import "./App.css";
import { Doctor } from "./Pages/homepage/doctorcare";
import { Appointment } from "./Pages/Appointment/appointment";
import { Message } from "./Pages/Message/message";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// routing -->
// step-1- write this commond on your terminal and install "npm i react-router-dom"
// step-2- import {browserrouter , routes, route} from "./react/dom"
// step-3 - you will get in below
// step-4- exact path is use to give a path of your element {for by default you want to give then - "/" use this only}{if you want something other then you have to use differnt path "/homepage" or "/homepage/akash/avinash"}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* {bydefaultpath of your element} */}
          <Route exact path="/" element={<Doctor />} />
          {/* {you can give different path also} 
          <Route exact path="/homepage" element={<Doctor />} />*/}
          {/* {you can give different path also} 
          <Route exact path="/homepage/akash/avinash" element={<Doctor />} />*/}
          <Route exact path="/book-appointment" element={<Appointment />} />
          <Route exact path="/book-appointment/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
