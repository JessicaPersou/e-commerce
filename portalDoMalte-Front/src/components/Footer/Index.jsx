import styles from "./footer.module.css";
import insta from "../../assets/instagram.svg";
import face from "../../assets/facebook.svg";
import whats from "../../assets/whatsapp.svg";
import Visa from "../../assets/payments/icon-fast-visa.svg";
import Master from "../../assets/payments/icon-fast-mastercard.svg";
import Pix from "../../assets/payments/pix.svg";
import Boleto from "../../assets/payments/icon-fast-boleto.svg";
import Android from "../../assets/payments/android.png";
import Apple from "../../assets/payments/apple.png";
import Selos from "../../assets/payments/img_1928.png";

export function Footer() {
  return (
    <div className={styles.infosFooter}>
      <div className={styles.footer}>
        <div className={styles.about}>
          <a href="">
            <p>Sobre nós</p>
          </a>
          <a href="">
            <p>Primeira Compra</p>
          </a>
          <a href="">
            <p>Troca e Devolução</p>
          </a>
          <a href="">
            <p>Termos e condições de venda</p>
          </a>
          <a href="">
            <p>Trabalhe conosco</p>
          </a>
          <a href="">
            <p>Fale Conosco</p>
          </a>
          <a href="">
            <p>Política de privacidade</p>
          </a>
        </div>
        <div className={styles.socialMedia}>
          <p>Nossas Redes</p>
          <a href="">
            <img src={face} alt="facebook" />
          </a>
          <a href="">
            <img src={insta} alt="instagram" />
          </a>
          <a href="">
            <img src={whats} alt="whatsapp" />
          </a>
        </div>
        <div>
          <p className={styles.payments}>Formas de Pagamento</p>
          <img src={Visa} alt="" />
          <img src={Master} alt="" />
          <img src={Pix} alt="" />
          <img src={Boleto} alt="" />
        </div>
        <div>
          <span className={styles.app}>Baixe o App</span>
          <a href="">
            <img src={Android} alt="" />
          </a>
          <a href="">
            <img heigth="50px" src={Apple} alt="" />
          </a>
        </div>
        <div>
          <span className={styles.security}>Selos de Segurança</span>
          <img src={Selos} alt="" />
        </div>
      </div>
      {/* <p>Made by &#x1F9E1; Jessi</p> */}
      <div className={styles.infoShop}>
        <p>Portal do Malte S. A. CNPJ: 12.594.529/0001-60</p>
        <p>
          Rua dos Bobos, 0 - Sala 1 - Esmero - CEP 0000-999 - São Paulo - SP
          Telefone: 11 3333-9999
        </p>
        <p>© 2022 Portal do Malte - Todos os direitos reservados</p>
      </div>
    </div>
  );
}
