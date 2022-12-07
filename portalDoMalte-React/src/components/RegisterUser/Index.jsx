import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Titles } from "../Titles/Index";
import styles from "./register.module.css";
import Logo from "../../assets/logo/amarelo.png";
import { ArrowLeft } from "phosphor-react";
import * as Yup from "yup";

const registerValidation = Yup.object().shape({
  first_name: Yup.string()
    .min(3, "*Campo muito Curto")
    .max(100, "*Quantidade de caracteres inválida!")
    .required("*Campo Obrigatório"),
  last_name: Yup.string()
    .min(3, "*Campo muito Curto")
    .max(100, "*Quantidade de caracteres inválida!")
    .required("*Campo Obrigatório"),
  cpf: Yup.number()
    .test("len", "*O Campo CPF deve ter 11 dígitos!", (val) => {
      if (val === undefined) {
        return true;
      } else {
        return val.toString().length == 11;
      }
    })
    .required("*Campo Obrigatório"),
  birthdate: Yup.date()
    .nullable()
    .max(
      new Date(Date.now() - 567648000000),
      "*Você deve ter 18 anos no mínimo!"
    ),
  // .required("*Campo Obrigatório"),
  phone: Yup.number()
    .positive()
    .integer()
    .min(10, "*Campo muito Curto")
    .max(11, "*Quantidade de caracteres inválida!"),
  email: Yup.string()
    .email("*E-mail inválido!")
    .max(100, "*Quantidade de caracteres inválida!")
    .required("*Campo Obrigatório"),
  password: Yup.string()
    .min(8, "*Senha muito Curta")
    .required("*Campo Obrigatório"),
});

export function RegisterUser() {
  const navigate = useNavigate();

  async function createUser(user) {
    await axios.post("http://localhost:9001/user", user);
    console.log("Clicou, vamos ver user:!", user);
    navigate("/");
  }

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      cpf: "",
      birthdate: "",
      phone: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      createUser(values);
      alert(JSON.stringify("Usuário Cadastrado com Sucesso!", values, null, 2));
    },
  });

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.form1}>
          <div className={styles.custom}>
            <img className={styles.imgLogo} src={Logo} />
          </div>
          <h2>Não deixe para amanhã a cerveja que você pode comprar hoje!</h2>
          <h3>
            Cadastre-se agora mesmo e conheça um departamento cheio de cervejas
            com preços especiais e exclusivos.
            <br />
          </h3>
          <Link className={styles.link} to="/login">
            <ArrowLeft size={28} /> Volte para o Login.
          </Link>
        </div>
        <div className={styles.form2}>
          <Titles title={"Cadastre-se"} />
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.custom}>
              <label className={styles.customLabel} htmlFor="first_name">
                Nome
              </label>
              <input
                className={styles.customInput}
                id="first_name"
                name="first_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.first_name}
              />
            </div>
            <div className={styles.custom}>
              <label className={styles.customLabel} htmlFor="last_name">
                Sobrenome
              </label>
              <input
                className={styles.customInput}
                id="last_name"
                name="last_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.last_name}
              />
            </div>
            <div className={styles.custom}>
              <label className={styles.customLabel} htmlFor="cpf">
                CPF
              </label>
              <input
                className={styles.customInput}
                id="cpf"
                name="cpf"
                type="cpf"
                onChange={formik.handleChange}
                value={formik.values.cpf}
              />
            </div>
            <div className={styles.custom}>
              <label className={styles.customLabel} htmlFor="birthdate">
                Data de Nascimento
              </label>
              <input
                className={styles.customInput}
                id="birthdate"
                name="birthdate"
                type="birthdate"
                onChange={formik.handleChange}
                value={formik.values.birthdate}
              />
            </div>
            <div className={styles.custom}>
              <label className={styles.customLabel} htmlFor="phone">
                Phone
              </label>
              <input
                className={styles.customInput}
                id="phone"
                name="phone"
                type="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </div>
            <div className={styles.custom}>
              <label className={styles.customLabel} htmlFor="email">
                E-mail
              </label>
              <input
                className={styles.customInput}
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className={styles.custom}>
              <label className={styles.customLabel} htmlFor="password">
                Senha
              </label>
              <input
                className={styles.customInput}
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            <div className={styles.btn}>
              <button className={styles.btnPortal} type="submit">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
