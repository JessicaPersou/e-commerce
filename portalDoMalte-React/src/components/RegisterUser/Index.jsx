import styles from "./register.module.css";
import Logo from "../../assets/elements/beerbranco.svg";
import { ArrowUUpLeft } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  // const notify = () => toast("Usuário Cadastrado com Sucesso!");
  const navigate = useNavigate();

  async function createUser() {
    await axios.post("http://localhost:9001/user", {
      full_name: "full_name",
      document: "document",
      birthdate: "birthdate",
      phone: "phone",
      email: "email",
      password: "password",
    });
    console.log("Deu certo!");
  }

  return (
    <div className={styles.colorbg}>
      <div className={styles.left}>
        <a className={styles.txt} href="/">
          <ArrowUUpLeft size={32} />{" "}
        </a>
      </div>
      <div className={styles.row}>
        <div className={styles.box}>
          <img src={Logo} alt="" />
          <h1>PORTAL DO MALTE</h1>
          <strong>VARIEDADE DE ESTILOS, INFINIDADE DE SABORES</strong>
        </div>
        <div className={styles.form}>
          <h2 className={styles.title}>CADASTRO</h2>
          <div className={styles.loginForm}>
            <Formik
              initialValues={{
                full_name: "",
                document: "",
                birthdate: "",
                phone: "",
                email: "",
                password: "",
              }}
              validationSchema={SchemaRegister}
              onSubmit={(values) => {
                createUser(values);
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className={styles.login}>
                    <label className={styles.txt} htmlFor="">
                      Nome
                    </label>
                    <Field
                      className={styles.input}
                      name="full_name"
                      type="text"
                    />
                    {errors.full_name && touched.full_name ? (
                      <div className={styles.error}>{errors.full_name}</div>
                    ) : null}
                  </div>
                  <div className={styles.login}>
                    <label className={styles.txt} htmlFor="">
                      CPF
                    </label>
                    <Field
                      className={styles.input}
                      name="document"
                      type="number"
                    />
                    {errors.document && touched.document ? (
                      <div className={styles.error}>{errors.document}</div>
                    ) : null}
                  </div>
                  <div className={styles.login}>
                    <label className={styles.txt} htmlFor="">
                      Data de Nascimento
                    </label>
                    <Field
                      className={styles.input}
                      name="birthdate"
                      type="date"
                    />
                    {errors.birthdate && touched.birthdate ? (
                      <div className={styles.error}>{errors.birthdate}</div>
                    ) : null}
                  </div>
                  <div className={styles.login}>
                    <label className={styles.txt} htmlFor="">
                      Telefone
                    </label>
                    <Field
                      className={styles.input}
                      name="phone"
                      type="number"
                    />
                    {errors.phone && touched.phone ? (
                      <div className={styles.error}>{errors.phone}</div>
                    ) : null}
                  </div>
                  <div className={styles.login}>
                    <label className={styles.txt} htmlFor="">
                      E-mail
                    </label>
                    <Field className={styles.input} name="email" type="email" />
                    {errors.email && touched.email ? (
                      <div className={styles.error}>{errors.email}</div>
                    ) : null}{" "}
                  </div>
                  <div className={styles.login}>
                    <label className={styles.txt} htmlFor="">
                      Senha
                    </label>
                    <Field
                      className={styles.input}
                      name="password"
                      type="password"
                    />
                    {errors.password && touched.password ? (
                      <div className={styles.error}>{errors.password}</div>
                    ) : null}{" "}
                  </div>
                </Form>
              )}
            </Formik>

            <div className={styles.btn}>
              <button
                // onClick={notify}
                onClick={createUser}
                className={styles.btnPortal}
                type="submit"
              >
                {/* <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                /> */}
                <strong>CADASTRAR</strong>
              </button>
              <span className={styles.txt}>
                Você já tem Login?{" "}
                <Link className={styles.txt} to="/login">
                  Entre Aqui.{" "}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
