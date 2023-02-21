import styles from "./carousel.module.css";
import Craft from "../../assets/home/beerCrafts.png";
import BudIce from "../../assets/home/brands-bud.png";
import Brands from "../../assets/home/brands.png";
import Modelo from "../../assets/home/modelo.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Beer from "../../assets/home/beers.jpg";


export function Carousel() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     const bannerCarousel = document.getElementById("carousel2");
  //     // bannerCarousel.style.animation = "updown 7s";
  //   }, []);

  //   let count = 1;
  //   const backgroundImages = [Craft, BudIce, Brands, Modelo];

  //   setInterval(() => {
  //     const banner = document.getElementById("carousel2");

  //     if (banner) {
  //       banner.style.backgroundPosition = "center";
  //       banner.style.backgroundRepeat = "no-repeat";
  //       banner.style.backgroundSize = "cover";
  //       banner.style.backgroundImage = `url(${backgroundImages[count]})`;
  //     }
  //     if (count == backgroundImages.length) {
  //       count = 0;
  //     } else count++;
  //   }, 7000);
  // }, []);

  return (
    <div className={styles.carousel}>
        <img className={styles.img} src={Beer} alt="" />
        <div className={styles.msgBanner}>
          <p className={styles.msgBanner2}>
            <strong>VISITE NOSSA LOJA</strong>
          </p>
          <h1>A Cerveja que Combina com Você</h1>
          <Link to={"/products"}>
            <button className={styles.btnPortal}>COMPRAR AGORA</button>
          </Link>
        </div>
      </div>
  );
}
