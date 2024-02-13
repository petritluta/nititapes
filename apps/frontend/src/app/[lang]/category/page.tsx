import CategoryBox from "@/component/custom/category/box/box";
import Grid from "@/component/general/grid";
import Heading from "@/component/general/heading";

export default function Category() {
  const catalog = [
    {
      name: "Durable Airtight Products",
      img: "/image/catalog.jpeg",
    },
    {
      name: "Duct tapes",
      img: "/image/catalog.jpeg",
    },
    {
      name: "Mounting tapes",
      img: "/image/catalog.jpeg",
    },
    {
        name: "Mounting tapes",
        img: "/image/catalog.jpeg",
      },
  ];

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
          <Grid no={4}>
            {catalog.map((data, i) => (
              <CategoryBox name={"Duct Tapes"} src={data.img} key={i} />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
