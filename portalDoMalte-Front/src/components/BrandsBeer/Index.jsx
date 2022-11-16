import styles from "./brandsBeers.module.css";

export function Card({ img }) {
  return (
    <div className={styles.card}>
      <img className={styles.imgCard} src={img} alt="" />
    </div>
  );
}
