import { FC, ChangeEvent } from "react";
import styles from "./LabeledInput.module.scss";

interface IProps {
  label: string;
  name?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  default?: string;
  error?: string;
}

export const LabeledInput: FC<IProps> = ({ label, name, error, required = false, ...props }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name || label}>
        {required && "*"}
        {label}:
      </label>
      <input className={styles.input} type="text" id={name || label} name={name || label} {...props} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
