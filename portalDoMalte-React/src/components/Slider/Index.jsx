import SimpleImageSlider from "react-simple-image-slider";
import styles from "./slider.module.css"

const images = [
  { url: "src/assets/home/brands-bud.png" },
  { url: "src/assets/home/brands.png" },
  { url: "src/assets/home/beerCrafts.png" },
  { url: "src/assets/home/beerCraft2.png" },

];

export function Slider() {
  return (
    <div className={styles.slider}>
      <SimpleImageSlider
        width={1024}
        height={427}
        images={images}
        showBullets={true}
        showNavs={true}
        style={{ backgroundSize:'contain', backgroundPosition:'center'}}
      />
    </div>
  );
}
