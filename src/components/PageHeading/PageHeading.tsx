import { FC } from "react";
import styles from "./PageHeading.module.scss";

interface IProps {
  heading: string;
  description?: string;
}

export const PageHeading: FC<IProps> = ({ heading, description }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading} data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
        {heading}
      </h1>
    </div>
  );
};
