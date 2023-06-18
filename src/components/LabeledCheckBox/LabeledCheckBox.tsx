import { FC } from "react";
import styles from "./LabeledCheckBox.module.scss";

interface IProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: any) => void;
  className?: CSSRule | any;
}

export const LabeledCheckBox: FC<IProps> = ({ className, name, checked, onChange, label }) => {
  return (
    <div className={styles.container + " " + className}>
      <input type="checkbox" checked={checked} id={label} name={name} onChange={onChange} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};
