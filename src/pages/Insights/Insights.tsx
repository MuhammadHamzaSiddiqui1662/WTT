import { FC } from "react";
import styles from "./Insights.module.scss";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import { SectionHeading } from "src/components/SectionHeading/SectionHeading";
import { Page } from "src/components/Page/Page";
// @ts-ignore
import v1 from "src/assets/videos/pixel6.webm";

export const Insights: FC = () => {
  return (
    <Page>
      <div className={styles.container}>
        <PageHeading heading={"My Insights"} description="" />
        <section className={styles.section}>
          <SectionHeading heading="My Approch" />
          <video
            className={styles.video}
            src={v1}
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
            <p>
              I am Jack. Born in Montreal, QC (Canada), I am a technology entrepreneur and investor, graduated from
              University of Quebec in Montreal, with a bachelor degree in business administration, I founded a
              consulting firm in technology at 28, which I sold to a major Canadian public listed company few years
              later. While taking some project management contracts in merger & acquisition field as a freelancer, I
              started to invest my money in several investment vehicules such as venture capital, bonds, stocks, and
              futures.
            </p>
            <p>
              As for most of us, trading is the beginning was pretty challenging and I figured that it was necessary for
              me to have an edge to make the difference.
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <SectionHeading heading="My trading principles & rules" />
          <video
            className={styles.video}
            src={v1}
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
            <p>
              I am Jack. Born in Montreal, QC (Canada), I am a technology entrepreneur and investor, graduated from
              University of Quebec in Montreal, with a bachelor degree in business administration, I founded a
              consulting firm in technology at 28, which I sold to a major Canadian public listed company few years
              later. While taking some project management contracts in merger & acquisition field as a freelancer, I
              started to invest my money in several investment vehicules such as venture capital, bonds, stocks, and
              futures.
            </p>
            <p>
              As for most of us, trading is the beginning was pretty challenging and I figured that it was necessary for
              me to have an edge to make the difference.
            </p>
          </div>
        </section>
      </div>
    </Page>
  );
};
