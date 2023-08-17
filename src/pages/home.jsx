import React from "react";
import Chat from "../components/chat";
import Sidebar from "../components/sidebar";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
