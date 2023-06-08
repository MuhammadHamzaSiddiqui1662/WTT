import { FC, useState } from "react";
import styles from "./Splash.module.scss";
import { Button } from "src/components/Button/Button";
import logo from "src/assets/images/logo.png";

interface IProps {}

export const SplashPage: FC<IProps> = () => {
  const [hide, setHide] = useState(false);
  return (
    <div className={`${styles.container} ${hide && styles.hide}`}>
      <div className={styles.leftSide}>
        <img className={styles.logo} src={logo} alt="" />
        <p className={styles.text}>
          Looking to be part of my World Triangle community of traders. I’m here to share my knowledge, insights,
          experience to enhance traders skills. Also to lend my edge to help traders progress towards success.{" "}
        </p>
        <Button
          className={styles.button}
          onClick={() => {
            window.scrollTo(0, 0);
            setHide(true);
          }}
        >
          Join the community now!
        </Button>
      </div>
    </div>
  );
};
