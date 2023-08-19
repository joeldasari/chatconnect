import React from "react";
import Chat from "../components/chat";
import Sidebar from "../components/sidebar";
import Register from "./register";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <Sidebar />
        <Chat />
        {/* <Register /> */}
      </div>
    </div>
  );
};

export default Home;
