import { FC } from "react";
import styles from "./Footer.module.scss";
import { NavBar } from "../NavBar/NavBar";

export const Footer: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.risk}>
          <p className={styles.heading} data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top">
            RISK DISCLOSURE:
          </p>
          <p className={styles.description} data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top">
            Futures, forex and stock trading contains substantial risk and is not for every investor. An investor could
            potentially lose all or more than the initial investment. Risk capital is money that can be lost without
            jeopardizing ones financial security or life style. Only risk capital should be used for trading and only
            those with sufficient risk capital should consider trading. Past performance is not necessarily indicative
            of future results.
          </p>
          <p
            className={styles.heading}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
            data-aos-anchor-placement="top"
          >
            HYPOTHETICAL PERFORMANCE DISCLAIMER:
          </p>
          <p
            className={styles.description}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
            data-aos-anchor-placement="top"
          >
            HYPOTHETICAL PERFORMANCE RESULTS HAVE MANY INHERENT LIMITATIONS, SOME OF WHICH ARE DESCRIBED BELOW. NO
            REPRESENTATION IS BEING MADE THAT ANY ACCOUNT WILL OR IS LIKELY TO ACHIEVE PROFITS OR LOSSES SIMILAR TO
            THOSE SHOWN; IN FACT, THERE ARE FREQUENTLY SHARP DIFFERENCES BETWEEN HYPOTHETICAL PERFORMANCE RESULTS AND
            THE ACTUAL RESULTS SUBSEQUENTLY ACHIEVED BY ANY PARTICULAR TRADING PROGRAM. ONE OF THE LIMITATIONS OF
            HYPOTHETICAL PERFORMANCE RESULTS IS THAT THEY ARE GENERALLY PREPARED WITH THE BENEFIT OF HINDSIGHT. IN
            ADDITION, HYPOTHETICAL TRADING DOES NOT INVOLVE FINANCIAL RISK, AND NO HYPOTHETICAL TRADING RECORD CAN
            COMPLETELY ACCOUNT FOR THE IMPACT OF FINANCIAL RISK OF ACTUAL TRADING. FOR EXAMPLE, THE ABILITY TO WITHSTAND
            LOSSES OR TO ADHERE TO A PARTICULAR TRADING PROGRAM IN SPITE OF TRADING LOSSES ARE MATERIAL POINTS WHICH CAN
            ALSO ADVERSELY AFFECT ACTUAL TRADING RESULTS. THERE ARE NUMEROUS OTHER FACTORS RELATED TO THE MARKETS IN
            GENERAL OR TO THE IMPLEMENTATION OF ANY SPECIFIC TRADING PROGRAM WHICH CANNOT BE FULLY ACCOUNTED FOR IN THE
            PREPARATION OF HYPOTHETICAL PERFORMANCE RESULTS AND ALL WHICH CAN ADVERSELY AFFECT TRADING RESULTS
          </p>
        </div>
        <NavBar className={styles.bottomNav} />
      </div>
    </div>
  );
};
