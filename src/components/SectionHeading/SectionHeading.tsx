import { FC } from "react";
import styles from "./SectionHeading.module.scss";

interface IProps {
  heading: string;
}

export const SectionHeading: FC<IProps> = ({ heading }) => {
  return (
    <h1 className={styles.heading} data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1100">
      {heading}
    </h1>
  );
};
