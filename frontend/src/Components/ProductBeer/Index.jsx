import axios from "axios";
import { HeartStraight, ShareNetwork, ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./productBeer.module.css";
import AegisBrewing from "../../assets/products/aegis.png";

export function ProductBeer() {
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
    <div className={styles.products}>
      {product.map((item) => (
        <div className={styles.card}>
          <div className={styles.favorite}>
            <HeartStraight size={28} color="#d41616" />
            <ShareNetwork size={28} color="#312f2f" />
          </div>
          <img className={styles.image} src={item.image} alt="" />
          <div className={styles.productDetails}>
            <div className={styles.productName}>
              <p className={styles.title}>
                <strong>{item.name}</strong>&nbsp;
              </p>
            </div>
            <p className={styles.description}>{item.description}</p>
          </div>
          <div className={styles.btnSale}>
            <p className={styles.titlePrice}>
              <strong>R$ {item.price}</strong>
            </p>
            <button className={styles.btn}>
              <strong className={styles.txt}>
                <ShoppingCart size={20} color="#f3ecec" />
                &nbsp;COMPRAR
              </strong>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
