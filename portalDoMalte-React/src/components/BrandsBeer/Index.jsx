import styles from "./brandsBeer.module.css";

export function BrandsBeers({ img }) {
  return (
    <div className={styles.card}>
      <img className={styles.imgCard} src={img} alt="" />
    </div>
  );
}
