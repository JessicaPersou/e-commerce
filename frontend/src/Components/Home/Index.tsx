import styles from "./home.module.css";
import DuffPack from "../../assets/home/duffPack.png";
import Heineken from "../../assets/home/heinekens.png";
import CoronaExtra from "../../assets/home/coronaPack.png";
import BeerStore from "../../assets/home/brandsStore.png";
import Barrel from "../../assets/home/basket.png";
import ChangClassicBeer from "../../assets/products/changClassicBeer.png";
import MeiselAndFriends from "../../assets/products/meiselFriends.png";
import Beer from "../../assets/home/beers.jpg";
import { BrandsBeer } from "../BrandsBeer/Index";
import { ArrowCircleLeft, ArrowCircleRight, Circle } from "phosphor-react";
import { Carousel } from "../Carousel/Index";
import { Link } from "react-router-dom";
import { Titles } from "../Titles/Index";
import { ProductBeer } from "../ProductBeer/Index";

export function Home() {
  return (
    <div className={styles.home}>
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
      <div className={styles.circle}>
        <Circle size={16} color="#2e2e2e" />
        <Circle size={16} color="#2e2e2e" />
        <Circle size={16} color="#2e2e2e" />
      </div>
      <Titles title={"A Melhora Coleção para Amantes de Cervejas Artesanais"} />
      <div className={styles.txt}>
        <p>
          Nossa loja online tem acesso a uma ampla
          <br />
          variedade de rótulos do mundo inteiro e temos muitas promoções para
          você aproveitar.{" "}
        </p>
      </div>

      <div className={styles.brandsComponent}>
        <BrandsBeer />
      </div>
      <div className={styles.circle}>
        <Circle size={16} color="#2e2e2e" />
        <Circle size={16} color="#2e2e2e" />
        <Circle size={16} color="#2e2e2e" />
      </div>
      {/* <div className={styles.productsHome}>
        <ProductBeer />
      </div> */}
      <div className={styles.more}>

      </div>
      <div className={styles.newsLetter}>
        <p className={styles.labelNews}>
          <strong>
            {" "}
            Cadastre-se para receber nossas novidades por e-mail:
          </strong>
        </p>
        <input
          className={styles.inputNews}
          type="email"
          name=""
          id=""
          placeholder="maria@gmail.com"
        />
        <Link to="/register">
          <button className={styles.btnPortal} type="submit">
            <strong>CADASTRAR</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}
