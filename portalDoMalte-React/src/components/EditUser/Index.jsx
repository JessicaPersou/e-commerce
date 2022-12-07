import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../EditUser/editUser.module.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useToast } from "react-toastify";

export function EditUser() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  async function onLoad() {
    console.log(id);
    const { data } = await axios.get(`http://localhost:9001/user/${id}`);
    setUser(data);
  }

  function onChange(value, name) {
    setUser({ ...user, [name]: value });
  }

  async function onSave() {
    await axios.put(`http://localhost:9001/user/${id}`, user);
    alert("Usuário atualizado!")
    navigate("/");
  }

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className={styles.container}>
      {/* AQUI MENSAGEM */}
      <div className={styles.users}>
        <div className={styles.col1}>
          <div className={styles.inputTxt}>
            <label htmlFor="">Nome </label>{" "}
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, "first_name")}
              value={user.first_name}
            />
          </div>
          <div className={styles.inputTxt}>
            <label htmlFor="">Sobrenome</label>{" "}
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, "last_name")}
              value={user.last_name}
            />
          </div>

          <div className={styles.inputTxt}>
            <label>CPF</label>
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, "cpf")}
              value={user.cpf}
            />
          </div>

          <div className={styles.inputTxt}>
            <label>Telefone</label>
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, "phone")}
              value={user.phone}
            />
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.inputTxt}>
            <label>Data de Nascimento</label>
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, "birthdate")}
              value={user.birthdate}
            />
          </div>

          <div className={styles.inputTxt}>
            <label>E-mail</label>
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, "email")}
              value={user.email}
            />
          </div>
          <div className={styles.inputTxt}>
            <label>Senha</label>
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, "password")}
              value={user.password}
            />
          </div>
        </div>
      </div>
      <div>
        <button className={styles.btnPortal} onClick={onSave}>
          ATUALIZAR
        </button>
      </div>
    </div>
  );
}
