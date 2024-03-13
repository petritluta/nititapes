import Grid from "@/component/general/grid";
import styles from "./banner.module.css";
import Link from "next/link";
import Anchor from "@/component/general/anchor";
9;
const Banner = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div
      className={styles.homeBanner}
      style={{
        backgroundImage: "url('/image/banner.png')",
      }}
    >
      <div className="container relative">
        <Grid no={2}>
          <div className={styles.bannerText}>
            <h1>{title}</h1>
            <p>{desc} </p>
            <div className={`flex gap10 ${styles.anchorBanner}`}>
              <Anchor
                link={"product"}
                name={"Shfleto Produktet"}
                type={"main"}
              />
              <Anchor
                link={"catalog"}
                name={"Shfleto Katalogun"}
                type={"borderMain"}
              />
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Banner;
