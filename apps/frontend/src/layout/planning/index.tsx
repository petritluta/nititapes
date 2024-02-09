import Grid from "@/component/general/grid";
import style from "./planning.module.css";
import Heading from "@/component/general/heading";
import Link from "next/link";

export default function ShelfPlanning() {
  return (
    <div className={`container `}>
      <div className={`${style.planningWrapper}`}>
        <Grid no={2}>
          <div className={style.boxData}>
            <h2>Shelf Planning</h2>
            <p>
              There are several concepts available for various markets, these
              include the automotive sector, industrial and construction
              wholesale, leisure and recreation stores, etc. We can also create
              shelf plans on demand based on sales figures, points of sale and
              our experience. If you would like to obtain more information about
              these opportunities
            </p>
            <ul>
              <li>Development shelf plan</li>
              <li>Graphical representation</li>
              <li>Reality</li>
            </ul>
          </div>
          <div className={style.boxImage}>
            <div
              style={{
                backgroundImage: `url(https://s32519.pcdn.co/wp-content/uploads/2023/08/planning-shelves-hero-image.jpg.optimal.jpg)`,
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(https://www.wysupp.com/uploads/News%20Images/Planogram%20Creation.jpg)`,
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F315ca57d-442a-4d63-8cf9-34eaeb7ad5a4_1280x720.jpeg)`,
              }}
            ></div>
            {/* <Image
            src={src}
            alt={name}
            layout="fill"
            objectFit="contain"
            priority
          /> */}
          </div>
        </Grid>
      </div>
    </div>
  );
}
