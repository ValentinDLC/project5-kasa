import React, { useState } from "react";
import "../assets/sass/Components/Collapse.scss";
import ArrowUp from "../assets/images/ArrowUp.svg";

function Collapse({ title, content, variant = "default" }) {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible((prev) => !prev);
  };

  return (
    <div className={`collapse-describe collapse-${variant}`}>
      <div className="description" onClick={toggleContent}>
        <span>{title}</span>
        <img
          src={ArrowUp}
          alt="Toggle content visibility"
          className={isContentVisible ? "rotated" : ""}
        />
      </div>
      <div className={`about_describe ${isContentVisible ? "visible" : ""}`}>
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
    </div>
  );
}

export default Collapse;
