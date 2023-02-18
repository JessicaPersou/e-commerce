import styles from "./brandsBeer.module.css";
import Paulaner from "../../assets/brands/paulaner.png";
import BlueMoon from "../../assets/brands/blue.png";
import Corona from "../../assets/brands/corona.png";
import Duff from "../../assets/brands/duff.png";
import Hoegaarden from "../../assets/brands/hoegaarden.png";
import Tiger from "../../assets/brands/tiger.png";
import Goose from "../../assets/brands/goose.png";
import Heineken from "../../assets/brands/h.png";
import Busch from "../../assets/brands/busch.png";
import Chang from "../../assets/brands/chang.png";
import Modelo from "../../assets/brands/modelo.png";
import Stella from "../../assets/brands/stella.png";

const images = [
  Paulaner,
  BlueMoon,
  Corona,
  Duff, 
  Hoegaarden,
  Tiger,
  Goose,
  Heineken, 
  Busch,
  Chang,
  Modelo,
  Stella
]

export function BrandsBeer() {

  return (
    <div>
      <div className={styles.innerCarousel}>
        {images.map((image) => {
          return (
            <div className={styles.items} key={image}>
              <img className={styles.imgCard} src={image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
