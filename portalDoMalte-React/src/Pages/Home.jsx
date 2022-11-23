import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main/Index";
import { Carousel } from "../components/Carousel/Index";

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
