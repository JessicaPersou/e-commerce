import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import styles from "../User/user.module.css";
import { Pencil, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { Titles } from "../Titles/Index";
import { IUser } from "../../models/user";

export function User() {
  const [list, setList] = useState<IUser[]>([]);
  const navigate = useNavigate();

  async function getUsers() {
    const { data } = await axios.get("http://localhost:9001/user");
    console.log(data);
    setList(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  async function onRemove(id : number) {
    await axios.delete(`http://localhost:9001/user/${id}`);

    getUsers();
  }

  async function update(id : number) {
    navigate(`/admin/users/edit/${id}`);
  }

  return (
    <div className={styles.container}>
      <Titles title={"Usuários Cadastrados"} />
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableTr}>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>CPF</th>
            <th>Data de Nascimento</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Apagar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {list.map((item) => (
            <tr key={item.id} className={styles.tableTr}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.cpf}</td>
              <td>
                {item.birthdate && moment(item.birthdate).format("DD-MM-YYYY")}
              </td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>
                <button
                  className={styles.btnUsers}
                  onClick={() => onRemove(item.id)}
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
