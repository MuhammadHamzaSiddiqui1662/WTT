import { FC } from "react";
import styles from "./LabeledRadioButton.module.scss";

interface IProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  className?: CSSRule | any;
}

export const LabeledRadioButton: FC<IProps> = ({ className, name, value, onChange, label }) => {
  return (
    <div className={styles.container + " " + className}>
      <input type="radio" id={label} name={name} value={value} onChange={onChange} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};
