import styles from "./home.module.css";
import DuffPack from "../../assets/home/duffPack.png";
import Heineken from "../../assets/home/heinekens.png";
import CoronaExtra from "../../assets/home/coronaPack.png";
import BeerStore from "../../assets/home/brandsStore.png";
import Barrel from "../../assets/home/basket.png";
import ChangClassicBeer from "../../assets/products/changClassicBeer.png";
import MeiselAndFriends from "../../assets/products/meiselFriends.png";
import KitBeer from "../../assets/products/kit.png";
import { BrandsBeer } from "../BrandsBeer/Index";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { Carousel } from "../Carousel/Index";
import { Link } from "react-router-dom";
import { Titles } from "../Titles/Index";


export function Home() {

  return (
      <div className={styles.home}>
        <div className={styles.carousel}>
          <Carousel/>
        </div>
        <Titles title={"As Melhores Marcas"} />
        <div className={styles.brandsComponent}>
          <BrandsBeer />
        </div>
        <Titles title={"CONFIRA ALGUMAS OFERTAS"} />
        {/* <div className={styles.component}>
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
        </div> */}
        <Titles title={"Participe da nossa promoção"} />
        <div className={styles.txtNews}>
          <div className={styles.news}>
            <img className={styles.imgNews} src={BeerStore} alt="" />
            <img className={styles.imgNews} src={Barrel} alt="" />
          </div>
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
