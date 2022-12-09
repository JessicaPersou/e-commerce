import styles from "./carousel.module.css";
import Stock from "../../assets/home/stock.png";
import Tasting from "../../assets/home/tasting.png";
import Beer from "../../assets/home/beer.jpg";
import { useEffect } from "react";

export function Carousel() {
  useEffect(() => {
    setTimeout(() => {
      const bannerCarousel = document.getElementById("carousel2");
      bannerCarousel.style.animation = "updown 5s";
    }, 70000);

    let count = 1;
    const backgroundImages = [Stock, Tasting, Beer];

    setInterval(() => {
      const banner = document.getElementById("carousel2");

      if (banner) {
        banner.style.backgroundPosition = "center";
        banner.style.backgroundRepeat = "no-repeat";
        banner.style.backgroundSize = "cover";
        banner.style.backgroundImage = `linear-gradient(#000000 , #ffffff00 50%), url(${backgroundImages[count]})`;
      }
      if (count == backgroundImages.length) {
        count = 0;
      } else count++;
    }, 7000);
  }, []);

  return <div className={styles.carousel2} id="carousel2"></div>;
}
