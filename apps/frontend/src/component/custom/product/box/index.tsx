import { Product } from "@/@types/custom/Product";
import React from "react";
import style from "./box.module.css";
import Image from "next/image";
import Grid from "@/component/general/grid";
import Icon from "@/component/general/icon";

import Link from "next/link";

const ProductBox: React.FC<Product> = ({ name, src }) => {
  return (
    <Link href="/product/1" className={`${style.box}`}>
      <Grid no={2}>
        <div className={style.boxImage}>
          <Image
            src={src}
            alt={name}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className={style.boxData}>
          <h2>{name}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quod
            facili...
          </p>
          <div className={`flex gap10 ${style.iconColumn}`}>
            <div className="flex gap5">
              <Icon
                src="/icon/mail-white.svg"
                type={"main"}
                width={15}
                height={15}
              />
              <Icon
                src="/icon/phone-white.svg"
                type={"main"}
                width={15}
                height={15}
              />
            </div>
            <span className="simpleLink">Lexo me shume</span>
          </div>
        </div>
      </Grid>
      <div className={`flex gap10 ${style.mobileIcon}`}>
        <div className="flex gap5">
          <Icon
            src="/icon/mail-white.svg"
            type={"main"}
            width={15}
            height={15}
          />
          <Icon
            src="/icon/phone-white.svg"
            type={"main"}
            width={15}
            height={15}
          />
        </div>
        <span className="simpleLink">Lexo me shume</span>
      </div>
    </Link>
  );
};

export default ProductBox;
