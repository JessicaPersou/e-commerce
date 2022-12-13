// import styles from "./cardProducts.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardProductsTest } from "./Index1";

export function CardProducts({ product_name, value }) {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    buildPage();
  }, []);

  async function buildPage() {
    try {
      const buildProducts = await axios.get("http://localhost:9001/products");
      setProducts(buildProducts.data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>

      {product.map((item) => (
        <CardProductsTest
          key={item.id}
          title={item.product_name}
          description={item.value}
        />
      ))}
    </div>
  );
}
