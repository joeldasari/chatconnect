import React from "react";
const Login = () => {
  return (
    <div className="formContainer">
      <div className="formDetails">
        <span className="mainTitle">Chat Connect</span>
        <span className="subTitle">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
        <p>Don't have an account? Sign Up</p>
      </div>
    </div>
  );
};

export default Login;
