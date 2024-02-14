import React from "react";
import style from "./alert.module.css";
import Image from "next/image";

const AlertMessage: React.FC<any> = ({ text }) => {
  return (
    <div className={style.alertBox}>
      <Image src={`/icon/page-not-found.png`} alt={'not found'}  width={200} height={200} />
      {text}
    </div>
  );
};

export default AlertMessage;
