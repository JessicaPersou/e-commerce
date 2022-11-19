import styles from "./card.module.css";

export function Card({ img, title, description }) {
  return (
    <div className={styles.card}>
      <img className={styles.imgCard} src={img} alt="" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
