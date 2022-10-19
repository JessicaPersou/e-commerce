import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "../User/user.css";

export function User() {
  const [list, setList] = useState([]);

  async function getUsers() {
    const { data } = await axios.get("http://localhost:8080/user");
    console.log(data);
    setList(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="table">
      <table className="table-users">
        <col className="col-style">
        <col className="col-style">
        <col className="col-style">
        <thead>
          <tr className="table-head">
            <th>ID</th>
            <th>NOME</th>
            <th>DOCUMENTO</th>
            <th>DATA DE NASCIMENTO</th>
            <th>TELEFONE</th>
            <th>E-MAIL</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id} className="table-body">
              <td>{item.id}</td>
              <td>{item.full_name}</td>
              <td>{item.document}</td>
              <td>
                {item.birthdate && moment(item.birthdate).format("DD/MM/YYYY")}
              </td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
