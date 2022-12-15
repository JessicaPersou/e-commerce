import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ProductBeer } from "./Index";
import AegisBrewing from "../../assets/products/aegis.png";
import styles from "./productBeer.module.css";

export function GetProduct({ product_name, value }) {

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
                image={AegisBrewing}
                product_name={item.product_name}
                value={item.value}
            />
            
            ))}
        </div>
    )
}