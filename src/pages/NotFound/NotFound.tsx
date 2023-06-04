import React from "react";
import styles from "./NotFound.module.scss";
import { TbNotesOff } from "react-icons/tb";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <TbNotesOff size={50} />
      <h2>Page Not Found</h2>
    </div>
  );
};
