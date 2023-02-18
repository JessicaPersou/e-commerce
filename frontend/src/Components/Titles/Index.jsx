import styles from "./title.module.css";

export function Titles({ title }) {
  return (
    <div className={styles.msg}>
      <h1 className={styles.titleMain}>{title}</h1>
    </div>
  );
}
