import { Product } from "@/@types/custom/Product";
import React from "react";
import style from "./catalog.module.css";

import Link from "next/link";
import Image from "next/image";

const CatalogBox: React.FC<Product> = ({ name, src }) => {
  return (
    <Link href="" className={`${style.box}`}>
      <h1>Katalogu 2024</h1>
      <div className={style.boxImage}>
        <Image
          src={src}
          alt={name}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </Link>
  );
};

export default CatalogBox;
