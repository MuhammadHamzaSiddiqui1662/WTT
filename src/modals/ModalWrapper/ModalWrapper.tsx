import { ReactNode } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
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
      <div className={styles.container + " " + className} onClick={(e) => e.stopPropagation()}>
        <AiFillCloseCircle className={styles.closeIcon} onClick={handleClose} />
        {children}
      </div>
    </div>
  );
};
