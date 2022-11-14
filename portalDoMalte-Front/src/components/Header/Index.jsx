import styles from "./header.module.css";
import portalDoMalte from "../../assets/logo/portal3.png";
import search from "../../assets/procurar.svg";
import cart from "../../assets/carrinho-de-compras.svg";
import login from "../../assets/do-utilizador.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={portalDoMalte} alt="" />
      </div>
      <div className={styles.menu}>
        <span className={styles.font}>Home</span>
        <span className={styles.font}>Sobre</span>
        <span className={styles.font}>Histórias</span>
        <span className={styles.font}>Estilos</span>
        <span className={styles.font}>Beer Store</span>
      </div>
      <div className={styles.icons}>
        <img src={search} alt="" />
        <img src={cart} alt="" />
        <img src={login} alt="" />
      </div>
    </div>
  );
}

//os componentes
