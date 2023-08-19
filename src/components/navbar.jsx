import React from "react";
import profilepic from "../assets/profilepic.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="mainTitle">Chat Connect</span>
      <div className="persondetails">
        <img src={profilepic} alt="profile-pic" />
        <span className="userName">Tomioka Giyu</span>
        <div className="logout">
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
