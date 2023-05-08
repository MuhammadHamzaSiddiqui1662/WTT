import { FC, ChangeEvent } from "react";
import styles from "./LabeledTextarea.module.scss";

interface IProps {
  label: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  default?: string;
}

export const LabeledTextarea: FC<IProps> = ({ label, name, ...props }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name || label}>
        {label}:
      </label>
      <textarea className={styles.textarea} id={name || label} name={name || label} rows={5} {...props}></textarea>
    </div>
  );
};
