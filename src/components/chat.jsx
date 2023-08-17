import React from "react";
import videoCallIcon from "../assets/videoCallIcon.png";
import phoneIcon from "../assets/phoneIcon.png";
import moreIcon from "../assets/moreIcon.png";
import Messages from "./messages";
import Input from "./input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="topContainer">
        <div className="chatInfo">
          <span>Kocho Shinobu</span>
        </div>
        <div className="chatIcons">
          <img className="phoneIcon" src={phoneIcon} alt="phoneIcon" />
          <img
            className="videoCallIcon"
            src={videoCallIcon}
            alt="videoCallIcon"
          />
          <img className="moreIcon" src={moreIcon} alt="moreIcon" />
        </div>
      </div>
      <div className="middleContainer">
        <Messages />
      </div>
      <div className="bottomContainer">
        <Input />
      </div>
    </div>
  );
};

export default Chat;
