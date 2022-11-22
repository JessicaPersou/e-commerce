import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductStore } from "../components/ProductStore/Index";
import { Slider } from "../components/Slider/Index";


function Products() {
  return (
    <div>
      <Header />
      <Slider/>
      <ProductStore />
      <Footer />
    </div>
  );
}

export default Products;

