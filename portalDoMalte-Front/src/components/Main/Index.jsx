import styles from "./main.module.css";
import Banner from "../../assets/craft-beer.jpg";
// import About from "../../assets/beer.png";
// import Tasting from "../../assets/tasting.png";
import beer from "../../assets/cup-beer.jpeg";
import { Card } from "../Card";

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
        <h1>PRINCIPAIS ESTILOS DE CERVEJA ARTESANAL</h1>
      </div>
      <div className={styles.addCards}>
        <Card
          img={beer}
          title={"PILSEN"}
          description={
            "O estilo de cerveja artesanal Pilsen ou Pilsner surgiu na República Tcheca. Como características marcantes, a bebida apresenta aroma e sabor acentuados pelo lúpulo, além da cor dourada. Seu teor alcoólico varia entre 4,6% e 5% em média. As mais famosas são a cerveja de origem Pilsner Urquell <i> primeira Pilsen produzida</i> e a German Pilsner."
          }
        />
      </div>
    </div>
  );
}
