import styles from "./logo.module.css";
import Logo from "../../assets/logo/1.png";
import { Link } from "react-router-dom";


export function LogoHeader() {
  return (
    <div className={styles.logoHeader}>
      <Link to="/">
      <img className={styles.logoImg} src={Logo} alt="" />
      </Link>
    </div>
  );
}
