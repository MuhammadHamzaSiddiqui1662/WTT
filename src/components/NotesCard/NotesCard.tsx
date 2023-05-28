import { FC } from "react";
import styles from "./NotesCard.module.scss";
import { Button } from "../Button/Button";
import { Notes } from "src/types";

interface IProps extends Notes {
  animation?: string;
  delay?: number;
  duration?: number;
  anchor?: string;
  setOpenedNotes: Function;
}

export const NotesCard: FC<IProps> = ({
  title,
  image,
  alt,
  description,
  animation = "zoom-out",
  delay,
  duration,
  anchor = "top",
  setOpenedNotes,
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
        data-aos-anchor-placement="top"
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
          onClick={() => setOpenedNotes({ title, image, description })}
        >
          Give a Read
        </Button>
      </div>
    </div>
  );
};
