import styles from "./header.module.css";
import search from "../../assets/elements/search.svg";
import cart from "../../assets/elements/cart.svg";
import login from "../../assets/elements/in.svg";
import beer from "../../assets/elements/beerblack.svg";

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
        <a href="/styles" className={styles.font}><span>ESTILOS</span></a>
        <a href="/products" className={styles.font}><span>BEER STORE</span></a>
        <a href="/products" className={styles.font}><span>CONTATO</span></a>
      </div>
      <div className={styles.icons}>
        <a href=""><img className={styles.img}  src={search} alt="" /></a>
        <a href=""><img className={styles.img}  src={cart} alt="" /></a>
        <a href="/login"><img className={styles.img} src={login} alt="" /></a>
      </div>
    </div>
  );
}


