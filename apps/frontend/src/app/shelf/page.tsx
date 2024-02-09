import CatalogBox from "@/component/custom/catalog";
import Grid from "@/component/general/grid";
import Heading from "@/component/general/heading";

export default function Shelf() {
  return (
    <div>
      <div className="container">
        <div>
          <Heading
            title={"Shelf Planning"}
            desc={
              "We offer an extensive range of tapes, with professional solutions which always meet the highest quality standards. The HPX brand came into existence in 2004 and since then quality improvement and development are our absolute priority. Moreover, we can look back on more than 25 years of experience."
            }
          />
          <Grid no={3}>
            {[...Array(3)].map((e, i) => (
              <CatalogBox name={"Duct Tapes "} src={"/image/2.jpg"} key={i} />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
