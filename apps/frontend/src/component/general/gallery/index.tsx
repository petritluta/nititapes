"use client";
import style from "./gallery.module.css";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import NextJsImage from "./NextJsImage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Zoom, Keyboard, FreeMode, Navigation, Thumbs } from "swiper/modules";

const Gallery = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleSwiper = (swiper: any) => {
    setThumbsSwiper(swiper);
  };

  return (
    <div>
      {images && images.length > 0 ? (
        <div>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            keyboard={{
              enabled: true,
            }}
            zoom={true}
            modules={[Zoom, Keyboard, FreeMode, Navigation, Thumbs]}
          >
            {images.map(
              (image: { _id: string; src: string }, index: number) => (
                <SwiperSlide
                  key={index}
                  style={{
                    position: "relative",
                    height: "350px",
                    background: "#f2f2f2",
                    borderRadius: "10px",
                    cursor: "zoom-in",
                  }}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsZoomed(true);
                  }}
                >
                  <Image
                    alt={`main-image-${image._id}`}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain", borderRadius: "10px" }}
                    src={image?.src}
                    onClick={() => setCurrentIndex(index)}
                    className={index === currentIndex ? style.active : ""}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
          <Swiper
            onSwiper={handleSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            className="mySwiper"
            modules={[FreeMode, Navigation, Thumbs]}
            style={{ marginTop: "10px" }}
          >
            {images.map(
              (image: { _id: string; src: string }, index: number) => (
                <SwiperSlide
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                  style={{
                    position: "relative",
                    height: "80px",
                    width: "120px",
                    background: "#f2f2f2",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    alt={`main-image-${image._id}`}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain", borderRadius: "10px" }}
                    src={image?.src}
                    onClick={() => setCurrentIndex(index)}
                    className={index === currentIndex ? style.active : ""}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
          <>
            <Lightbox
              styles={{
                root: {
                  backgroundColor: "rgba(0,0,0,0.8)",
                },
                container: {
                  backgroundColor: "transparent",
                  borderRadius: "10px",
                  margin: "10px auto",
                },
                thumbnailsContainer: {
                  backgroundColor: "transparent",
                },
                thumbnail: {
                  backgroundColor: "rgb(242, 242, 242)",
                },
                thumbnailsTrack: {
                  backgroundColor: "transparent",
                },
              }}
              open={isZoomed && images.length > 0}
              close={() => setIsZoomed(false)}
              slides={[
                ...images.slice(currentIndex),
                ...images.slice(0, currentIndex),
              ].map((item: { src: string; _id: string }, index: number) => ({
                key: item._id || index,
                src: item.src,
                style: { backgroundColor: "#f2f2f2" },
              }))}
              render={{ slide: NextJsImage, thumbnail: NextJsImage }}
              plugins={[Thumbnails]}
            />
          </>
        </div>
      ) : (
        <div className={`${style.noImage}`}>No image found</div>
      )}
    </div>
  );
};

export default Gallery;
