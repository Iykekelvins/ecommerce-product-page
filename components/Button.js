import React from "react";

const Button = ({ title, style, icon, onClick }) => {
  return (
    <button className={`btn ${style}`} onClick={onClick}>
      {icon && icon}
      <span> {title && title}</span>
    </button>
  );
};

export default Button;
