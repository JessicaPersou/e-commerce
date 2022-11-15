import styles from "./header.module.css";
import search from "../../assets/search.svg";
import cart from "../../assets/cart.svg";
import login from "../../assets/in.svg";
import beer from "../../assets/beerblack.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src={beer} alt="" />
        <h1>PORTAL DO MALTE</h1>
      </div>
      <div className={styles.menu}>
        <span className={styles.font}>HOME</span>
        <span className={styles.font}>HISTÓRIA</span>
        <span className={styles.font}>ESTILOS</span>
        <span className={styles.font}>BEER STORE</span>
      </div>
      <div className={styles.icons}>
        <img className={styles.img}  src={search} alt="" />
        <img className={styles.img}  src={cart} alt="" />
        <a href="/login"><img className={styles.img} src={login} alt="" /></a>
      </div>
    </div>
  );
}

//os componentes
