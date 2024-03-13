import Grid from "@/component/general/grid";
import ProductBox from "@/component/custom/product/box";
import { NextPage } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import getProducts from "@/fetchServices/server/page/products";

interface ProductsProps {
  lang: Locale;
}

const Products: NextPage<ProductsProps> = async ({ lang }) => {
  const l = await getDictionary(lang);
  const { data } = await getProducts(lang);

  return (
    <Grid no={3}>
      {data &&
        data.map((product, i: number) => (
          <ProductBox product={product} key={`product-box-${i}`} />
        ))}
    </Grid>
  );
};

export default Products;
