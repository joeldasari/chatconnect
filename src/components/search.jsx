import React from "react";
import userpic from "../assets/userpic.jpg";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input className="searchbar" type="text" placeholder="Find a user..." />
      </div>
      <div className="userChat">
        <img src={userpic} alt="userpic" />
        <div className="userInfo">
          <span className="userName">Kocho Shinobu</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
