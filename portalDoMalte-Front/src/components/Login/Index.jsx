import styles from "./login.module.css";

export function LoginUser() {
  return (
    <div className={styles.form}>
      <div className={styles.box}>
        <h2>LOGIN</h2>
        <div className={styles.login}>
          <label className={styles.txt} htmlFor="">E-MAIL</label>
          <input type="text" />
        </div>
        <div>
          <label className={styles.txt} htmlFor="">SENHA</label>
          <input type="password" />
        </div>
        <div className={styles.btn}>
          <a className={styles.txt} href="#">Esqueci minha senha</a>
          <button type="submit">LOGIN</button>
          <span className={styles.txt}>
            Você ainda não tem Login?
            <a href="/login/register"> Registre-se Aqui.</a>
          </span>
        </div>
      </div>
    </div>
  );
}
