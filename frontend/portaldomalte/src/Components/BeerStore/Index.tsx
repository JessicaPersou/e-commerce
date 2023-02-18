import styles from "./beerStore.module.css";

import AegisBrewing from "../../assets/products/aegis.png";
import Arkells from "../../assets/products/arkells.png";
import Brewdog from "../../assets/products/brewdog.png";
import Budweiser from "../../assets/products/bud.png";
import CoronaPremier from "../../assets/products/corona.png";
import FlysianDayglow from "../../assets/products/dayglow.png";
import DeschutesBrewery from "../../assets/products/deschutes.png";
import Duff from "../../assets/products/duff.png";
import GingerBeer from "../../assets/products/gingerBeer.png";
import GreatLakes from "../../assets/products/greatLakes.png";
import Heineken from "../../assets/products/he.png";
import Hoegaarden from "../../assets/products/ho.png";
import Lagunitas from "../../assets/products/lagunitas.png";
import MillerLite from "../../assets/products/lite.png";
import Miller from "../../assets/products/mi.png";
import Peroni from "../../assets/products/peroni.png";
import Stella from "../../assets/products/stela.png";
import Tiger from "../../assets/products/tiger.png";
import YorkBrewery from "../../assets/products/yorkbrewery.png";
import { Titles } from "../Titles/Index";
import { BrandsBeer } from "../BrandsBeer/Index";
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  MagnifyingGlass,
} from "phosphor-react";
import { ProductBeer } from "../ProductBeer/Index";

export function BeerStore() {
  return (
    <div className={styles.container}>
      <div className={styles.store}>
        <Titles title={"As Princípais Marcas"} />
        <div>
          <BrandsBeer />
        </div>
        <Titles title={"As Melhores Ofertas"} />
        <div className={styles.navSearch}>
          <input className={styles.inputSearch} type="text" />
          <button className={styles.btn}>
            <MagnifyingGlass size={28} color="#000000" />
          </button>
        </div>
        <div className={styles.component}>
          <ProductBeer/>
        </div>       
        <div className={styles.productsArrow}>
          <CaretDoubleLeft size={40} color="#f1dba6" />
          <CaretDoubleRight size={40} color="#f1dba6" />
        </div>
      </div>
    </div>
  );
}
