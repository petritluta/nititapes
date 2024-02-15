import Search from "@/component/custom/search";
import StoreList from "@/component/custom/store";
import Grid from "@/component/general/grid";
import style from "./store.module.css";
import { NextPage } from "next";
import { get, map, pick } from "lodash";
import getStore from "@/fetchServices/server/page/store";

const Store: NextPage<any> = async ({ params: { lang } }) => {
  const { data } = await getStore();
  const storeData = data
    ? map(data, (obj) => {
        const attributes = get(obj, "attributes");

        return attributes;
      })
    : [];

  return (
    <Grid no={2}>
      <div className={style.storeWrapper}>
        <Search />
        <div style={{ marginTop: "50px" }}>
          <Grid no={1}>
            {storeData.map((store, i) => (
              <StoreList key={i} data={store} />
            ))}
          </Grid>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#efefef",
          height: "100vh",
          position: "sticky",
          top: "0",
        }}
      ></div>
    </Grid>
  );
};

export default Store;
