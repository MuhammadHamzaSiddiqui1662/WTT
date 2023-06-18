import { FC, useState, FormEvent, useEffect } from "react";
import styles from "./Subscribe.module.scss";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import { LabeledInput } from "src/components/LabeledInput/LabeledInput";
import { Page } from "src/components/Page/Page";
import { Button } from "src/components/Button/Button";
import { SectionHeading } from "src/components/SectionHeading/SectionHeading";
import { SubscribeModal } from "src/modals/SubscribeModal/SubscribeModal";
import gateways from "src/assets/images/payment_gatways-logos.png";
import { useParams } from "react-router-dom";
import { LabeledCheckBox } from "src/components/LabeledCheckBox/LabeledCheckBox";

enum TradingPlatforms {
  TradingView = "TradingView",
  ThinkOrSwim = "ThinkOrSwim",
  NinjaTraders = "NinjaTraders",
  Sierrachart = "Sierrachart",
}

export const Subscribe: FC = () => {
  const { planId } = useParams();
  const [openModal, setOpenModal] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    email: "",
    phone: "",
    machinId: "",
    provider: "",
    platform2: "",
    platform: {
      [TradingPlatforms.TradingView]: false,
      [TradingPlatforms.ThinkOrSwim]: false,
      [TradingPlatforms.NinjaTraders]: false,
      [TradingPlatforms.Sierrachart]: false,
    },
    planId: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    setData((prevData) => ({
      ...prevData,
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      country: user.county || "",
      planId: planId || "",
    }));
  }, [planId]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (Object.values(data.platform).every((value) => !value)) {
      alert("Select the platform you want to trade on");
    } else {
      setOpenModal(true);
    }
  };

  return (
    <Page>
      <div className={styles.container}>
        <PageHeading heading={"Subscribe"} description="" />
        <div className={styles.topSection} data-aos="zoom-out" data-aos-delay="100" data-aos-duration="1100">
          <p className={styles.punchLine}>BECOME A MEMBER</p>
          <p className={styles.description}>You are about to bcome a member of AZUR ZONE FOR ES (E-mini S&P 500 ES)</p>
          <h1 className={styles.heading}>Before Becoming a Member:</h1>
          <ol className={styles.list}>
            <li data-aos="fade-left" data-aos-delay={300} data-aos-duration={700} data-aos-anchor-placement="top">
              AZUR TRADING SYSTEM is no Holy Grails or magic tool. World Triangle Traders Inc. who has developed AZUR is
              driven to support independent traders in becoming better.
            </li>
            <li data-aos="fade-left" data-aos-delay={500} data-aos-duration={700} data-aos-anchor-placement="top">
              AZUR TRADING SYSTEM only works on a Lifetime, Lease or Free (Sim) Licensed NinjaTrader platform.
            </li>
            <li data-aos="fade-left" data-aos-delay={700} data-aos-duration={700} data-aos-anchor-placement="top">
              The Application Provider’s payment processor (“PayPal”) will automatically renew your membership until You
              cancel it, at $24.99.
            </li>
            <li data-aos="fade-left" data-aos-delay={900} data-aos-duration={700} data-aos-anchor-placement="top">
              YOU MUST READ the Terms of Service and Licencing
            </li>
          </ol>
          <SectionHeading className={styles.formHeading} heading="Start Your Account" />
          <form className={styles.form} onSubmit={handleSubmit}>
            <LabeledInput
              required={true}
              label="First Name"
              placeholder="Enter your first name..."
              value={data.firstName}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  firstName: e.target.value,
                }))
              }
            />
            <LabeledInput
              required={true}
              label="Last Name"
              placeholder="Enter your last name..."
              value={data.lastName}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  lastName: e.target.value,
                }))
              }
            />
            <div className={styles.span2}>
              <LabeledInput
                required={true}
                label="Address"
                placeholder="Enter your address..."
                value={data.address}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    address: e.target.value,
                  }))
                }
              />
            </div>
            <LabeledInput
              required={true}
              label="City"
              placeholder="Enter your City..."
              value={data.city}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  city: e.target.value,
                }))
              }
            />
            <LabeledInput
              required={true}
              label="State"
              placeholder="Enter your State..."
              value={data.state}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  state: e.target.value,
                }))
              }
            />
            <LabeledInput
              required={true}
              label="Postal ZIP Code"
              placeholder="Enter your ZIP Code..."
              value={data.zipCode}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  zipCode: e.target.value,
                }))
              }
            />
            <LabeledInput
              required={true}
              label="Country"
              placeholder="Enter your Country..."
              value={data.country}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  country: e.target.value,
                }))
              }
            />
            <LabeledInput
              required={true}
              label="Phone"
              placeholder="Enter your Phone..."
              value={data.phone}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  phone: e.target.value,
                }))
              }
            />
            <LabeledInput
              required={true}
              label="Email"
              placeholder="Enter your email..."
              value={data.email}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }))
              }
            />
            <LabeledInput
              label="Machine ID"
              placeholder="Ninja Trader Machine ID..."
              value={data.machinId}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  machinId: e.target.value,
                }))
              }
            />
            <LabeledInput
              label="Provider"
              placeholder="Who is your data feed provider"
              value={data.provider}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  provider: e.target.value,
                }))
              }
            />
            <div className={styles.toolsOption}>
              <p className={styles.description}>Choose a trading platform:</p>
              <LabeledCheckBox
                className={styles.radioButton}
                name="trading_platform"
                label={TradingPlatforms.TradingView}
                checked={data.platform[TradingPlatforms.TradingView]}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    platform: {
                      ...prevData.platform,
                      [TradingPlatforms.TradingView]: !prevData.platform[TradingPlatforms.TradingView],
                    },
                  }))
                }
              />
              <LabeledCheckBox
                className={styles.radioButton}
                name="trading_platform"
                label={TradingPlatforms.ThinkOrSwim}
                checked={data.platform[TradingPlatforms.ThinkOrSwim]}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    platform: {
                      ...prevData.platform,
                      [TradingPlatforms.ThinkOrSwim]: !prevData.platform[TradingPlatforms.ThinkOrSwim],
                    },
                  }))
                }
              />
              <LabeledCheckBox
                className={styles.radioButton}
                name="trading_platform"
                label={TradingPlatforms.NinjaTraders}
                checked={data.platform[TradingPlatforms.NinjaTraders]}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    platform: {
                      ...prevData.platform,
                      [TradingPlatforms.NinjaTraders]: !prevData.platform[TradingPlatforms.NinjaTraders],
                    },
                  }))
                }
              />
              <LabeledCheckBox
                className={styles.radioButton}
                name="trading_platform"
                label={TradingPlatforms.Sierrachart}
                checked={data.platform[TradingPlatforms.Sierrachart]}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    platform: {
                      ...prevData.platform,
                      [TradingPlatforms.Sierrachart]: !prevData.platform[TradingPlatforms.Sierrachart],
                    },
                  }))
                }
              />
            </div>
            <div className={styles.span2}>
              <Button className={styles.button} type="submit">
                Subscribe
              </Button>
            </div>
          </form>
          <img className={styles.gatways} src={gateways} alt="gatways" />
        </div>
        {openModal && <SubscribeModal handleClose={() => setOpenModal(false)} data={data} />}
      </div>
    </Page>
  );
};
