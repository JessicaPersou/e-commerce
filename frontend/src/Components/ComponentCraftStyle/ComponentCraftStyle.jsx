import styles from "./componentCraftStyle.module.css";

export function ComponentCraftStyle({ image, title, description }) {
    return (
        <div className={styles.container}>
            <img className={styles.imgCard} src={image} alt="Imagem do Produto" />
            <h3 className={styles.title}><strong>{title}</strong></h3>
            <p className={styles.description}>{description}</p>
        </div>

    )
}


