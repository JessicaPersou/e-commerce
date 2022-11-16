import styles from "./register.module.css";
import Back from "../../assets/elements/undo.svg";
import Logo from "../../assets/elements/beeramarelo.svg";

export function RegisterUser() {
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
          <h2 className={styles.title}>CADASTRO</h2>
          <div className={styles.login}>
            <label className={styles.txt} htmlFor="">
              NOME
            </label>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.login}>
            <label className={styles.txt} htmlFor="">
              CPF
            </label>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.login}>
            <label className={styles.txt} htmlFor="">
              DATA DE NASCIMENTO
            </label>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.login}>
            <label className={styles.txt} htmlFor="">
              TELEFONE
            </label>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.login}>
            <label className={styles.txt} htmlFor="">
              E-MAIL
            </label>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.login}>
            <label className={styles.txt} htmlFor="">
              SENHA
            </label>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.btn}>
            <button className={styles.btnSend} type="submit">
              CADASTRAR
            </button>
            <span className={styles.txt}>
              Você já tem Login?{" "}
              <a className={styles.txt} href="/login">
                Entre Aqui.{" "}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
