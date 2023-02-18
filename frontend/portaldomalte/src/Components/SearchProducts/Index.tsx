import styles from "./cardProducts.module.css";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export interface Props {
  img : string,
  title : string,
  description : string
}

export function CardProducts({ img, title, description } : Props) {

  return (
    <div className={styles.card}>
    <img className={styles.imgCard} src={img} alt="" />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    <footer className={styles.footer}>
      <Link to="/product-detail">
        <button className={styles.btnPortal} type="submit">
          <strong>
            <ShoppingCart /> COMPRAR
          </strong>
        </button>
      </Link>
    </footer>
  </div>
  );
}
