import { FC, ReactNode } from "react";
import styles from "./Page.module.scss";

export const Page: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
