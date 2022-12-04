import styles from "./register.module.css";
// import Logo from "../../assets/elements/beerbranco.svg";
// import { ArrowUUpLeft } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SchemaRegister = Yup.object().shape({
  full_name: Yup.string()
    .min(3, "*Campo muito Curto")
    .max(100, "*Quantidade de caracteres inválida!")
    .required("*Campo Obrigatório"),
  document: Yup.number()
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
  }

  const formik = useFormik({
    initialValues: {
      full_name: "",
      document: "",
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
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.formInfos}>
          <label>Nome</label>
          <input
            className={styles.customInput}
            id="full_name"
            name="full_name"
            label="Nome"
            value={formik.values.full_name}
            onChange={formik.handleChange}
            error={formik.touched.full_name && Boolean(formik.errors.full_name)}
          />
          <label>CPF</label>
          <input
            className={styles.customInput}
            id="document"
            name="document"
            label="CPF"
            value={formik.values.document}
            onChange={formik.handleChange}
            error={formik.touched.document && Boolean(formik.errors.document)}
          />
          <label>Data de Nascimento</label>
          <input
            className={styles.customInput}
            id="birthdate"
            name="birthdate"
            label="Data de Nascimento"
            value={formik.values.birthdate}
            onChange={formik.handleChange}
            error={formik.touched.birthdate && Boolean(formik.errors.birthdate)}
          />
          <label>Telefone</label>
          <input
            className={styles.customInput}
            id="phone"
            name="phone"
            label="Telefone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
          />
          <label>E-mail</label>
          <input
            className={styles.customInput}
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
          <label>Senha</label>
          <input
            className={styles.customInput}
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
          />
        </div>
        <div>
          <button color="primary" variant="contained" fullWidth type="submit">
            Cadastrar
          </button>
        </div>
        <span>
          Você já tem cadastro?
          <Link to="/login"> Faça seu Login.</Link>
        </span>
      </form>
    </div>
  );
}
