import styles from "./footer.module.css";
import Visa from "../../assets/payments/icon-fast-visa.svg";
import Master from "../../assets/payments/icon-fast-mastercard.svg";
import Pix from "../../assets/payments/pix.svg";
import Boleto from "../../assets/payments/icon-fast-boleto.svg";
import Android from "../../assets/payments/android.png";
import Apple from "../../assets/payments/apple.png";
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.infosFooter}>
        <div className={styles.info}>
          <h4>SOBRE NÓS</h4>
          <p className={styles.font}>Primeira Compra</p>
          <p className={styles.font}>Troca e Devolução</p>
          <p className={styles.font}>Termos e condições de venda</p>
          <p className={styles.font}>Trabalhe conosco</p>
          <p className={styles.font}>Fale Conosco</p>
          <p className={styles.font}>Política de privacidade</p>
        </div>
        <div className={styles.line1}></div>
        <div className={styles.info}>
          <h4>NOSSAS REDES</h4>
          <a href="https://www.facebook.com/">
            <FacebookLogo size={40} color="#000"/>
          </a>
          <a href="https://www.instagram.com/">
            <InstagramLogo size={40} color="#000"/>
          </a>
          <a href="https://www.whatsapp.com/?lang=pt_br">
            <WhatsappLogo size={40} color="#000"/>
          </a>
        </div>
        <div className={styles.line2}></div>
        <div className={styles.info}>
          <h4>FORMAS DE PAGAMENTO</h4>
          <img className={styles.icon30} src={Visa} alt="" />
          <img className={styles.icon30} src={Master} alt="" />
          <img className={styles.icon30} src={Pix} alt="" />
          <img className={styles.icon30} src={Boleto} alt="" />
          <div className={styles.line3}></div>
        </div>

        <div className={styles.info}>
          <h4>BAIXE O APP</h4>
          <a href="https://play.google.com/store/games">
            <img className={styles.icon50} src={Android} alt="" />
          </a>
          <a href="https://www.apple.com/br/app-store/">
            <img className={styles.icon50} src={Apple} alt="" />
          </a>
        </div>
      </div>
      <hr className={styles.line4} />

      <div className={styles.infoShop}>
        <p>Portal do Malte S. A. CNPJ: 12.594.529/0001-60</p>
        <p>
          Rua dos Bobos, 0 - Sala 1 - Esmero - CEP 0000-999 - São Paulo - SP
          Telefone: 11 3333-9999
        </p>
        <p>© 2022 Portal do Malte - Todos os direitos reservados</p>
        <p>Made by &#x1F9E1; Jessi</p>
      </div>
    </div>
  );
}
