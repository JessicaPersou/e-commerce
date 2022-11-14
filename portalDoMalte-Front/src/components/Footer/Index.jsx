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
    <div className={styles.footer}>
      <div className={styles.infosFooter}>
        <div className={styles.info}>
          <h4>Sobre nós</h4>
          <p>Primeira Compra</p>
          <p>Troca e Devolução</p>
          <p>Termos e condições de venda</p>
          <p>Trabalhe conosco</p>
          <p>Fale Conosco</p>
          <p>Política de privacidade</p>
        </div>
        <div className={styles.info}>
          <h4>Nossas Redes</h4>
          <img src={face} alt="facebook" />
          <img src={insta} alt="instagram" />
          <img src={whats} alt="whatsapp" />
        </div>
        <div className={styles.info}>
          <h4>Formas de Pagamento</h4>
          <img src={Visa} alt="" />
          <img src={Master} alt="" />
          <img src={Pix} alt="" />
          <img src={Boleto} alt="" />
        </div>
        <div className={styles.info}>
          <h4>Baixe o App</h4>
          <img src={Android} alt="" />
          <img src={Apple} alt="" />
        </div>
      </div>
      <hr />
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
