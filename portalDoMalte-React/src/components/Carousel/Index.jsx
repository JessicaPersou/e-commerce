import styles from "./carousel.module.css";
import SimpleImageSlider from "react-simple-image-slider";

export function Carousel() {
  const images = [
    { url: "./src/assets/home/barrel.png" },
    { url: "./src/assets/home/beerCrafts_.png" },
    { url: "./src/assets/home/brands-bud_.png" },
    { url: "./src/assets/home/stock_.png" },
    { url: "./src/assets/home/beerCraft2.png" },
    { url: "./src/assets/home/modelo_.png" }
  ];


  return (
    <div className={styles.carousel}>
      <SimpleImageSlider
        width={1024}
        height={527}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

