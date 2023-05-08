import { FC } from "react";
import styles from "./Tools.module.scss";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import { SectionHeading } from "src/components/SectionHeading/SectionHeading";
import { ToolsCard } from "src/components/ToolsCard/ToolsCard";
import graphImage from "src/assets/images/exampleGraph.webp";
import { Page } from "src/components/Page/Page";

export const Tools: FC = () => {
  return (
    <Page>
      <div className={styles.container}>
        <PageHeading heading={"Tools"} description="" />
        <section className={styles.section}>
          <SectionHeading heading="Levels Premium tools - What that includes" />
          <p
            className={styles.para}
            data-aos="fade-right"
            data-aos-delay={600}
            data-aos-duration={1000}
            data-aos-anchor-placement="top-bottom"
          >
            When you subscribe to <span className={styles.prompt}>« Azur Levels Premium »</span> tool for a specific
            instrument, you get:
          </p>
          <ul className={styles.list}>
            <li
              data-aos="fade-left"
              data-aos-delay={1300}
              data-aos-duration={700}
              data-aos-anchor-placement="top-bottom"
            >
              Daily updates of key and reference levels before market open (usually after 7am){" "}
              <span className={styles.listExtra}>
                — these daily levels are static and are actionable for the next 24h (RTH/Globex).
              </span>
            </li>
            <li
              data-aos="fade-left"
              data-aos-delay={1500}
              data-aos-duration={700}
              data-aos-anchor-placement="top-bottom"
            >
              Live updated biais widget, showing state of Long, Intermediate and Short timeframe players.
            </li>
            <li
              data-aos="fade-left"
              data-aos-delay={1700}
              data-aos-duration={700}
              data-aos-anchor-placement="top-bottom"
            >
              Weekly updates of the LIS level before market open on Monday, as well as some reference levels{" "}
              <span className={styles.listExtra}>
                — they remain static for the week and are actionable for the whole week
              </span>
            </li>
            <li
              data-aos="fade-left"
              data-aos-delay={1900}
              data-aos-duration={700}
              data-aos-anchor-placement="top-bottom"
            >
              Access to my Discord room where the Inner Triangle Community of traders can share their trade ideas, ask
              me anything{" "}
              <span className={styles.listExtra}>
                — I will be « on air » from 8am to 11:30am, but the channel will be opened non-stop.
              </span>
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <SectionHeading heading="Tools for futures" />
          <div className={styles.toolCards}>
            <ToolsCard title="NQ KEY LEVELS" price={19.99} image={graphImage} alt="abc graph" />
            <ToolsCard title="NQ KEY LEVELS" price={19.99} image={graphImage} alt="abc graph" />
            <ToolsCard title="NQ KEY LEVELS" price={19.99} image={graphImage} alt="abc graph" />
            <ToolsCard title="NQ KEY LEVELS" price={19.99} image={graphImage} alt="abc graph" />
            <ToolsCard title="NQ KEY LEVELS" price={19.99} image={graphImage} alt="abc graph" />
          </div>
        </section>
        <section className={styles.section}>
          <SectionHeading heading="Tools for indices" />
          <div className={styles.toolCards}>
            <ToolsCard title="NQ KEY LEVELS" price={19.99} image={graphImage} alt="abc graph" />
            <ToolsCard title="NQ KEY LEVELS" price={19.99} image={graphImage} alt="abc graph" />
            <ToolsCard title="NQ KEY LEVELS" price={19.99} image={graphImage} alt="abc graph" />
            <ToolsCard title="NQ KEY LEVELS" price={19.99} image={graphImage} alt="abc graph" />
            <ToolsCard title="NQ KEY LEVELS" price={19.99} image={graphImage} alt="abc graph" />
          </div>
        </section>
        <section className={styles.section}>
          <SectionHeading heading="Tools for forex" />
          <div className={styles.toolCards}>
            <ToolsCard title="NQ KEY LEVELS" price={19.99} image={graphImage} alt="abc graph" />
            <ToolsCard title="NQ KEY LEVELS" price={19.99} image={graphImage} alt="abc graph" />
            <ToolsCard title="NQ KEY LEVELS" price={19.99} image={graphImage} alt="abc graph" />
            <ToolsCard title="NQ KEY LEVELS" price={19.99} image={graphImage} alt="abc graph" />
            <ToolsCard title="NQ KEY LEVELS" price={19.99} image={graphImage} alt="abc graph" />
          </div>
        </section>
      </div>
    </Page>
  );
};
