import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BeerStore } from "../components/BeerStore/Index";


function Products() {
  return (
    <div>
      <Header />
      <BeerStore />
      <Footer />
    </div>
  );
}

export default Products;

