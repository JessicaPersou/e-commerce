import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Titles } from "../Titles/Index";
import styles from "./register.module.css";
import Logo from "../../assets/logo/amarelo.png";
import { ArrowLeft } from "phosphor-react";
import * as Yup from "yup";

export function RegisterUser() {
  const navigate = useNavigate();

  async function createUser(user) {
    await axios.post("http://localhost:9001/user", user);
    console.log("Clicou, vamos ver user:!", user);
    navigate("/");
  }

  const CreateUserSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(2, "*No mínimo 2 caractéres")
      .max(30, "*No máximo 30 caractéres")
      .required("`*Obrigatório"),
    last_name: Yup.string().required("Obrigatório"),
    cpf: Yup.number()
      .test("len", "*O Campo CPF deve ter 11 dígitos!", (val) => {
        if (val === undefined) {
          return true;
        } else {
          return val.toString().length == 11;
        }
      })
      .required("*Campo Obrigatório"),
    phone: Yup.number()
      .positive()
      .integer()
      .min(10, "*Campo muito Curto")
      .max(14, "*Quantidade de caracteres inválida!")
      .required("*Obrigatório"),
    birthdate: Yup.string()
      // .test("date", "O formato da data deve ser DD/MM/YYYY", function (value) {
      //   return dayjs(value, "DD/MM/YYYY").isValid();
      // })
      .required("*Obrigatório"),
    email: Yup.string().email().required("*Obrigatório"),
    password: Yup.string()
      .required("*Senha é obrigatório.")
      .min(8, "*Campo deve ter 8 caracteres no minímo.")
      .matches(/[a-zA-Z]/, "*Senha deve ter apenas letras."),
  });

  const formik = useFormik({
    validationSchema: CreateUserSchema,
    validateOnBlur: true,
    validateOnChange: true,
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
                onBlur={formik.handleBlur}
                value={formik.values.first_name}
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <div className={styles.error}>{formik.errors.first_name}</div>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
              />
              {formik.touched.last_name && formik.errors.last_name ? (
                <div className={styles.error}>{formik.errors.last_name}</div>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.cpf}
              />
              {formik.touched.cpf && formik.errors.cpf ? (
                <div className={styles.error}>{formik.errors.cpf}</div>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.birthdate}
              />
              {formik.touched.birthdate && formik.errors.birthdate ? (
                <div className={styles.error}>{formik.errors.birthdate}</div>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className={styles.error}>{formik.errors.phone}</div>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className={styles.error}>{formik.errors.email}</div>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className={styles.error}>{formik.errors.password}</div>
              ) : null}
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
