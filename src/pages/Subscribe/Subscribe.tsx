import { FC, useState, FormEvent } from "react";
import styles from "./Subscribe.module.scss";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import { LabeledInput } from "src/components/LabeledInput/LabeledInput";
import { Page } from "src/components/Page/Page";
import { LabeledTextarea } from "src/components/LabeledTextarea/LabeledTextarea";
import { Button } from "src/components/Button/Button";
import { SectionHeading } from "src/components/SectionHeading/SectionHeading";
import { LabeledRadioButton } from "src/components/LabeledRadioButton/LabeledRadioButton";
import { PaypalSubscribeButton } from "src/components/PaypalSubscribeButton/PaypalSubscribeButton";
import { SubscribeModal } from "src/modals/SubscribeModal/SubscribeModal";

export const Subscribe: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(name, email, message);
    setOpenModal(true);
  };
  return (
    <Page>
      <div className={styles.container}>
        <PageHeading heading={"Subscribe"} description="" />
        <div className={styles.topSection} data-aos="zoom-out" data-aos-delay="600" data-aos-duration="1100">
          <p className={styles.punchLine}>BECOME A MEMBER</p>
          <p className={styles.description}>You are about to bcome a member of AZUR ZONE FOR ES (E-mini S&P 500 ES)</p>
          <h1 className={styles.heading}>Before Becoming a Member:</h1>
          <ol className={styles.list}>
            <li
              data-aos="fade-left"
              data-aos-delay={1300}
              data-aos-duration={700}
              data-aos-anchor-placement="top-bottom"
            >
              AZUR TRADING SYSTEM is no Holy Grails or magic tool. World Triangle Traders Inc. who has developed AZUR is
              driven to support independent traders in becoming better.
            </li>
            <li
              data-aos="fade-left"
              data-aos-delay={1500}
              data-aos-duration={700}
              data-aos-anchor-placement="top-bottom"
            >
              AZUR TRADING SYSTEM only works on a Lifetime, Lease or Free (Sim) Licensed NinjaTrader platform.
            </li>
            <li
              data-aos="fade-left"
              data-aos-delay={1700}
              data-aos-duration={700}
              data-aos-anchor-placement="top-bottom"
            >
              The Application Provider’s payment processor (“PayPal”) will automatically renew your membership until You
              cancel it, at $24.99.
            </li>
            <li
              data-aos="fade-left"
              data-aos-delay={1900}
              data-aos-duration={700}
              data-aos-anchor-placement="top-bottom"
            >
              YOU MUST READ the Terms of Service and Licencing
            </li>
          </ol>
          <SectionHeading heading="Start Your Account" />
          <form className={styles.form} onSubmit={handleSubmit}>
            <LabeledInput
              label="First Name"
              placeholder="Enter your first name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <LabeledInput
              label="Last Name"
              placeholder="Enter your last name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div style={{ gridColumn: "1 / span 2" }}>
              <LabeledInput
                label="Address"
                placeholder="Enter your address..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <LabeledInput
              label="City"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <LabeledInput
              label="State"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <LabeledInput
              label="Postal ZIP Code"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <LabeledInput
              label="Country"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <LabeledInput
              label="Phone"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <LabeledInput
              label="Provider"
              placeholder="Who is your data feed provider"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              <p>What instrument do you trade?</p>
              <LabeledRadioButton name="trading_tool" label="EN" value="EN" onChange={() => {}} />
              <LabeledRadioButton name="trading_tool" label="ED" value="ED" onChange={() => {}} />
              <LabeledRadioButton name="trading_tool" label="E" value="E" onChange={() => {}} />
            </div>
            <div style={{ gridColumn: "1 / span 2" }}>
              <Button className={styles.button} type="submit">
                Subscribe
              </Button>
            </div>
            <div style={{ gridColumn: "1 / span 2" }}>
              <PaypalSubscribeButton />
            </div>
          </form>
        </div>
        {openModal && <SubscribeModal handleClose={() => setOpenModal(false)} />}
      </div>
    </Page>
  );
};
