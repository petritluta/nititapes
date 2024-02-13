import Grid from "@/component/general/grid";
import styles from "./banner.module.css";
import Link from "next/link";
import Anchor from "@/component/general/anchor";
9;
const Banner = () => {
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
            <h1>Niti Tape</h1>
            <p>
              We offer an extensive range of tapes, with professional solutions
              which always meet the highest quality standards. The HPX brand
              came into existence in 2004.
            </p>
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
