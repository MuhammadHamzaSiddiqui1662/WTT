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
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [machinId, setMachinId] = useState("");
  const [provider, setProvider] = useState("");
  const [tool, setTool] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(name, email);
    setOpenModal(true);
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
              label="First Name"
              placeholder="Enter your first name..."
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <LabeledInput
              label="Last Name"
              placeholder="Enter your last name..."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className={styles.span2}>
              <LabeledInput
                label="Address"
                placeholder="Enter your address..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <LabeledInput
              label="City"
              placeholder="Enter your City..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <LabeledInput
              label="State"
              placeholder="Enter your State..."
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <LabeledInput
              label="Postal ZIP Code"
              placeholder="Enter your ZIP Code..."
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <LabeledInput
              label="Country"
              placeholder="Enter your Country..."
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <LabeledInput
              label="Phone"
              placeholder="Enter your Phone..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <LabeledInput
              label="Email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <LabeledInput
              label="Machine ID"
              placeholder="Ninja Trader Machine ID..."
              value={machinId}
              onChange={(e) => setMachinId(e.target.value)}
            />
            <LabeledInput
              label="Provider"
              placeholder="Who is your data feed provider"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
            />
            <div className={styles.toolsOption}>
              <p className={styles.description}>What instrument do you trade?</p>
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_tool"
                label="ES"
                value="ES"
                onChange={(e) => setTool(e.target.value)}
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_tool"
                label="NQ"
                value="NQ"
                onChange={(e) => setTool(e.target.value)}
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_tool"
                label="RTY"
                value="RTY"
                onChange={(e) => setTool(e.target.value)}
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_tool"
                label="CL"
                value="CL"
                onChange={(e) => setTool(e.target.value)}
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_tool"
                label="6E"
                value="6E"
                onChange={(e) => setTool(e.target.value)}
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="trading_tool"
                label="6J"
                value="6J"
                onChange={(e) => setTool(e.target.value)}
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
