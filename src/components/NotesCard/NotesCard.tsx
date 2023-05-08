import { FC } from "react";
import styles from "./NotesCard.module.scss";
import { Button } from "../Button/Button";

interface IProps {
  title: string;
  image: string;
  alt: string;
  description: string;
  animation?: string;
  delay?: number;
  duration?: number;
  anchor?: string;
}

export const NotesCard: FC<IProps> = ({
  title,
  image,
  alt,
  description,
  animation = "fade-left",
  delay,
  duration,
  anchor = "top",
}) => {
  return (
    <div
      className={styles.container}
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-anchor-placement={anchor}
    >
      <img
        className={styles.image}
        src={image}
        alt={alt}
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="500"
        data-aos-anchor-placement="top-bottom"
      />
      <div className={styles.caption}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>Price: ${description}</p>
        <Button
          fullwidth={true}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-anchor-placement="top"
        >
          Give a Read
        </Button>
      </div>
    </div>
  );
};
