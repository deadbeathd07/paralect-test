import React from "react";

function StartComponent({ icon, text }) {
  return (
    <div className="start-component">
      <img
        className="start-component__icon"
        src={icon}
        alt="Component Icon"
      />
      <p className="start-component__text">{text}</p>
    </div>
  );
}

export default StartComponent;
