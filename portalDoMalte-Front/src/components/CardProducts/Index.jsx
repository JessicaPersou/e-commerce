import styles from "./cardProducts.module.css";

export function CardProducts({ img, title, description }) {
  return (
    <div className={styles.card}>
      <img className={styles.imgCard} src={img} alt="" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <footer className={styles.footer}>
        <a href="/product-detail">
          <button className={styles.btn} type="submit">
            COMPRAR
          </button>
        </a>
      </footer>
    </div>
  );
}
