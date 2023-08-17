import React from "react";
import img1 from "../assets/img1.png";
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formDetails">
        <span className="mainTitle">Chat Connect</span>
        <span className="subTitle">Register</span>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <div className="profilePic">
              <img src={img1} alt="profile-pic" />
              <span>Add Profile Photo</span>
            </div>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
