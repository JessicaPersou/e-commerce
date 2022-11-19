import styles from "./main.module.css";
import DuffPack from "../../assets/home/duffPack.png";
import Heineken from "../../assets/home/heinekens.png";
import CoronaExtra from "../../assets/home/coronaPack.png";
import BeerStore from "../../assets/home/brandsStore.png";
import Barrel from "../../assets/home/basket.png";

import Banner from "../../assets/products/brands.png";
import ChangClassicBeer from "../../assets/products/changClassicBeer.png";
import MeiselAndFriends from "../../assets/products/meiselFriends.png";
import KitBeer from "../../assets/products/kit.png";

import Paulaner from "../../assets/brands/paulaner.png";
import BlueMoon from "../../assets/brands/blue.png";
import Corona from "../../assets/brands/corona.png";
import Duff from "../../assets/brands/duff.png";
import Hoegaarden from "../../assets/brands/hoegaarden.png";
import Tiger from "../../assets/brands/tiger.png";
import Goose from "../../assets/brands/goose.png";

import { CardProducts } from "../CardProducts";
import { BrandsBeers } from "../BrandsBeer/Index";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";

export function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.arrowBanner}>
        <ArrowCircleLeft color="#e1dbdb" size={40} />
        <img
          className={styles.banner}
          width="100%"
          max-height="50vh"
          src={Banner}
          alt=""
        />
        <ArrowCircleRight color="#e1dbdb" size={40} />
      </div>

      <div className={styles.msg}>
        <h1>OFERTAS IMPERDÍVEIS!</h1>
      </div>
      <hr className={styles.line} />
      <div className={styles.brands}>
        <ArrowCircleLeft color="#e1dbdb" size={40} />

        <BrandsBeers img={Goose} />
        <BrandsBeers img={Paulaner} />
        <BrandsBeers img={BlueMoon} />
        <BrandsBeers img={Corona} />
        <BrandsBeers img={Duff} />
        <BrandsBeers img={Hoegaarden} />
        <BrandsBeers img={Tiger} />
        <ArrowCircleRight color="#e1dbdb" size={40} />
      </div>
      <div className={styles.msg}>
        <h2>As Melhores Marcas estão aqui!</h2>
      </div>
      <div className={styles.component}>
        <ArrowCircleLeft color="#e1dbdb" size={40} />
        <CardProducts
          img={DuffPack}
          title={"Pack com 6 Unidades Duff Beer 350ml"}
          description={"R$ 37,90"}
        />
        <CardProducts
          img={Heineken}
          title={"Pack com 6 Unidades Heineken 600ml"}
          description={"R$ 34,90"}
        />
        <CardProducts
          img={CoronaExtra}
          title={"Double Pack com 6 Unidades Cada Corona Extra 350ml"}
          description={"R$ 39,90"}
        />
        <ArrowCircleRight color="#e1dbdb" size={40} />
      </div>
      <div className={styles.msg}>
        <h2>Ofertas de Combos!</h2>
      </div>
      <div className={styles.component}>
        <ArrowCircleLeft color="#e1dbdb" size={40} />
        <CardProducts
          img={KitBeer}
          title={"Kit Happy Hour Beer 6 Unidades Marcas Diversas 355ml"}
          description={"R$ 58,90"}
        />
        <CardProducts
          img={MeiselAndFriends}
          title={"Meisel And Friends 3 Unidades 600ml"}
          description={"R$ 54,90"}
        />
        <CardProducts
          img={ChangClassicBeer}
          title={"Chang Classic Beer 6 Unidades 350ml"}
          description={"R$ 79,90"}
        />
        <ArrowCircleRight color="#e1dbdb" size={40} />
      </div>
      <div className={styles.txtNews}>
        <p>
          Nas compras acima de <strong>R$ 300,00</strong>
          <br /> concorra a uma super cesta com <strong>15 itens</strong>{" "}
          exclusivos!
        </p>
        <div className={styles.news}>
          <img className={styles.imgNews} src={BeerStore} alt="" />
          <img className={styles.imgNews} src={Barrel} alt="" />
        </div>
      </div>
      <div className={styles.newsLetter}>
        <p className={styles.labelNews} htmlFor="">
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
        <a href="/register">
          <button type="submit">CADASTRAR</button>
        </a>
      </div>
    </div>
  );
}
