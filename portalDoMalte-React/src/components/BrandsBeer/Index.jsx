import styles from "./brandsBeer.module.css";
import Paulaner from "../../assets/brands/paulaner.png";
import BlueMoon from "../../assets/brands/blue.png";
import Corona from "../../assets/brands/corona.png";
import Duff from "../../assets/brands/duff.png";
import Hoegaarden from "../../assets/brands/hoegaarden.png";
import Tiger from "../../assets/brands/tiger.png";
import Goose from "../../assets/brands/goose.png";
import Heineken from "../../assets/brands/h.png";


const images = [
  Paulaner,
  BlueMoon,
  Corona,
  Duff,
  Hoegaarden,
  Tiger,
  Goose,
  Heineken,
];

export function BrandsBeer() {

  return (
    <div className={styles.carousel}>
      {images.map((image) => (
        <div className={styles.card} key={image}>
          <img className={styles.imgCard} src={image} />
        </div>
      ))}
    </div>
  );
}
