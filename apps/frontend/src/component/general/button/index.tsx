import { ButtonType } from "@/@types/general/Button";
import React from "react";
import style from "./button.module.css";

const Button: React.FC<ButtonType> = ({ submit, type, name }) => {
  return (
    <button className={`${style.btn} ${style[type]}`} onClick={submit}>
      {name}
    </button>
  );
};

export default Button;
