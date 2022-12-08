import styles from "./carousel.module.css";
import Barrel from "../../assets/home/barrel.png";
import Stock from "../../assets/home/stock.png";
import Tasting from "../../assets/home/tasting.png";
import Beer from "../../assets/home/beer.jpg";
import { useEffect } from "react";

export function Carousel() {
  useEffect(() => {
    setTimeout(() => {
      const bannerCarousel = document.getElementById("carousel");
      bannerCarousel.style.animation = "updown 5s";
    }, 10000);

    let count = 1;
    const images = [Barrel, Stock, Tasting, Beer];

    setInterval(() => {
      const banner = document.getElementById("carousel");

      if (banner) {
        banner.style.backgroundPosition = "center";
        banner.style.backgroundRepeat = "no-repeat";
        banner.style.backgroundSize = "cover";
        banner.style.backgroundImage = `linear-gradient(#000000 , #ffffff00 50%), url(${images[count]})`;
      }
      if (count == 3) {
        count = 0;
      } else count++;
    }, 7000);
  }, []);

  return (
    <div className={styles.carousel} id="carousel">
      <img className={styles.imgCard} src={images} />
    </div>
  );
}
