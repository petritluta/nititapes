import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import Icon from "@/component/general/icon";
import MobileHeader from "./MobileHeader";
import Language from "@/component/custom/language";
import getHeader from "@/fetchServices/header";

export default async function Header() {
  const headerData = await getHeader();
  console.log("headerData", headerData);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerTopList}>
          <Link href="/">
            <Image
              src="./logo.svg"
              alt="Niti Tape"
              className={styles.vercelLogo}
              width={150}
              height={70}
              priority
            />
          </Link>
          <div className="flex gap5">
            <div className={`flex gap5 ${styles.mobileRemoveIcons}`}>
              <Icon
                src="/icon/mail.svg"
                type={"default"}
                width={20}
                height={20}
              />
              <Icon
                src="/icon/phone.svg"
                type={"default"}
                width={20}
                height={20}
              />
            </div>
            <Language />
            <MobileHeader />
          </div>
        </div>
      </div>
      <div className={styles.headerCategories}>
        <div className={`container`}>
          <div className={styles.headerList}>
            <ul>
              <li>
                <Link href="/product">Produkti</Link>
              </li>
              <li>
                <Link href="/catalog">Katalogu</Link>
              </li>
              <li>
                <Link href="/contact">Kontakti</Link>
              </li>
              <li>
                <Link href="/shelf">Shelf Planning</Link>
              </li>
              <li>
                <Link href="/store">Where to find us?</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
