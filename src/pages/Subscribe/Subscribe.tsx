import { FC, useState, FormEvent } from "react";
import styles from "./Subscribe.module.scss";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import { LabeledInput } from "src/components/LabeledInput/LabeledInput";
import { Page } from "src/components/Page/Page";
import { Button } from "src/components/Button/Button";
import { SectionHeading } from "src/components/SectionHeading/SectionHeading";
import { LabeledRadioButton } from "src/components/LabeledRadioButton/LabeledRadioButton";
import { SubscribeModal } from "src/modals/SubscribeModal/SubscribeModal";
import gateways from "src/assets/images/payment_gatways-logos.png";

export const Subscribe: FC = () => {
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
    instrument: "",
    keyLevel: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(data);
    if (data.keyLevel === "") {
      alert("Select the tool you want to subscribe for");
    } else if (data.instrument === "") {
      alert("Select the instrument you want to subscribe for");
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
              required={true}
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
              required={true}
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
              <p className={styles.description}>Which key levels do you want?</p>
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_keyLevel"
                label="ES"
                value="ES"
                groupValue={data.keyLevel}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    keyLevel: e.target.value,
                  }))
                }
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_keyLevel"
                label="NQ"
                value="NQ"
                groupValue={data.keyLevel}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    keyLevel: e.target.value,
                  }))
                }
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_keyLevel"
                label="RTY"
                value="RTY"
                groupValue={data.keyLevel}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    keyLevel: e.target.value,
                  }))
                }
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_keyLevel"
                label="CL"
                value="CL"
                groupValue={data.keyLevel}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    keyLevel: e.target.value,
                  }))
                }
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_keyLevel"
                label="6E"
                value="6E"
                groupValue={data.keyLevel}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    keyLevel: e.target.value,
                  }))
                }
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_keyLevel"
                label="6J"
                value="6J"
                groupValue={data.keyLevel}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    keyLevel: e.target.value,
                  }))
                }
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_keyLevel"
                label="FDAX"
                value="FDAX"
                groupValue={data.keyLevel}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    keyLevel: e.target.value,
                  }))
                }
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_keyLevel"
                label="GC"
                value="GC"
                groupValue={data.keyLevel}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    keyLevel: e.target.value,
                  }))
                }
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_keyLevel"
                label="ZB"
                value="ZB"
                groupValue={data.keyLevel}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    keyLevel: e.target.value,
                  }))
                }
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_keyLevel"
                label="ZN"
                value="ZN"
                groupValue={data.keyLevel}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    keyLevel: e.target.value,
                  }))
                }
              />
            </div>
            <div className={styles.toolsOption}>
              <p className={styles.description}>What instrument do you trade?</p>
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_instrument"
                label="ES"
                value="ES"
                groupValue={data.instrument}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    instrument: e.target.value,
                  }))
                }
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_instrument"
                label="NQ"
                value="NQ"
                groupValue={data.instrument}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    instrument: e.target.value,
                  }))
                }
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_instrument"
                label="RTY"
                value="RTY"
                groupValue={data.instrument}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    instrument: e.target.value,
                  }))
                }
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_instrument"
                label="CL"
                value="CL"
                groupValue={data.instrument}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    instrument: e.target.value,
                  }))
                }
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_instrument"
                label="6E"
                value="6E"
                groupValue={data.instrument}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    instrument: e.target.value,
                  }))
                }
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_instrument"
                label="6J"
                value="6J"
                groupValue={data.instrument}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    instrument: e.target.value,
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
        {openModal && <SubscribeModal handleClose={() => setOpenModal(false)} data={{}} />}
      </div>
    </Page>
  );
};
