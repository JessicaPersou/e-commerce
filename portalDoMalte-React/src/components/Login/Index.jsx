import styles from "./login.module.css";

import Logo from "../../assets/elements/beerbranco.svg";
import { SignIn, ArrowUUpLeft } from "phosphor-react";

export function LoginUser() {
  return (
    <div className={styles.colorbg}>
      <div className={styles.left}>
        <a className={styles.txt} href="/">
         <ArrowUUpLeft size={32} />
        </a>
      </div>
      <div className={styles.row}>
        <div className={styles.box}>
          <img src={Logo} alt="" />
          <h1>PORTAL DO MALTE</h1>
          <strong>VARIEDADE DE ESTILOS, INFINIDADE DE SABORES</strong>
        </div>
        <div className={styles.form}>
          <h2 className={styles.titleLogin}>LOGIN</h2>
          <div className={styles.login}>
            <label className={styles.txt} htmlFor="">
              E-MAIL
            </label>
            <input className={styles.inputMail} type="text" />
          </div>
          <div className={styles.login}>
            <label className={styles.txt} htmlFor="">
              SENHA
            </label>
            <input className={styles.inputPassword} type="password" />
          </div>
          <div className={styles.btn}>
            <span className={styles.txt}>
              <a className={styles.txt} href="#">
                Esqueci minha senha
              </a>
            </span>
            <button className={styles.btnPortal} type="submit">
              <strong><SignIn />{" "} LOGIN</strong>
            </button>
            <span className={styles.txt}>
              Você ainda não tem Login?
              <a className={styles.txt} href="/register">
                {" "}
                Registre-se Aqui.
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
