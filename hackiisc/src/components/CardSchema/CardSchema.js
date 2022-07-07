import * as React from 'react';
import styles from "./CardSchema.module.css";

export default function CardSchema(props) {
  return (
    <article
      className={styles.article}
      style={{ backgroundImage: `url(${props.src})` }}
    >
      <h1 className={styles.heading}>React Is Awesome</h1>
    </article>
  );
}
