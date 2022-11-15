import styles from "./register.module.css";

export function RegisterUser() {
  return (
    <div className="form-register">
      <h2>Cadastre-se</h2>
      <div className="register">
        <div className="step1">
        <span>Dados Pessoais</span>
          <div className="label">
            <label htmlFor="">Nome Completo</label>
            <input type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Documento</label>
            <input type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Data de Nascimento</label>
            <input type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Telefone</label>
            <input type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">E-mail</label>
            <input type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Senha</label>
            <input type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Confirmar Senha</label>
            <input type="text"/>
          </div>
        </div>
        <div className="step2">
          <span>Endereço da Entrega</span>
          <div className="label">
            <label htmlFor="">Tipo</label>
            <input type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">CEP</label>
            <input type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Logradouro</label>
            <input type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Número</label>
            <input type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Bairro</label>
            <input type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Cidade</label>
            <input type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Estado</label>
            <input type="text"/>
          </div>
        </div>
      </div>
      <div className="send">
        <input className="btn-send" type="button" value="Cadastrar" />
        <span>
          Você já tem Login? <a href="/login">Entre Aqui. </a>
        </span>
      </div>
    </div>
  );
}
