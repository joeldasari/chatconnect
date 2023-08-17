import React from "react";
import userImg from "../assets/userpic.jpg";

const Message = () => {
  return (
    <div className="messagesBlock owner">
      <div className="userDetails">
        <img src={userImg} alt="userImg" className="UserPic" />
        <span>9:19 AM</span>
      </div>
      <div className="messageContent">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          excepturi, dolor nulla rem facilis repellendus asperiores nihil
          deserunt, doloremque veniam unde, laborum perspiciatis iste molestias
          ducimus iure recusandae? Consequuntur, ex?
        </p>
        <img src={userImg} alt="sentPic" />
      </div>
    </div>
  );
};

export default Message;
