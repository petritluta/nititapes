import Image from "next/image";
import {
  ContainerRect,
  isImageFitCover,
  isImageSlide,
  SlideImage,
  useLightboxProps,
} from "yet-another-react-lightbox";

const NextJsImage = ({
  slide,
  rect,
}: {
  slide: SlideImage;
  rect: ContainerRect;
}) => {
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  const width = rect.width;

  const height = rect.height;

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        src={slide.src}
        loading="eager"
        draggable={false}
        style={{ objectFit: cover ? "cover" : "contain" }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  );
};

export default NextJsImage;
