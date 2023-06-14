import { FC } from "react";
import styles from "./ToolsCard.module.scss";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { Tools } from "src/types";

interface IProps extends Tools {
  animation?: string;
  delay?: number;
  duration?: number;
  anchor?: string;
}

export const ToolsCard: FC<IProps> = ({
  title,
  image,
  alt,
  price,
  planId,
  animation = "zoom-out",
  delay,
  duration,
  anchor = "top-bottom",
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
        <p className={styles.price}>Price: ${price}</p>
        <Link to={`/subscribe/${planId}`}>
          <Button
            fullwidth={true}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-anchor-placement="top"
          >
            Add to Basket
          </Button>
        </Link>
      </div>
    </div>
  );
};
