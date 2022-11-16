import styles from "./productDetail.module.css";
import StarFull from "../../assets/elements/starFull.svg";
import Star from "../../assets/elements/star.svg";
import Truck from "../../assets/elements/truck-moving.svg";
import Beer from "../../assets/products/he.png";

// { img, title, price, installment }
export function ProductDetail() {
  return (
    <div className={styles.productsDetails}>
      <div className={styles.main}>
        <div>
          <img className={styles.imgProduct} src={Beer} alt="" />
        </div>
        <div className={styles.info}>
          <div>
            <h2 className={styles.title}>TITULO DO PRODUTO</h2>
          </div>
          <span className={styles.stars}>
            <img className={styles.stars} src={StarFull} alt="" />
            <img className={styles.stars} src={StarFull} alt="" />
            <img className={styles.stars} src={StarFull} alt="" />
            <img className={styles.stars} src={StarFull} alt="" />
            <img className={styles.stars} src={Star} alt="" />
          </span>
          <p className={styles.txt}>DESCRIÇÃO DO PRODUTO</p>
          <p className={styles.txt}>6 UNIDADES</p>
          <p className={styles.txt}>R$89,90</p>
          <button className={styles.btn} type="submit">
            ADICIONAR
          </button>
          <hr className={styles.line} />
          <div className={styles.zipCode}>
            <label className={styles.details}>CALCULE O VALOR DE FRETE</label>
            <img className={styles.truck} src={Truck} alt="" />
            <input
              className={styles.input}
              type="number"
              placeholder="CEP de Entrega"
            />
          </div>
        </div>
      </div>
      <div className={styles.infoAge}>
        <h3 className={styles.title}>ATENÇÃO</h3>
        <p className={styles.txt}>
          Este produto é vendido apenas para maiores de 18 anos.
        </p>
      </div>
    </div>
  );
}
