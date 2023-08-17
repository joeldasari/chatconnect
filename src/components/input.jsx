import React from "react";
import addImage from "../assets/addImage.png";
import attachFile from "../assets/attachFile.png";

const Input = () => {
  return (
    <div className="inputBox">
      <div className="inputLeft">
        <input type="text" placeholder="Type Something..." />
      </div>
      <div className="inputRight">
        <input type="file" id="attachFile" style={{ display: "none" }} />
        <label htmlFor="attachFile">
          <img src={attachFile} alt="attachFile" className="attachFile" />
        </label>
        <input type="file" id="addImage" style={{ display: "none" }} />
        <label htmlFor="addImage">
          <img src={addImage} alt="addImage" className="addImage" />
        </label>
        <button className="sendBtn">Send</button>
      </div>
    </div>
  );
};

export default Input;
