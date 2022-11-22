import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main/Index";
import { Slider } from "../components/Slider/Index";

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
