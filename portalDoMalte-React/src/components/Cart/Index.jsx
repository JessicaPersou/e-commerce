import styles from "./cart.module.css";
import Product from "../../assets/products/aegis.png";
import { XCircle } from "phosphor-react";
import { Link } from "react-router-dom";
import { Titles } from "../Titles/Index";

export function Cart() {
  return (
    <div className={styles.shoppingCart}>
    <div className={styles.title}>
        <Titles title={"Detalhes da Compra"} />
      </div>
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
            <XCircle size={40} color="#f20707" />
          </p>
        </div>
      </div>
      {/* AQUI MENSAGEM DE ENTREGA */}
      <div className={styles.shipping}>
        <div className={styles.shippingDetails}>
          <p>CALCULAR FRETE</p>
          <div className={styles.infoProduct}>
            <div className={styles.product}>
              <input className={styles.inputInfo} type="number" />
            </div>
            <div className={styles.product}>
              <button className={styles.btnPortal} type="submit">
                CALCULAR
              </button>
            </div>
          </div>
          <p>CUPOM DE DESCONTO</p>
          <div className={styles.infoProduct}>
            <div className={styles.product}>
              <input className={styles.inputInfo} type="number" />
            </div>
            <div className={styles.product}>
              <button className={styles.btnPortal} type="submit">
                VERIFICAR
              </button>
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
      <div>
        <Link to="/finished" className={styles.btnPayments}>
          <button className={styles.btnPortal} type="submit">
            FINALIZAR COMPRA
          </button>
        </Link>
      </div>
    </div>
  );
}
