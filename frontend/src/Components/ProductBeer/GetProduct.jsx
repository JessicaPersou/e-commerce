import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ProductBeer } from "./Index";
import AegisBrewing from "../../assets/products/aegis.png";
import styles from "./productBeer.module.css";

export function GetProduct({ name, image, description, price }) {

    const [product, setProduct] = useState([]);

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

    } return (
        <div className={styles.product}>
            {product.map((item) => (
            <ProductBeer
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
            />
            ))}
        </div>
    )
}