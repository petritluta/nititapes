import Image from "next/image";
import style from "./store.module.css";
export default function StoreList() {
  return (
    <div className={style.list}>
      <div className="flex gap10">
        <div className={style.logo}>124</div>
        <div>
          <h1>Business Name</h1>
          <div>
            <Image
              src="/icon/location.png"
              alt="location"
              width={15}
              height={15}
              priority
            />
            <span>Prishtine, Kosova</span>
          </div>
        </div>
      </div>
      <a href="">Get Directions</a>
    </div>
  );
}
