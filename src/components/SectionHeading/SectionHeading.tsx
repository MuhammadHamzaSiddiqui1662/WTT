import { FC } from "react";
import styles from "./SectionHeading.module.scss";

interface IProps {
  heading: string;
  className?: CSSRule | string;
}

export const SectionHeading: FC<IProps> = ({ heading, className }) => {
  return (
    <h1 className={styles.heading + " " + className} data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
      {heading}
    </h1>
  );
};
