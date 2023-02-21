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
import { GetProduct } from "../ProductBeer/GetProduct";
import BeerLogo from "../../assets/logo/1.png";
import Malte from "../../assets/home/malte.jpg";
import Lupulo from "../../assets/home/lupulo.jpg";
import Cevada from "../../assets/home/cevada.jpg";

export function Home() {
  return (
    <div className={styles.home}>
      <Carousel />
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
      <div className={styles.productsHome}>
        <ProductBeer />
      </div>
      <div className={styles.circle}>
        <Circle size={16} color="#2e2e2e" />
        <Circle size={16} color="#2e2e2e" />
        <Circle size={16} color="#2e2e2e" />
      </div>
      <div className={styles.more}>
        <Titles title={"Craft Beer Lover`s"} />
        <div className={styles.craft}>
          <img className={styles.imgLover} src={Malte} alt="" />
          <p className={styles.txtCraft}>
          &ldquo;O malte é um cereal germinado e torrado. Para obtê-lo, são feitos
            vários processos industriais,<br /> a começar pelo teste do poder de
            germinação do cereal, que pode ser o trigo, centeio ou milho, por
            exemplo.&rdquo;
          </p>
        </div>
        <div className={styles.craft}>
          <img className={styles.imgLover} src={Lupulo} alt="" />
          <p className={styles.txtCraft}>
          &ldquo;O lúpulo é uma flor da família das canabidáceas, a mesma da maconha,
            mas sem seu efeito entorpecente.
            <br />A única função dessa planta é dar sabor e aroma à cerveja e
            chopp.&rdquo;
          </p>
        </div>
        <div className={styles.craft}>
          <img className={styles.imgLover} src={Cevada} alt="" />
          <p className={styles.txtCraft}>
          &ldquo;A cevada é um cereal utilizado no processo de produção do malte.<br />
            Trata-se de um dos cereais mais usados pela indústria cervejeira,
            porque oferece ótimo custo-benefício.&rdquo;
          </p>
        </div>
      </div>
      <div className={styles.circle}>
        <Circle size={16} color="#2e2e2e" />
        <Circle size={16} color="#2e2e2e" />
        <Circle size={16} color="#2e2e2e" />
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
