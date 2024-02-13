import React from "react";
import style from "./anchor.module.css";
import Link from "next/link";
import { AnchorType } from "@/@types/general/Anchor";

const Anchor: React.FC<AnchorType> = ({ link, name, type }) => {
  return (
    <Link href={link} className={`${style.anchor} ${style[type]}`}>
      {name}
    </Link>
  );
};

export default Anchor;
