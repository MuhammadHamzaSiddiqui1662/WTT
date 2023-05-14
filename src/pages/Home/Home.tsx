import { FC } from "react";
import styles from "./Home.module.scss";
import { Button } from "src/components/Button/Button";
import { Page } from "src/components/Page/Page";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  return (
    <Page>
      <div className={styles.container}>
        <div className={styles.rightSide}>
          <h1
            className={styles.heading}
            data-aos="fade-right"
            data-aos-duration="1000"
            // data-aos-anchor-placement="top-bottom"
          >
            Bringing your trading experience to a higher level, using my edge.
          </h1>
          <p
            className={styles.description}
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            // data-aos-anchor-placement="top-bottom"
          >
            Trading is a challenging field, and having an edge can make all the difference. Stay one step ahead of the
            game by using proven approach and insights to navigate the dynamic world of trading. Let my edge sharpen
            your decision-making process, increase your profit potential, and pave the way to success. Don't just trade,
            stand out with this edge that I am willing to share.
          </p>
          <Link to="/tools">
            <Button
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              // data-aos-anchor-placement="top-bottom"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </Page>
  );
};
