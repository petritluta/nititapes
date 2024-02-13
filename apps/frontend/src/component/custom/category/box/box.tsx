import { Product } from "@/@types/custom/Product";
import React from "react";
import style from "./box.module.css";
import Image from "next/image";
import Grid from "@/component/general/grid";
import Icon from "@/component/general/icon";

import Link from "next/link";

const CategoryBox: React.FC<Product> = ({ name, src }) => {
  return (
    <Link href="/category/1" className={`${style.box}`}>
      <div className={style.boxImage}>
        <Image
          src={src}
          alt={name}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <h2>{name}</h2>
    </Link>
  );
};

export default CategoryBox;
