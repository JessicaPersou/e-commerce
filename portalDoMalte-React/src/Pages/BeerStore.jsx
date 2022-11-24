import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BeerStore } from "../components/BeerStore/Index";
import { Carousel } from "../components/Carousel/Index";


function Products() {
  return (
    <div>
      <Header />
      <Carousel/>
      <BeerStore />
      <Footer />
    </div>
  );
}

export default Products;

