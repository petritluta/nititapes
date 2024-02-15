import Image from "next/image";
import style from "./store.module.css";
import { head } from "lodash";

export default function StoreList({ data }: any) {
  return (
    <div className={style.list}>
      <div className="flex gap10">
        <div className={style.logo}>{!data.logo ? head(data.name) : ""}</div>
        <div>
          <h1>{data.name}</h1>
          <div>
            <Image
              src="/icon/location.png"
              alt="location"
              width={15}
              height={15}
              priority
            />
            <span>
              {data.city}, {data.country}
            </span>
          </div>
        </div>
      </div>
      <a href={data.direction} target="_blank">
        Get Directions
      </a>
    </div>
  );
}
