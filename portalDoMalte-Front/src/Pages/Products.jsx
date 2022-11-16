import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductStore } from "../components/ProductStore/Index";


function Products() {
  return (
    <div>
      <Header />
      <ProductStore />
      <Footer />
    </div>
  );
}

export default Products;

