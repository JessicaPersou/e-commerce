import { ShoppingCartSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import styles from "./productBeer.module.css";


export function ProductBeer({ image, product_name, value }) {

    return (
        <div className={styles.card}>
            <img className={styles.image} src={image} alt="" />
            <div className={styles.products}>
                <h5 className={styles.title}>{product_name}</h5>
                <p className={styles.value}>{value}</p>
            </div>
            <div className={styles.btnSale}>
                <Link to={"/product-detail"}>
                    <button className={styles.btn}>
                        <strong className={styles.txt}>COMPRAR AGORA</strong>
                    </button>
                </Link>
                <Link to={"/shopping-cart"}>
                    <button className={styles.btn}>
                        <strong className={styles.txt}>ADICIONAR AO CARRINHO</strong>
                    </button>
                </Link>
            </div>
        </div>
    )
}