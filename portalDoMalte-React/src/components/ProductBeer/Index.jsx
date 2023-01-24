import axios from "axios";
import { ShoppingCartSimple } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./productBeer.module.css";
import AegisBrewing from "../../assets/products/aegis.png";



export function ProductBeer({ image, product_name, value }) {
    const [product, setProduct] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        buildPage();
    }, []);

    async function buildPage() {
        try {
            const buildProduct = await axios.get("http://localhost:9001/products");
            setProduct(buildProduct.data);
        } catch (e) {
            console.error(e);
        }

    }

    // async function getOneProduct(item) {
    //     await axios.get(`http://localhost:9001/products/${item.id}`)
    //     setProduct
    // }


    return (
        <div>
            {product.map((item) => (
            <div className={styles.card}>
                <img className={styles.image} src={item.image} alt="" />
                <div className={styles.products}>
                    <h5 className={styles.title}>{item.product_name}</h5>
                    <p className={styles.value}>{item.value}</p>
                </div>
                <div className={styles.btnSale}>
                    <button className={styles.btn}>
                        <strong className={styles.txt}>COMPRAR AGORA</strong>
                    </button>
                    <button className={styles.btn}>
                        <strong className={styles.txt}>ADICIONAR AO CARRINHO</strong>
                    </button>
                </div>
            </div>
            ))}
        </div>
    )
}