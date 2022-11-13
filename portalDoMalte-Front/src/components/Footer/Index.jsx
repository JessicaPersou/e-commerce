import "../Footer/footer.css";
import insta from "../../assets/instagram.svg";
import face from "../../assets/facebook.svg";
import whats from "../../assets/whatsapp.svg";

export function Footer() {
  return (
    <footer className="footer">
      <div className="address">
        <p>Av Paulista , 2421</p>
        <p>CEP: 00000-000</p>
        <p>Bela Vista - São Paulo - SP</p>
        <p>Telefone: &#40;11&#41; 966666&#45;6666 </p>
        <p>E-mail: contato@email.com.br</p>
      </div>
      <div className="me">
        <p>Made by &#x1F9E1; Jessi</p>
      </div>
      <div className="social-media">
        <p>
          <a href="">
            <img src={face} alt="facebook" />
          </a>
        </p>
        <p>
          <a href="">
            <img src={insta} alt="instagram" />
          </a>
        </p>
        <p>
          <a href="">
            <img src={whats} alt="whatsapp" />
          </a>
        </p>
      </div>
    </footer>
  );
}
