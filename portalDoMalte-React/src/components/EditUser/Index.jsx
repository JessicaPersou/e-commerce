import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../EditUser/editUser.module.css";

export function EditUser() {
  const [list, setList] = useState([]);

  async function onLoad(item) {
    const { data } = await axios.get(`http://localhost:8080/user`);
    setList(data);
  }

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className={styles.container}>
      <h1>EDITE SUAS INFORMAÇÕES</h1>
      <div>
        {list.map((item) => (
          <ul key={item.id}>
            <li>Nome</li>
            <li>{item.full_name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
