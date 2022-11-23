import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductStore } from "../components/ProductStore/Index";
import { Carousel } from "../components/Carousel/Index";


function Products() {
  return (
    <div>
      <Header />
      <Carousel/>
      <ProductStore />
      <Footer />
    </div>
  );
}

export default Products;

