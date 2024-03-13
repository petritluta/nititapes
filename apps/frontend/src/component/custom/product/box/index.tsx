import { Product } from "@/@types/custom/Product";
import React from "react";
import style from "./box.module.css";
import Image from "next/image";
import Grid from "@/component/general/grid";
import Icon from "@/component/general/icon";

import Link from "next/link";
import { STRAPI_BASE_URL } from "@/constants/const";

const ProductBox: React.FC<Product> = ({
  product,
}: {
  product: { attributes: Product };
}) => {
  const { attributes } = product;
  return (
    <Link href="/product/1" className={`${style.box}`}>
      <Grid no={2}>
        <div className={style.boxImage}>
          <Image
            src={`${STRAPI_BASE_URL}${attributes.thumbnail.data.attributes.formats.medium.url}`}
            alt={`Product`}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className={style.boxData}>
          <h2>{attributes.title}</h2>
          <p>{attributes.description} </p>
          <div className={`flex gap10 ${style.iconColumn}`}>
            <div className="flex gap5">
              <Icon src="/icon/mail.svg" type={"main"} width={15} height={15} />
              <Icon
                src="/icon/phone.svg"
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
