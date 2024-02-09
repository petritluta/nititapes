import Search from "@/component/custom/search";
import StoreList from "@/component/custom/store";
import Grid from "@/component/general/grid";
import style from "./store.module.css";

export default function Store() {
  return (
    <Grid no={2}>
      <div className={style.storeWrapper}>
        <Search />
        <div style={{marginTop:'50px'}}>
          <Grid no={1}>
            {[...Array(15)].map((e, i) => (
              <StoreList key={i} />
            ))}
          </Grid>
        </div>
      </div>
      <div style={{ backgroundColor: "#efefef", height: "100vh", position:'sticky', top:'0' }}></div>
    </Grid>
  );
}
