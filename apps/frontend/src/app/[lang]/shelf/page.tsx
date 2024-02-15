import CatalogBox from "@/component/custom/catalog";
import Grid from "@/component/general/grid";
import Heading from "@/component/general/heading";
import getShelf from "@/fetchServices/server/page/shelf";
import { NextPage } from "next";
import { get } from "lodash";

const Shelf: NextPage<any> = async ({ params: { lang } }) => {
  const { data } = await getShelf();

  const shelfData = data ? get(data, "attributes") : [];

  const shelfDataPlan = [
    shelfData.development.data.attributes,
    shelfData.representation.data.attributes,
    shelfData.reality.data.attributes,
  ];
  return (
    <div>
      <div className="container">
        <div>
          <Heading title={shelfData.title} desc={shelfData.description} />
          <Grid no={3}>
            {shelfDataPlan.map((data, i) => (
              <CatalogBox
                name={data.name}
                src={`http://localhost:1337${data.url}`}
                key={i}
                slug=""
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Shelf;
