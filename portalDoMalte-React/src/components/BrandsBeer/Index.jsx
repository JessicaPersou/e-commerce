import styles from "./brandsBeer.module.css";
import Paulaner from "../../assets/brands/paulaner.png";
import BlueMoon from "../../assets/brands/blue.png";
import Corona from "../../assets/brands/corona.png";
import Duff from "../../assets/brands/duff.png";
import Hoegaarden from "../../assets/brands/hoegaarden.png";
import Tiger from "../../assets/brands/tiger.png";
import Goose from "../../assets/brands/goose.png";
import Heineken from "../../assets/brands/h.png";
import Budweiser from "../../assets/brands/budweiser.png";
import Busch from "../../assets/brands/busch.png";
import Chang from "../../assets/brands/chang.png";
import Modelo from "../../assets/brands/modelo.png";
import Stella from "../../assets/brands/stella.png";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  Paulaner,
  BlueMoon,
  Corona,
  Duff,
  Hoegaarden,
  Tiger,
  Goose,
  Heineken,
  Budweiser,
  Busch,
  Chang,
  Modelo,
  Stella,
];

export function BrandsBeer() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth); 
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
      <motion.div className={styles.carousel} whileTap={{ cursor: "grabbing" }}>
        <motion.div
          drag="x"
          dragConstraints={{ rigth: 0 , left: -width }}
          className={styles.innerCarousel}
        >
          {images.map((image) => {
            return (
              <motion.div ref={carousel} className={styles.items} key={image}>
                <img className={styles.imgCard} src={image} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
  );
}
