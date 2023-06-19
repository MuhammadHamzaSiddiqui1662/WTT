import { FC } from "react";
import styles from "./Insights.module.scss";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import { SectionHeading } from "src/components/SectionHeading/SectionHeading";
import { Page } from "src/components/Page/Page";
import { insightConfig } from "src/config/insightsConfig";

const youtubeRegex =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/|youtu\.be\/)(watch\?v=|v\/|embed\/|user\/\S+\/|.*?[?&]v=)?([\w-]{11})/;

const extractId = (link: string) => {
  const match = link.match(youtubeRegex);
  if (match) {
    const videoId = match[5];
    return videoId;
  }
  return null;
};

export const Insights: FC = () => {
  return (
    <Page>
      <div className={styles.container}>
        <PageHeading heading={"My Insights"} description="" />
        {insightConfig.map((insight, index) => (
          <section className={styles.section}>
            <SectionHeading heading={insight.heading} />
            <iframe
              className={styles.video}
              src={`https://www.youtube.com/embed/${extractId(insight.src)}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-anchor-placement="top"
            ></iframe>
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
