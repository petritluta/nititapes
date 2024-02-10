import styles from "./banner.module.css";
9;
const Banner = () => {
  return (
    <div
      className={styles.homeBanner}
      style={{
       
        backgroundImage: "url('/image/banner.png')",
      }}
    ></div>
  );
};

export default Banner;
