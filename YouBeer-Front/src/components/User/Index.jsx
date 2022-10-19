import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

export function GetUser() {
  const [list, setList] = useState < User > [];

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const response = await axios("http://localhost:8080/user");
      setList(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
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
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.user_full_name}</td>
              <td>{item.user_document}</td>
              <td>
                {item.user_birthdate &&
                  moment(item.birthdate).format("DD/MM/YYYY")}
              </td>
              <td>{item.user_phone}</td>
              <td>{item.user_email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
