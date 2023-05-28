import { FC } from "react";
import styles from "./Insights.module.scss";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import { SectionHeading } from "src/components/SectionHeading/SectionHeading";
import { Page } from "src/components/Page/Page";
import { insightConfig } from "src/config/insightsConfig";

export const Insights: FC = () => {
  return (
    <Page>
      <div className={styles.container}>
        <PageHeading heading={"My Insights"} description="" />
        {insightConfig.map((insight, index) => (
          <section className={styles.section}>
            <SectionHeading heading={insight.heading} />
            <video
              className={styles.video}
              src={insight.src}
              controls
              controlsList="nodownload"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-anchor-placement="top"
            ></video>
            <div
              className={styles.description}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-anchor-placement="top"
            >
              {insight.descriptions.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Page>
  );
};
