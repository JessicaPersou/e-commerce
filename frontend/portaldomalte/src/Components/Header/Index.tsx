import styles from "./header.module.css";
import { MagnifyingGlass, ShoppingCart, SignIn } from "phosphor-react";
import { Link } from "react-router-dom";
import { LogoHeader } from "../Logo/Index";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <LogoHeader />
      </div>
      <div className={styles.menu}>
        <div>
          <Link to="/" className={styles.font}><strong>PORTAL DO MALTE</strong></Link>
        </div>
        <div className={styles.nav}>
          <Link to="/" className={styles.font}>
            <strong>HOME</strong>
          </Link>
          <Link to="/history" className={styles.font}>
            <strong>HISTÓRIA</strong>
          </Link>
          <Link to="/styles" className={styles.font}>
            <strong>ESTILOS</strong>
          </Link>
          <Link to="/products" className={styles.font}>
            <strong>STORE</strong>
          </Link>
          <Link to="/contact" className={styles.font}>
            <strong>CONTATO</strong>
          </Link>
        </div>
        <div className={styles.inputSearch}>
          <input type="text" placeholder="Pesquise"/>{" "}
          <MagnifyingGlass size={24} />
        </div>
        <div className={styles.icons}>
          <Link className={styles.font} to="/shopping-cart">
            <ShoppingCart size={24} />
          </Link>
          <Link className={styles.font} to="/login">
            <SignIn size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
}
