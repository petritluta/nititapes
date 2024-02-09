import Grid from "@/component/general/grid";
import BreadCrumbs from "@/layout/breadcrumbs";
import style from "./productDetails.module.css";
import Link from "next/link";
import Heading from "@/component/general/heading";
import ProductBox from "@/component/custom/product/box";
import Gallery from "@/component/general/gallery";
export default function ProductDetails() {
  const images = [
    {
      _id: 1,
      src: "/image/2.jpg",
    },
    {
      _id: 2,
      src: "/image/1.jpg",
    },
    {
      _id: 1,
      src: "/image/2.jpg",
    },
    {
      _id: 2,
      src: "/image/1.jpg",
    },
    {
      _id: 1,
      src: "/image/2.jpg",
    },
    {
      _id: 2,
      src: "/image/1.jpg",
    },
    {
      _id: 1,
      src: "/image/2.jpg",
    },
    {
      _id: 2,
      src: "/image/1.jpg",
    },
  ];

  return (
    <div>
      <div className="container">
        <BreadCrumbs />
        <div className={style.productLayout}>
          <div>
            <Gallery images={images} />
          </div>
          <div>
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              vel itaque incidunt quam dicta dolor placeat sapiente, dolores
              excepturi nostrum suscipit esse voluptates doloremque animi
              aliquam consequuntur officia perferendis. Quisquam?
            </p>
            <div className={style.productTable}>
              <div>
                <span>Art No.</span>
                <p>123444</p>
              </div>
              <div>
                <span>Art No.</span>
                <p>123444</p>
              </div>
              <div>
                <span>Art No.</span>
                <p>123444</p>
              </div>
              <div>
                <span>Art No.</span>
                <p>123444</p>
              </div>
              <div>
                <span>Art No.</span>
                <p>123444</p>
              </div>
              <div>
                <span>Art No.</span>
                <p>123444</p>
              </div>
            </div>

            <Link href="" className="mainLink">
              Download Data Sheet
            </Link>
          </div>
        </div>
        <div>
          <Heading
            title={"View More from The product"}
            desc={
              "Insert Youtube Video Description in here Insert Youtube Video Description in here Insert Youtube Video Description in here Insert Youtube Video Description in here"
            }
          />
          <div className={style.videoWrapper}>
            <iframe
              style={{ margin: "auto" }}
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/sRKaRK5X5cw?si=OyydWqNClsWamYRI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
      <div style={{ margin: "50px 0px" }} className="grayWrapper">
        <div className="container">
          <h1 className="title">Related Products</h1>
          <Grid no={3}>
            {[...Array(3)].map((e, i) => (
              <ProductBox name={"Duct Tapes "} src={"/image/2.jpg"} key={i} />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
