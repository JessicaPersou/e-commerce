import styles from "./card.module.css";

export function Card({ img, title, description }) {
  const [listProducts, setListProducts] = useState([]);
  const navigate = useNavigate();
  
  async function getProducts(){
    const {data} = await axios.get("http://localhost:9001/products");
    setListProducts(data);
  }

  useEffect(() => {
    getProducts();
  },[]);

  
  

  return (
    <div className={styles.card}>
      {listProducts.map((item) => (
        <SearchProducts              
        key={item.id}
        img={item.id}
        title={item.title}
        description={item.amount}
      />
      ))}
    </div>
  );
}
