import styles from "./main.module.css";
import Banner from "../../assets/products/brands.png";
import DuffPack from "../../assets/home/duffPack.png";
import Heineken from "../../assets/home/heinekens.png";
import BrandsBud from "../../assets/home/brands-bud.png";
import CoronaExtra from "../../assets/home/coronaPack.png";
import Modelo from "../../assets/home/modelo.png";
import Stock from "../../assets/home/stock.png";
import BeerStore from "../../assets/home/brandsStore.png";
import Barrel from "../../assets/home/barrel.png";

import Paulaner from "../../assets/brands/paulaner.png";
import BlueMoon from "../../assets/brands/blue.png";
import Corona from "../../assets/brands/corona.png";
import Duff from "../../assets/brands/duff.png";
import Hoegaarden from "../../assets/brands/hoegaarden.png";
import Tiger from "../../assets/brands/tiger.png";
import Goose from "../../assets/brands/goose.png";

import Left from "../../assets/elements/angle-circle-left.svg";
import Rigth from "../../assets/elements/angle-circle-right.svg";
import Email from "../../assets/elements/envelope-plus.svg";

import { CardProducts } from "../CardProducts";
import { BrandsBeers } from "../BrandsBeer/Index";

export function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.arrowBanner}>
        <img className={styles.arrow} src={Left} alt="" />
        <img
          className={styles.banner}
          width="100%"
          max-height="50vh"
          src={Banner}
          alt=""
        />
        <img className={styles.arrow} src={Rigth} alt="" />
      </div>
      <hr className={styles.line} />
      <div className={styles.msg}>
        <h1>OFERTAS IMPERDÍVEIS!</h1>
      </div>
      <div className={styles.brands}>
        <img className={styles.arrow} src={Left} alt="" />
        <BrandsBeers img={Goose} />
        <BrandsBeers img={Paulaner} />
        <BrandsBeers img={BlueMoon} />
        <BrandsBeers img={Corona} />
        <BrandsBeers img={Duff} />
        <BrandsBeers img={Hoegaarden} />
        <BrandsBeers img={Tiger} />
        <img className={styles.arrow} src={Rigth} alt="" />
      </div>
      <div className={styles.msg}>
        <h2>As Melhores Marcas estão aqui!</h2>
      </div>
      <div className={styles.component}>
        <img className={styles.arrow} src={Left} alt="" />
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
        <img className={styles.arrow} src={Rigth} alt="" />
      </div>
      <div className={styles.msg}>
        <h2>Ofertas de Combos!</h2>
      </div>
      <div className={styles.component}>
        <img className={styles.arrow} src={Left} alt="" />
        <CardProducts
          img={BrandsBud}
          title={"Budweiser + Heineken + Corona ( Cada saí à R$ 5,58 ) 350ml "}
          description={"R$ 27,90"}
        />
        <CardProducts
          img={Modelo}
          title={"Modelo 5 Unidades Tamanhos Variados"}
          description={"R$ 54,90"}
        />
        <CardProducts
          img={Stock}
          title={"kit com 8 Unidades Stock Diversas 350ml"}
          description={"R$ 59,90"}
        />
        <img className={styles.arrow} src={Rigth} alt="" />
      </div>
      <div className={styles.txtNews}>
        <p>Conheça mais sobre o mundo da cerveja, leia nossas histórias!</p>
        <div className={styles.news}>
          <img className={styles.imgNews} src={BeerStore} alt="" />
          <img className={styles.imgNews} src={Barrel} alt="" />
        </div>
      </div>
      <div className={styles.newsLetter}>
        <img className={styles.arrow} src={Email} alt="" />
        <label className={styles.labelNews} htmlFor="">
          CADATRE-SE PARA RECEBER NOSSAS NOVIDADES POR E-MAIL:
        </label>
        <input
          className={styles.inputNews}
          type="email"
          name=""
          id=""
          placeholder="maria@mail.com"
        />
        <a href="/register"><button className={styles.btnSend} type="submit">CADASTRAR</button></a>
      </div>
    </div>
  );
}
