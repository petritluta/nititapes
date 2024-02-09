import { HeadingType } from "@/@types/general/Heading";
import React from "react";
import style from "./heading.module.css";

const Heading: React.FC<HeadingType> = ({ title, desc }) => {
  return (
    <div className={`${style.heading}`}>
      <h1>{title}</h1>
      {desc && <p>{desc}</p>}
    </div>
  );
};

export default Heading;
