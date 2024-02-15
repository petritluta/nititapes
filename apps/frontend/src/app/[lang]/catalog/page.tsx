import CatalogBox from "@/component/custom/catalog";
import Grid from "@/component/general/grid";
import Heading from "@/component/general/heading";
import getCatalog from "@/fetchServices/server/page/catalog";
import { NextPage } from "next";
import { get, map, memoize } from "lodash";

const Catalog: NextPage<any> = async ({ params: { lang } }) => {
  const { data } = await getCatalog("sq");

  const getImageUrl = memoize((attributes) => {
    return get(attributes, "cover.data.attributes.url");
  });

  const catalog = data
    ? map(data, (obj) => {
        const attributes = get(obj, "attributes");
        const url = getImageUrl(attributes);
        return { ...attributes, url };
      })
    : [];

  console.log("katalog", catalog);

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
          <Grid no={4}>
            {catalog.map((data, i) => (
              <CatalogBox
                name={data.title}
                key={i}
                src={`http://localhost:1337${data.url}`}
                slug={data.url}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
