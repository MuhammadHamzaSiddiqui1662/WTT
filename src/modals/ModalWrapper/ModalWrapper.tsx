import { ReactNode } from "react";
import styles from "./ModalWrapper.module.scss";

export const ModalWrapper = ({
  children,
  className,
  handleClose,
}: {
  children: ReactNode;
  className?: CSSRule | string;
  handleClose: () => void;
}) => {
  return (
    <div className={styles.wrapper} onClick={handleClose}>
      <div className={styles.container + " " + className}>{children}</div>
    </div>
  );
};
