"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import Language from "@/component/custom/language";
import Icon from "@/component/general/icon";
import { Turn as Hamburger } from "hamburger-react";

export default function MobileHeader() {
  const [displayMobile, setDisplayMobile] = useState(false);
  return (
    <div className={styles.mobileHeader}>
      <button className={styles.hamburgerMenu}>
        <Hamburger
          easing="ease-in"
          size={20}
          distance="sm"
          color="var(--gray)"
          onToggle={(toggled) => {
            if (toggled) {
              // open a menu
              setDisplayMobile(true);
            } else {
              // close a menu
              setDisplayMobile(false);
            }
          }}
        />
      </button>
      {displayMobile && (
        <div className={styles.headerCategoriesMobile}>
          <div className={`container ${styles.mobileHeaderWrapper}`}>
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
            <div className={styles.mobileHeaderIcons}>
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
          </div>
        </div>
      )}
    </div>
  );
}
