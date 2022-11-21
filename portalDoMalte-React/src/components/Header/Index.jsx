import styles from "./header.module.css";
import {
  BeerBottle,
  MagnifyingGlass,
  ShoppingCart,
  SignIn,
} from "phosphor-react";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a className={styles.font} href="">
          <BeerBottle size={32} />
        </a>
        <p>PORTAL DO MALTE</p>
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
          <a href="/" className={styles.font}>
            <p>HOME</p>
          </a>
          <a href="/history" className={styles.font}>
            <p>HISTÓRIA</p>
          </a>
          <a href="/styles" className={styles.font}>
            <p>ESTILOS</p>
          </a>
          <a href="/products" className={styles.font}>
            <p>BEER STORE</p>
          </a>
          <a href="/products" className={styles.font}>
            <p>CONTATO</p>
          </a>
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
