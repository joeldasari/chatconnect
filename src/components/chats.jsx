import React from "react";
import userpic from "../assets/userpic.jpg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={userpic} alt="userpic" />
        <div className="userInfo">
          <span className="userName">Kocho Shinobu</span>
          <p className="userMsg">Moshi Moshi</p>
        </div>
      </div>
      <div className="userChat">
        <img src={userpic} alt="userpic" />
        <div className="userInfo">
          <span className="userName">Kocho Shinobu</span>
          <p className="userMsg">Daijoubu desu ka</p>
        </div>
      </div>
      <div className="userChat">
        <img src={userpic} alt="userpic" />
        <div className="userInfo">
          <span className="userName">Kocho Shinobu</span>
          <p className="userMsg">Konnichiwa</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
