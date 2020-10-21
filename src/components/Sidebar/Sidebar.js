import React from "react";
import { jokesIcon } from "../../config";
import "./Sidebar.css";

const Sidebar = ({ getJokes }) => {
  return (
    <div className="jokelist-sidebar">
      <h1 className="jokelist-title">
        <span>React Sample Jokes</span>
      </h1>
      <img src={jokesIcon} alt="icon" />
      <button className="jokelist-getmore" onClick={getJokes}>
        Get More
      </button>
    </div>
  );
};

export default Sidebar;
