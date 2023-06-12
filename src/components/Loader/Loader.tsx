import styles from "./Loader.module.scss";
import { FaSpinner } from "react-icons/fa";

export const Loader = () => {
  return (
    <div className={styles.container}>
      <FaSpinner size={40} className={styles.spinner} />
    </div>
  );
};
