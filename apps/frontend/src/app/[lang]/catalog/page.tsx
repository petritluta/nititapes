import CatalogBox from "@/component/custom/catalog";
import Grid from "@/component/general/grid";
import Heading from "@/component/general/heading";

export default function Catalog() {
  const catalog = [
    {
      name: "Durable Airtight Products",
      img:"/image/catalog.jpeg"
    },
    {
      name: "Duct tapes",
      img:"/image/catalog.jpeg"
    },
    {
      name: "Mounting tapes",
      img:"/image/catalog.jpeg"
    },
  ];

  return (
    <div>
      <div className="container">
        <div>
          <Heading
            title={"Catalog"}
            desc={
              "We offer an extensive range of tapes, with professional solutions which always meet the highest quality standards. The HPX brand came into existence in 2004 and since then quality improvement and development are our absolute priority. Moreover, we can look back on more than 25 years of experience."
            }
          />
          <Grid no={3}>
            {catalog.map((data, i) => (
              <CatalogBox name={"Duct Tapes "} src={data.img} key={i} />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
