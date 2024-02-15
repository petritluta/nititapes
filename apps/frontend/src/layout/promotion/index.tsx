import Heading from "@/component/general/heading";
import Grid from "@/component/general/grid";
import ProductPromotion from "@/component/custom/product/promotion";

export default function Promotion() {
  return (
    <div>
      <Heading title={"Promotions"} />
      <Grid no={2}>
        {[...Array(2)].map((e, i) => (
          <ProductPromotion name={"Duct Tapes "} src={"/image/2.jpg"} key={i} slug={'/'}/>
        ))}
      </Grid>
    </div>
  );
}
