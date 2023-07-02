import React from 'react';
import "./Join.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

let user;

const Join = () => {

  const sendUser = () => {
    user = document.getElementById('joinInput').value;

  }

  return (
    <div className="JoinPage">
      <div className='JoinContainer'>
        <img src={logo} alt="logo" />
        <h1>C CHAT</h1>
        <input placeholder='Enter Your Name' type="text" id="joinInput" />
        <Link to="/chat">
        <button onClick={sendUser} className='joinbtn'>Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Join;
export {user};