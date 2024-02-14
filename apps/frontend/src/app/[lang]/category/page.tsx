import CategoryBox from "@/component/custom/category/box/box";
import Grid from "@/component/general/grid";
import Heading from "@/component/general/heading";
import getCategory from "@/fetchServices/server/page/category";
import { NextPage } from "next";
import { get, map, memoize } from "lodash";
import AlertMessage from "@/component/general/alert";

const Category: NextPage<any> = async ({ params: { lang } }) => {
  const { data } = await getCategory("sq");

  const getImageUrl = memoize((attributes) => {
    return get(attributes, "image.data.attributes.url");
  });

  const category = data
    ? map(data, (obj) => {
        const attributes = get(obj, "attributes");
        const url = getImageUrl(attributes);
        return { ...attributes, url };
      })
    : [];

  return (
    <div>
      <div className="container">
        <div>
          <Heading
            title={"Kategorite"}
            desc={
              "We offer an extensive range of tapes, with professional solutions which always meet the highest q."
            }
          />
          {category && category.length > 0 ? (
            <Grid no={4}>
              {category.map((data, i) => (
                <CategoryBox
                  name={data.name}
                  slug={data.slug}
                  src={`http://localhost:1337${data.url}`}
                  key={i}
                />
              ))}
            </Grid>
          ) : (
            <AlertMessage text={"No Category found!"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
