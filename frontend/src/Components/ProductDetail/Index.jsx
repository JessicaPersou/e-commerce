import styles from "./productDetail.module.css";
import Beer from "../../assets/products/he.png";
import { Star, Truck } from "phosphor-react";
import { Titles } from "../Titles/Index";
import { BrandsBeer } from "../BrandsBeer/Index";

// { img, title, price, installment }
export function ProductDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.productsDetails}>
        <BrandsBeer/>
        <Titles title={"Detalhes do Produto"} />
        <div className={styles.main}>
          <div>
            <img className={styles.imgProduct} src={Beer} alt="" />
          </div>
          <div className={styles.info}>
            <div>
              <h2 className={styles.title}>TITULO DO PRODUTO</h2>
            </div>
            <span className={styles.stars}>
              <Star size={15} color="#dda520" />
              <Star size={15} color="#dda520" />
              <Star size={15} color="#dda520" />
              <Star size={15} color="#dda520" />
              <Star size={15} color="#dda520" />
            </span>
            <p className={styles.txt}>DESCRIÇÃO DO PRODUTO</p>
            <p className={styles.txt}>6 UNIDADES</p>
            <p className={styles.txt}>R$89,90</p>
            <a href="#">
              <button className={styles.btnPortal} type="submit">
                ADICIONAR
              </button>
            </a>
            <a href="/shopping-cart">
              <button className={styles.btnPortal} type="submit">
                IR PARA CARRINHO
              </button>
            </a>
            <hr className={styles.line} />
            <div className={styles.zipCode}>
              <label className={styles.details}>CALCULE O VALOR DE FRETE</label>
              <Truck size={30} color="#dda520" />{" "}
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
    </div>
  );
}
