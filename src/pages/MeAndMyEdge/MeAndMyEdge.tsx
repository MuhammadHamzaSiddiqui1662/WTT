import { FC, useState } from "react";
import styles from "./MeAndMyEdge.module.scss";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import { SectionHeading } from "src/components/SectionHeading/SectionHeading";
import DP from "src/assets/images/TherryDP.webp";
import { Page } from "src/components/Page/Page";

export const MeAndMyEdge: FC = () => {
  return (
    <Page>
      <div className={styles.container}>
        <PageHeading heading={"Me and My Edge"} description="" />
        <div className={styles.section}>
          <section>
            <SectionHeading heading="Me" />
            <div className={styles.sectionMe}>
              <div
                className={styles.description}
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
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
                  As for most of us, trading is the beginning was pretty challenging and I figured that it was necessary
                  for me to have an edge to make the difference.
                </p>
              </div>
              <div
                className={styles.dp}
                data-aos="flip-right"
                data-aos-delay="600"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
              >
                <img src={DP} alt="DP" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Page>
  );
};
