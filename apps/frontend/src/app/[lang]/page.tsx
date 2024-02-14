import Grid from "@/component/general/grid";
import Heading from "@/component/general/heading";
import ProductBox from "@/component/custom/product/box";
import ShelfPlanning from "@/layout/planning";
import Promotion from "@/layout/promotion";
import { NextPage } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Banner from "@/layout/banner";
import getHomepage from "@/fetchServices/server/page/homepage";

interface HomeProps {
  params: {
    lang: Locale;
  };
}

const Home: NextPage<HomeProps> = async ({ params: { lang } }) => {
  const l = await getDictionary(lang);
  const { data } = await getHomepage();
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
    <main>
      {/* <Banner
        title={data.attributes.banner_title}
        desc={data.attributes.banner_title}
      /> */}
      <div className="container">
        {/* <Heading
          title={data.attributes.welcome_title}
          desc={data.attributes.welcome_desc}
        /> */}
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
};

export default Home;
