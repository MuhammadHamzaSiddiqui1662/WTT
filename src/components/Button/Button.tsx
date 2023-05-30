import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface IProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: CSSStyleRule | string;
  fullwidth?: boolean;
  onClick?: (e: any) => void;
}

export const Button: FC<IProps> = ({ children, className, type, fullwidth = false, onClick, ...props }) => {
  return (
    <div className={`${styles.container} ${fullwidth && styles.fullwidth}`} {...props}>
      <button
        className={`${styles.button} ${fullwidth && styles.fullwidth} ${className}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
