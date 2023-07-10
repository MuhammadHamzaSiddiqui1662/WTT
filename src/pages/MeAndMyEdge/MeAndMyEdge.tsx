import { FC } from "react";
import styles from "./MeAndMyEdge.module.scss";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import { SectionHeading } from "src/components/SectionHeading/SectionHeading";
import DP from "src/assets/images/owner.jpg";
import { Page } from "src/components/Page/Page";
import logo from "src/assets/images/logo_azur.png";

export const MeAndMyEdge: FC = () => {
  return (
    <Page>
      <div className={styles.container}>
        <PageHeading heading={"Me and My edge"} description="" />
        <section className={styles.section}>
          <SectionHeading heading="Me" />
          <div className={styles.sectionMe}>
            <div
              className={styles.description}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              <p>
                My name is Jack, a Montreal-born technology entrepreneur and investor, and hold a Bachelor's degree in
                Business Administration. At the age of 28, I founded my consulting firm that specialized in technology,
                which later became the property of a major Canadian public listed company. Alongside my project
                management contracts in merger and acquisition as a freelancer, I ventured into investing my resources
                in several investment vehicles such as venture capital, bonds, stocks, and futures.
              </p>
              <p>
                As for most of us, trading is the beginning was pretty challenging and I figured that it was necessary
                for me to have an edge to make the difference.
              </p>
            </div>
            <div
              className={styles.dp}
              data-aos="flip-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              <img src={DP} alt="DP" />
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <SectionHeading heading="My edge" />
          <div className={styles.sectionMyEdge}>
            <img
              src={logo}
              className={styles.logo}
              alt="logo"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-anchor-placement="top"
            />
            <div
              className={styles.description}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              <p>
                An edge could be anything that gives you an advantage over other traders, whether it's a unique strategy
                or a specific skillset. Not using an edge or using any very popular edges out there was not an option,
                as my results were below expectations.
              </p>
              <p>
                So with the use of my extensive computer knowledge and my 25 years+ of experience in speculation of
                various instruments, I completed my first trading algorithm (called “Azur”) in 2016. This algo
                calculates key levels from its analysis of the prior 150 days. There are 7 key levels: 2 long timeframe
                players levels, 2 intermediate timeframe and 3 short timeframe.
              </p>
              <p>
                No! I am not using any already known formula, algorithm, or anything that exist anywhere on this planet.
                This is purely coming from many years and uncounted hours of work, looking at charts, price movement,
                trial and errors calculations during 15 months.
              </p>
              <p>THIS IS MY EDGE! AND IT CAN BECOME YOURS.</p>
              <p>
                Each one of the 7 levels represents a high odds trade reaction, meaning that I may decide to go Long (if
                price is coming from above) or Short (if price is coming from below), depending on if I see other
                favorable conditions and none or very few warning signs. The expected trade reaction will vary depending
                on the current market context. Trades can almost be taken on the sole basis that it is a key level. But
                the odds of a tradable reaction will be increased if the levels is also a confluence area (like a «
                moving level » or key references within it, like VPOC, VWAP, MID, Overnight High/Low, etc.). Some
                warning sign, like a VWAP or VPOC few points behind the zone or a divergence with a usually correlated
                index, may suggest me to skip the trade.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
};
