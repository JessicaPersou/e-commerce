import styles from "./login.module.css";
import Back from "../../assets/elements/undo.svg";
import Logo from "../../assets/elements/beeramarelo.svg";

export function LoginUser() {
  return (
    <div className={styles.colorbg}>
      <div className={styles.left}>
        <a href="/">
          <img className={styles.back} src={Back} alt="" />
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
            <button className={styles.btnSend} type="submit">
              LOGIN
            </button>
            <span className={styles.txt}>
              Você ainda não tem Login?
              <a className={styles.txt} href="/login/register">
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
