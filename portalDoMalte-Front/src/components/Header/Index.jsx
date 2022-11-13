import styles from "./header.module.css";
import portalDoMalte from "../../assets/logo-preto.png";
import search from "../../assets/procurar.svg";
import cart from "../../assets/carrinho-de-compras.svg";
import login from "../../assets/do-utilizador.svg";

export function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <img src={portalDoMalte} alt="" />
      </div>
      <dir className={styles.menu}>
        <span className={styles.font}>Home</span>
        <span className={styles.font}>Sobre</span>
        <span className={styles.font}>Histórias</span>
        <span className={styles.font}>Cervejas</span>
      </dir>
      <div className={styles.icons}>
        <img src={search} alt="" />
        <img src={cart} alt="" />
        <img src={login} alt="" />
      </div>
    </nav>
  );
}

//os componentes
