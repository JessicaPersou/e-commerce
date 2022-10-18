import "../Login/login.css";

export function LoginUser() {
  return (
    <body className="form-login">
      <div className="login">
        <h1>Faça seu Login</h1>
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Senha"/>
        <span><a  href="#">Esqueci minha senha</a></span>
        <input className="btn" type="button" value="Entrar" />
        <span>
          Você ainda não tem Login? <a href="#"> Registre-se</a>{" "}
        </span>
      </div>
    </body>
  );
}
