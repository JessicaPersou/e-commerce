import styles from "./cart.module.css";
import Product from "../../assets/products/aegis.png";
import { XCircle } from "phosphor-react";

export function Cart() {
  return (
    <div className={styles.shoppingCart}>
      <p>CARRINHO DE COMPRAS</p>
      <hr />
      <div className={styles.infoProduct}>
        <div className={styles.product}>
          <img className={styles.imgProduct} src={Product} />
        </div>
        <div className={styles.product}>
          <strong>Cerveja Aegis Beer</strong>
        </div>
        <div className={styles.product}>
          <p>2</p>
        </div>
        <div className={styles.product}>
          <p>R$ 9,90</p>
        </div>
        <div className={styles.product}>
          <p>
            <XCircle />
          </p>
        </div>
      </div>
      <hr />
      <p>ENTREGA</p>
      <hr />
      <div className={styles.shipping}>
        <div className={styles.shippingDetails}>
          <p>CALCULAR FRETE</p>
          <div className={styles.infoProduct}>
            <div className={styles.product}>
              <input type="number" />
            </div>
            <div className={styles.product}>
              <button type="submit">CALCULAR</button>
            </div>
          </div>
          <p>CUPOM DE DESCONTO</p>
          <div className={styles.infoProduct}>
            <div className={styles.product}>
              <input type="number" />
            </div>
            <div className={styles.product}>
              <button type="submit">VERIFICAR</button>
            </div>
          </div>
        </div>
        <div className={styles.shippingDetails}>
          <p>SUBTOTAL</p>
          <div className={styles.infoProduct}>
            <div className={styles.product}>
              <p>R$21,80</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.btnPayments}>
        <a href="/finished">
          <button type="submit">FINALIZAR COMPRA</button>
        </a>
      </div>
    </div>
  );
}
