import React, { useEffect, useState } from "react";
import styles from "./Loader.module.scss";
import { FaSpinner } from "react-icons/fa";

export const Loader = () => {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    setTimeout(() => setHide(true), 1500);
  }, []);

  return (
    <div className={`${styles.container} ${hide && styles.hide}`}>
      <FaSpinner size={40} className={styles.spinner} />
    </div>
  );
};
