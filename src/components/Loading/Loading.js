import React from "react";
import "./Loading.css";

const Loading = ({ title }) => {
  return (
    <div className="jokelist-spinner">
      <i className="far fa-8x fa-laugh fa-spin" />
      <h1 className="jokelist-title">{title}</h1>
    </div>
  );
};

export default Loading;
