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
import { CardProducts } from "../CardProducts/Index";
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  MagnifyingGlass,
} from "phosphor-react";

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
            <MagnifyingGlass size={32} color="#000000" />
          </button>
        </div>
        <div className={styles.component}>
          <CardProducts />
          {/* <CardProducts
            img={Arkells}
            title={"Cerveja Arkell's 500ml"}
            description={"R$ 11,90"}
          />
          <CardProducts
            img={Brewdog}
            title={"Cerveja Brewdog 330ml"}
            description={"R$ 13,90"}
          />
          <CardProducts
            img={Budweiser}
            title={"Cerveja Budweiser 330ml"}
            description={"R$ 4,90"}
          />
          <CardProducts
            img={CoronaPremier}
            title={"Cerveja Corona Premier 330ml"}
            description={"R$ 5,90"}
          />
          <CardProducts
            img={DeschutesBrewery}
            title={"Cerveja Deschutes Brewery 355ml"}
            description={"R$ 14,90"}
          />
          <CardProducts
            img={FlysianDayglow}
            title={"Cerveja Flysian Dayglow IPA 600ml"}
            description={"R$ 17,90"}
          />
          <CardProducts
            img={Duff}
            title={"Cerveja Duff Beer 355ml"}
            description={"R$ 9,90"}
          />
          <CardProducts
            img={GingerBeer}
            title={"Cerveja Ginger Beer 250ml"}
            description={"R$ 9,90"}
          />
          <CardProducts
            img={GreatLakes}
            title={"Cerveja Great Lakes Brewing Co 355ml"}
            description={"R$ 10,90"}
          />
          <CardProducts
            img={Heineken}
            title={"Cerveja Heineken 355ml"}
            description={"R$ 6,90"}
          />
          <CardProducts
            img={Hoegaarden}
            title={"Cerveja Hoegaarden 750ml"}
            description={"R$ 7,90"}
          />
          <CardProducts
            img={Lagunitas}
            title={"Cerveja Lagunitas IPA 330ml"}
            description={"R$ 7,90"}
          />
          <CardProducts
            img={MillerLite}
            title={"Cerveja Miller Lite 473ml"}
            description={"R$ 9,90"}
          />
          <CardProducts
            img={Miller}
            title={"Cerveja Miller 330ml"}
            description={"R$ 12,90"}
          />
          <CardProducts
            img={Peroni}
            title={"Cerveja Peroni 300ml"}
            description={"R$ 16,90"}
          />
          <CardProducts
            img={Stella}
            title={"Cerveja Stella Artois 269ml"}
            description={"R$ 5,90"}
          />
          <CardProducts
            img={Tiger}
            title={"Cerveja Tiger Crystal"}
            description={"R$ 12,90"}
          />
          <CardProducts
            img={YorkBrewery}
            title={"Cerveja York Brewery"}
            description={"R$ 15,90"}
          /> */}
        </div>
        <div className={styles.productsArrow}>
          <CaretDoubleLeft size={40} color="#f1dba6" />
          <CaretDoubleRight size={40} color="#f1dba6" />
        </div>
      </div>
    </div>
  );
}
