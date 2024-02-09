import { Product } from "@/@types/custom/Product";
import React from "react";
import style from "./promotion.module.css";
import Grid from "@/component/general/grid";
import Icon from "@/component/general/icon";

import Link from "next/link";

const ProductPromotion: React.FC<Product> = ({ name, src }) => {
  return (
    <Link
      href=""
      className={`${style.box}`}
      style={{
        backgroundImage: `url(https://cdn4.vectorstock.com/i/1000x1000/41/93/big-sale-and-promotional-banner-template-vector-26294193.jpg)`,
      }}
    ></Link>
  );
};

export default ProductPromotion;
