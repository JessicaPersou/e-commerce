import styles from "./title.module.css";
import * as React from 'react';

export interface Props{
  title : string;
}

export function Titles({title}: Props ) {
  return (
    <div className={styles.msg}>
      <h1 className={styles.titleMain}>{title}</h1>
    </div>
  );
}
