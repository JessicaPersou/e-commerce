import styles from "./carousel.module.css";
import SimpleImageSlider from "react-simple-image-slider";

export function Carousel() {
  const images = [
    { url: "./src/assets/home/barrel.png" },
    { url: "./src/assets/home/stock.png" },
    { url: "./src/assets/home/tasting.png" },
    { url: "./src/assets/home/beer.jpg" },
  ];

  return (
    <div className={styles.carousel}>
      <SimpleImageSlider
        width={1279}
        height={769}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={1.5}
        autoPlay={true}
      />
    </div>
  );
}
