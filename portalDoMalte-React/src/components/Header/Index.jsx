import styles from "./header.module.css";
import { BeerBottle, ShoppingCart, SignIn } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a className={styles.font} href="">
          <BeerBottle size={32} />
        </a>
        <p>
          <strong>PORTAL DO MALTE</strong>
        </p>
      </div>
      {/* <div className={styles.search}>
        <input
          className={styles.inputSearch}
          type="button"
          value=""
          placeholder="Busque pela marca, estilo ou sabor"
        />
        <button type="submit">Pesquisar</button>
      </div> */}
      <div className={styles.menu}>
        <div className={styles.menu}>
          <Link to="/" className={styles.font}>
            <p>
              <strong>HOME</strong>
            </p>
          </Link>
          <Link to="/history" className={styles.font}>
            <p>
              <strong>HISTÓRIA</strong>
            </p>
          </Link>
          <Link to="/styles" className={styles.font}>
            <p>
              <strong>ESTILOS</strong>
            </p>
          </Link>
          <Link to="/products" className={styles.font}>
            <p>
              <strong>BEER STORE</strong>
            </p>
          </Link>
          <Link to="/contact" className={styles.font}>
            <p>
              <strong>CONTATO</strong>
            </p>
          </Link>
        </div>
        <div className={styles.icons}>
          <a className={styles.font} href="/shopping-cart">
            <ShoppingCart size={32} />
          </a>
          <a className={styles.font} href="/login">
            <SignIn size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}
