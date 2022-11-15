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
        <a href="/" className={styles.font}><span >HOME</span></a>
        <a href="/history" className={styles.font}><span>HISTÓRIA</span></a>
        <a href="/" className={styles.font}><span>ESTILOS</span></a>
        <a href="/" className={styles.font}><span>BEER STORE</span></a>
      </div>
      <div className={styles.icons}>
        <a href=""><img className={styles.img}  src={search} alt="" /></a>
        <a href=""><img className={styles.img}  src={cart} alt="" /></a>
        <a href="/login"><img className={styles.img} src={login} alt="" /></a>
      </div>
    </div>
  );
}

//os componentes
