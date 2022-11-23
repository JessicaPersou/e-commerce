import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import styles from "../User/user.module.css";
import { Pencil, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function User() {
  const [list, setList] = useState([]);
  const navegate = useNavigate();

  async function getUsers() {
    const { data } = await axios.get("http://localhost:8080/user");
    console.log(data);
    setList(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  async function onRemove(item) {
    await axios.delete(`http://localhost:8080/user/${item.id}`);
    getUsers();
  }

  async function update() {
    navegate("/admin/users/edit");
  }

  return (
    <div className={styles.container}>
      <h1>USUÁRIOS CADASTRADOS</h1>

      <table className={styles.table}>
        <thead>
          <tr className={styles.tableTr}>
            <th>ID</th>
            <th>NOME</th>
            <th>CPF</th>
            <th>DATA DE NASCIMENTO</th>
            <th>TELEFONE</th>
            <th>E-MAIL</th>
            <th>APAGAR</th>
            <th>EDITAR</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {list.map((item) => (
            <tr key={item.id} className={styles.tableTr}>
              <td>{item.id}</td>
              <td>{item.full_name}</td>
              <td>{item.document}</td>
              <td>
                {item.birthdate && moment(item.birthdate).format("DD/MM/YYYY")}
              </td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>
                <button
                  className={styles.btnUsers}
                  onClick={() => onRemove(item)}
                >
                  <Trash size={30} color="#ee1b1b" />
                </button>
              </td>
              <td>
                <button
                  className={styles.btnUsers}
                  onClick={() => update(item.id)}
                >
                  <Pencil size={30} color="#d4a216" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
