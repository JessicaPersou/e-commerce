import styles from "./componentCraftStyle.module.css";

export interface Props{
    image : string,
    title : string,
    description : string
}

export function ComponentCraftStyle({ image, title, description } : Props) {
    return (
        <div className={styles.container}>
            <img className={styles.imgCard} src={image} alt="Imagem do Produto" />
            <h3 className={styles.title}><strong>{title}</strong></h3>
            <p className={styles.description}>{description}</p>
        </div>

    )
}


