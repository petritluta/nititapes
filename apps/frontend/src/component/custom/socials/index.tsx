import React from "react";
import style from "./socialMedia.module.css";
import Icon from "@/component/general/icon";

const SocialMedia: React.FC = () => {
  return (
    <div className={style.socialWrapper}>
      <Icon src="/icon/mail.svg" type={"black"} width={20} height={20} />
      <Icon src="/icon/mail.svg" type={"black"} width={20} height={20} />
      <Icon src="/icon/mail.svg" type={"black"} width={20} height={20} />
      <Icon src="/icon/mail.svg" type={"black"} width={20} height={20} />
    </div>
  );
};

export default SocialMedia;
