import styles from "./register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Logo from "../../assets/logo/amarelo.png";
import { ArrowLeft } from "phosphor-react";
import { useEffect } from "react";
import create from "prompt-sync";
import { Titles } from "../Titles/Index";

const SchemaRegister = Yup.object().shape({
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
    ).required("*Campo Obrigatório"),
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

  // useEffect(()=>{
  // if(createUser){
  //   navigate("/register")
  // }
  // },[])

  async function createUser(user) {
    await axios.post("http://localhost:9001/user", user);
    console.log("Clicou, vamos ver user:!", user);
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
    validationSchema: SchemaRegister,
    onSubmit: (values) => createUser(values),
  });

  return (
    <div className={styles.container}>
      <div className={styles.colorbackground}>
        <div className={styles.form1}>
          <div>
            <img className={styles.imgLogo} src={Logo} />
          </div>
          <h2>Não deixe para amanhã a cerveja que você pode comprar hoje!</h2>
          <h3>
            Cadastre-se agora mesmo e conheça um departamento cheio de cervejas
            com preços especiais e exclusivos.
            <br />
          </h3>
          <Link className={styles.link} to="/login">
            <ArrowLeft size={24} /> Volte para o Login.
          </Link>
        </div>

        <form className={styles.form2} onSubmit={formik.handleSubmit}>
          <div className={styles.formInfos}>
            <Titles title={"Cadastre-se"} />
            <div className={styles.custom}>
              <label className={styles.customLabel}>Nome</label>
              <input
                className={styles.customInput}
                id="first_name"
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
              />
            </div>
            <div className={styles.custom}>
              <label className={styles.customLabel}>Sobrenome</label>
              <input
                className={styles.customInput}
                id="last_name"
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
              />
            </div>
            <div className={styles.custom}>
              <label className={styles.customLabel}>CPF</label>
              <input
                className={styles.customInput}
                id="cpf"
                name="cpf"
                value={formik.values.cpf}
                onChange={formik.handleChange}
              />
            </div>
            <div className={styles.custom}>
              <label className={styles.customLabel}>Data de Nascimento</label>
              <input
                className={styles.customInput}
                id="birthdate"
                name="birthdate"
                value={formik.values.birthdate}
                onChange={formik.handleChange}
              />
            </div>
            <div className={styles.custom}>
              <label className={styles.customLabel}>Telefone</label>
              <input
                className={styles.customInput}
                id="phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
            </div>
            <div className={styles.custom}>
              <label className={styles.customLabel}>E-mail</label>
              <input
                className={styles.customInput}
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div className={styles.custom}>
              <label className={styles.customLabel}>Senha</label>
              <input
                className={styles.customInput}
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className={styles.btn}>
            <button
              className={styles.btnPortal}
              color="primary"
              variant="contained"
              type="submit"
            >
              <strong>Cadastrar</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
