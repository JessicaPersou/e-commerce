import styles from "./main.module.css";
import Banner from "../../assets/products/brands.png";


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
    </div>
  );
}
