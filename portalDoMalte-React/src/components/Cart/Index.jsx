import styles from "./cart.module.css";
import Product from "../../assets/products/aegis.png";

export function Cart() {
  return (
    <div className={styles.shoppingCart}>
      <h1>CARRINHO DE COMPRAS</h1>
      <div className={styles.infoProduct}>
        <div className={styles.cartDetails}>
          <div className={styles.product}>
            <p>Descrição</p>
            <img className={styles.imgProduct} src={Product} />
          </div>
          <div className={styles.product}>
            <p>Quantidade</p>
            <p>2 Unidade</p>
          </div>
          <div className={styles.product}>
            <p>Valor</p>
            <p>R$ 9,90</p>
          </div>

          <div className={styles.product}>
            <p>Total</p>
            <p>R$19,80</p>
          </div>
        </div>
      </div>
      <h1>FINALIZAR COMPRA</h1>
      <div className={styles.infoProduct}>
        <div className={styles.cartDetails}>
          <div className={styles.product}>
            <p>CALCULAR FRETE</p>
            <input type="number" name="" id="" />{" "}
          </div>
          <div className={styles.product}>
            <p>Valor</p>
            <p>R$ 9,90</p>
          </div>

          <div className={styles.product}>
            <p>Total da Compra</p>
            <p>R$19,80</p>
          </div>
        </div>
      </div>
    </div>
  );
}
