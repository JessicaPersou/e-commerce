import styles from "./main.module.css";
import Banner from "../../assets/products/brands.png";
import DuffPack from "../../assets/home/duffPack.png";
import Heineken from "../../assets/home/heinekens.png";
// import Modelo from "../../assets/home/modelo.png";
import Corona from "../../assets/home/coronaPack.png";
import { CardProducts } from "../CardProducts";

export function Main() {
  return (
    <div className={styles.main}>
      <div>
        <img
          className={styles.banner}
          width="100%"
          max-height="50vh"
          src={Banner}
          alt=""
        />
      </div>
      <div className={styles.msg}>
        <h1>OFERTAS IMPERDÍVEIS!</h1>
      </div>
      
      {/* <CardProducts
          img={AegisBrewing}
          title={"CERVEJA HEINEKEN"}
          description={"R$ 9,90"}
        />
        <CardProducts
          img={AegisBrewing}
          title={"CERVEJA HEINEKEN"}
          description={"R$ 9,90"}
        />
        <CardProducts
          img={AegisBrewing}
          title={"CERVEJA HEINEKEN"}
          description={"R$ 9,90"}
        />
         COMBOS */}
      <div className={styles.component}>
        <CardProducts style={{description : "color: red"}}
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
          img={Corona}
          title={"Double Pack com 6 Unidades Cada Corona Extra 350ml"}
          description={"R$ 39,90"}
        />
      </div>

      {/* COMBOS */}
    </div>
  );
}
