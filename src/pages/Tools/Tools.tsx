import { FC } from "react";
import styles from "./Tools.module.scss";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import { SectionHeading } from "src/components/SectionHeading/SectionHeading";
import { ToolsCard } from "src/components/ToolsCard/ToolsCard";
import graphImage from "src/assets/images/exampleGraph.webp";
import { Page } from "src/components/Page/Page";
import { toolsConfig } from "src/config/toolsConfig";

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
          <div className={styles.toolsTableSection}>
            <table className={styles.table}>
              <thead>
                <tr className={styles.header}>
                  <th rowSpan={2}>
                    <div className={styles.tableData + " " + styles.heading}></div>
                  </th>
                  <th colSpan={5} className={styles.levels}>
                    <div className={styles.tableData + " " + styles.heading}>AZUR LEVELS</div>
                  </th>
                  <th colSpan={2} className={styles.alerts}>
                    <div className={styles.tableData + " " + styles.heading}>AZUR ALERTS</div>
                  </th>
                  <th colSpan={2} className={styles.robot}>
                    <div className={styles.tableData + " " + styles.heading}>AZUR ROBOT (AUTO-TRADER)</div>
                  </th>
                </tr>
                <tr className={styles.header}>
                  <th className={styles.levels}>
                    <div className={styles.tableData + " " + styles.subHeading}>
                      <div className={styles.type}>BASIC</div>
                      <div className={styles.price}>(from $25/mth)</div>
                    </div>
                  </th>
                  <th className={styles.levels}>
                    <div className={styles.tableData + " " + styles.subHeading}>
                      <div className={styles.type}>ADVANCED</div>
                      <div className={styles.price}>(from $50/mth)</div>
                    </div>
                  </th>
                  <th className={styles.levels}>
                    <div className={styles.tableData + " " + styles.subHeading}>
                      <div className={styles.type}>EXPERT</div>
                      <div className={styles.price}>(from $75/mth)</div>
                    </div>
                  </th>
                  <th className={styles.backTest}>
                    <div className={styles.tableData + " " + styles.subHeading}>
                      <div className={styles.type}>BACK TEST ADVANCED</div>
                      <div className={styles.price}>(from $100/life)</div>
                    </div>
                  </th>
                  <th className={styles.backTest}>
                    <div className={styles.tableData + " " + styles.subHeading}>
                      <div className={styles.type}>BACK TEST EXPERT</div>
                      <div className={styles.price}>(from $150/life)</div>
                    </div>
                  </th>
                  <th className={styles.alerts}>
                    <div className={styles.tableData + " " + styles.subHeading}>
                      <div className={styles.type}>ADVANCED</div>
                      <div className={styles.price}>(from $200/mth)</div>
                    </div>
                  </th>
                  <th className={styles.alerts}>
                    <div className={styles.tableData + " " + styles.subHeading}>
                      <div className={styles.type}>EXPERT</div>
                      <div className={styles.price}>(from $300/mth)</div>
                    </div>
                  </th>
                  <th className={styles.robot}>
                    <div className={styles.tableData + " " + styles.subHeading}>
                      <div className={styles.type}>ADVANCED</div>
                      <div className={styles.price}>(TBD)</div>
                    </div>
                  </th>
                  <th className={styles.robot}>
                    <div className={styles.tableData + " " + styles.subHeading}>
                      <div className={styles.type}>EXPERT</div>
                      <div className={styles.price}>(TBD)</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tableRow + " " + styles.yellow}>
                  <td>
                    <div className={styles.tableData} style={{ fontWeight: "bold" }}>
                      FEATURES:
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Daily levels (before market open)</div>
                  </td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Shows the main key levels (LIS, Bulls/Bears gates)</div>
                  </td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Default colors for all levels type</div>
                  </td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Shows daily targets</div>
                  </td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Shows all 7 key levels</div>
                  </td>
                  <td></td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Extended daily levels (no max)</div>
                  </td>
                  <td></td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Integrated weekly & monthly levels</div>
                  </td>
                  <td></td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Shows which timeframe players on each key level</div>
                  </td>
                  <td></td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Swing traders levels (upcoming feature)</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow + " " + styles.yellow}>
                  <td>
                    <div className={styles.tableData} style={{ fontWeight: "bold" }}>
                      SPECIAL FEATURES:
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Bias box showing who is in control (LT, IT, ST and CP)</div>
                  </td>
                  <td></td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Moving levels</div>
                  </td>
                  <td></td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Guide Box that provides suggested setup & warning</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td>P</td>
                  <td></td>
                  <td>P</td>
                  <td></td>
                  <td>P</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Provides signals w/trade location, targets, stop loss</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>P</td>
                  <td>P</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Provides warning signs and active risk assessment</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>P</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Set risk tolerance (Min R/R, Stop pts, etc.)</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>P</td>
                  <td>P</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Set # of targets</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>P</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow + " " + styles.yellow}>
                  <td>
                    <div className={styles.tableData} style={{ fontWeight: "bold" }}>
                      INCLUDED:
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Discord room (channels, insights, nuggets, etc.)</div>
                  </td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Videos (education)</div>
                  </td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Support</div>
                  </td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                  <td>P</td>
                </tr>
                <tr className={styles.tableRow + " " + styles.lightGreen}>
                  <td>
                    <div className={styles.tableData} style={{ fontWeight: "bold" }}>
                      PRICE (for the first Machine ID/Username)(2)
                    </div>
                  </td>
                  <td style={{ fontWeight: "bold" }}>USD / Month</td>
                  <td style={{ fontWeight: "bold" }}>USD / Month</td>
                  <td style={{ fontWeight: "bold" }}>USD / Month</td>
                  <td style={{ fontWeight: "bold" }}>USD / On time</td>
                  <td style={{ fontWeight: "bold" }}>USD / On time</td>
                  <td style={{ fontWeight: "bold" }}>USD / Month</td>
                  <td style={{ fontWeight: "bold" }}>USD / Month</td>
                  <td style={{ fontWeight: "bold" }}>USD / Month</td>
                  <td style={{ fontWeight: "bold" }}>USD / Month</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>1 instrument (ex. ES, NQ, CL, GC, BTCUSD, etc)</div>
                  </td>
                  <td>$25</td>
                  <td>$50</td>
                  <td>$75</td>
                  <td>$100</td>
                  <td>$150</td>
                  <td>$50</td>
                  <td>$75</td>
                  <td>$50</td>
                  <td>$75</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>3 instruments</div>
                  </td>
                  <td>$37.50</td>
                  <td>$75</td>
                  <td>$95</td>
                  <td>$150</td>
                  <td>$190</td>
                  <td>$75</td>
                  <td>$95</td>
                  <td>$75</td>
                  <td>$95</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>6 instruments</div>
                  </td>
                  <td>$45</td>
                  <td>$95</td>
                  <td>$110</td>
                  <td>$190</td>
                  <td>$220</td>
                  <td>$95</td>
                  <td>$110</td>
                  <td>$95</td>
                  <td>$110</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>9 instruments</div>
                  </td>
                  <td>Not avail.</td>
                  <td>$110</td>
                  <td>$125</td>
                  <td>$220</td>
                  <td>$250</td>
                  <td>$110</td>
                  <td>$125</td>
                  <td>$110</td>
                  <td>$125</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Unlimited instruments (on what is available)</div>
                  </td>
                  <td>Not avail.</td>
                  <td>$145</td>
                  <td>$160</td>
                  <td>$290</td>
                  <td>$320</td>
                  <td>$145</td>
                  <td>$160</td>
                  <td>$145</td>
                  <td>$160</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>(1) Ninjatrader 8 only</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>(2) 50% discount on a second MachineID</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {toolsConfig.map((section, index) => (
          <section key={index} className={styles.section}>
            <SectionHeading heading={section.sectionHeading} />
            <div className={styles.toolCards}>
              {section.content.map((tool, index) => (
                <ToolsCard
                  key={index}
                  planId={tool.planId}
                  title={tool.title}
                  price={tool.price}
                  image={graphImage}
                  alt={tool.alt}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Page>
  );
};
