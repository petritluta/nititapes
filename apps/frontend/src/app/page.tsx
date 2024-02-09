import Grid from "@/component/general/grid";
import styles from "./page.module.css";
import Heading from "@/component/general/heading";
import ProductBox from "@/component/custom/product/box";
import ShelfPlanning from "@/layout/planning";
import Promotion from "@/layout/promotion";

export default function Home() {
  const homeProducts = [
    {
      name: "Durable Airtight Products",
    },
    {
      name: "Duct tapes",
    },
    {
      name: "Mounting tapes",
    },
    {
      name: "Masking tapes",
    },
    {
      name: "Safety and Marking",
    },
    {
      name: "Packaging",
    },
  ];

  return (
    <main className={styles.main}>
      <div style={{ height: "40vh", backgroundColor: "#efefef" }}></div>
      <div className="container">
        <Heading
          title={"Welcome to Niti Tape"}
          desc={
            "We offer an extensive range of tapes, with professional solutions which always meet the highest quality standards. The HPX brand came into existence in 2004 and since then quality improvement and development are our absolute priority. Moreover, we can look back on more than 25 years of experience."
          }
        />
        <Grid no={3}>
          {homeProducts.map((data, i) => (
            <ProductBox
              name={data.name}
              src={`/image/products/product${i + 1}.jpeg`}
              key={i}
            />
          ))}
        </Grid>
      </div>
      <Promotion />
      <ShelfPlanning />
    </main>
  );
}
