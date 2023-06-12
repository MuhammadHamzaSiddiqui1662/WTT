import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import styles from "./NotSignedIn.module.scss";
import { FaUserAltSlash } from "react-icons/fa";

export const NotSignedIn = () => {
  return (
    <div className={styles.container}>
      <FaUserAltSlash size={50} />
      <h2>Not Logged In</h2>
      <p className={styles.description}>You are not logged in. Please login to use this page.</p>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
};
