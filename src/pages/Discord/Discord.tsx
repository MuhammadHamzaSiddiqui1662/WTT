import { FC } from "react";
import { Page } from "src/components/Page/Page";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import discordLogo from "src/assets/images/discordLogo.webp";
import styles from "./Discord.module.scss";
import { Button } from "src/components/Button/Button";

export const Discord: FC = () => {
  return (
    <Page>
      <div className={styles.container}>
        <PageHeading heading={"Discord"} description="" />
        <section className={styles.section}>
          <div className={styles.leftSpan}>
            <p>
              Welcome to Azur Community Discord channel! This channel is designed for traders who want to take their
              trading to the next level using my edge - Azur.
            </p>
            <p>
              Connect with other like-minded traders in this supportive community focused on constant improvement. Learn
              how to identify profitable trading opportunities, manage risk, and execute trades with greater confidence.
            </p>
            <p>
              Share your insights, successes, and failures with the community and benefit from regular discussions and
              analysis of market conditions. While I won't be sharing my live trades, I'm available to answer specific
              questions on how to approach specific opportunities.
            </p>
            <p>
              Join us on our journey to develop a profitable and supportive trading community as we maximize our trading
              success with Azur.
            </p>
            <a href="https://t.co/HP1yG783BL" target="_blank" rel="noreferrer">
              <Button>Join Discord</Button>
            </a>
          </div>
          <div className={styles.rightSpan}>
            <img className={styles.discordLogo} src={discordLogo} alt="discordLogo" />
          </div>
        </section>
      </div>
    </Page>
  );
};
