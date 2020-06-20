import React from "react";
import "./button.css";

const Button = ({ url, text }) => (
  <div className="button">
    <a href={url} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </div>
);

export default Button;
