import styles from "./message.module.css";

export function Message({ title }) {
  return (
    <div className={styles.msg}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
