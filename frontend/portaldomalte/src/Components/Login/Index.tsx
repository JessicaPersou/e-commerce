import styles from "./login.module.css";
import Logo from "../../assets/logo/amarelo.png";
import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";

export function LoginUser() { 
  return (
    <div className={styles.container}>
      <div className={styles.colorbackground}>
        <div className={styles.form1}>
          <div>
            <img className={styles.imgLogo} src={Logo} />
          </div>
          <h2>Não deixe para amanhã a cerveja que você pode comprar hoje!</h2>
          <h3>
            Faça seu Login e aproveite ofertas exclusivos e cupons de descontos.
            Para Aproveitar nossos beneficíos
            <br />
          </h3>
          <Link className={styles.link} to="/register">
            <ArrowLeft size={24} />
            Cadastre-se Aqui .
          </Link>
        </div>

        <div className={styles.form2}>
          <div className={styles.custom}>
            <label className={styles.customLabel}>E-mail</label>
            <input className={styles.customInput} id="email" name="email" />
          </div>
          <div className={styles.custom}>
            <label className={styles.customLabel}>Senha</label>
            <input
              className={styles.customInput}
              id="password"
              name="password"
              type="password"
            />
          </div>
          <div className={styles.btn}>
            <button className={styles.btnPortal} type="submit">
              <strong>Entrar</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
