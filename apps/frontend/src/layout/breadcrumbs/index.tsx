import Link from "next/link";
import style from "./breadcrumbs.module.css";
export default function BreadCrumbs() {
  return <div className={style.breadcrumb}>
    <Link href="/">Homepage</Link>
    <span>{'>'}</span>
    <p>ProductName</p>
  </div>;
}
