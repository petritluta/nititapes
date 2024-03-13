import Heading from "@/component/general/heading";
import ShelfPlanning from "@/layout/planning";
import Promotion from "@/layout/promotion";
import { NextPage } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Banner from "@/layout/banner";
import getHomepage from "@/fetchServices/server/page/homepage";
import Products from "@/layout/products";

interface HomeProps {
  params: {
    lang: Locale;
  };
}

const Home: NextPage<HomeProps> = async ({ params: { lang } }) => {
  const l = await getDictionary(lang);
  const { data } = await getHomepage();

  return (
    <main>
      <Banner
        title={data?.attributes?.banner_title}
        desc={data?.attributes?.welcome_desc}
      />
      <div className="container">
        <Heading
          title={data.attributes.welcome_title}
          desc={data.attributes.welcome_desc}
        />
        <Products lang={lang} />
      </div>
      <Promotion />
      <ShelfPlanning />
    </main>
  );
};

export default Home;
