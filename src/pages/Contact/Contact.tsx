import { FC, useState, FormEvent } from "react";
import styles from "./Contact.module.scss";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import { LabeledInput } from "src/components/LabeledInput/LabeledInput";
import { Page } from "src/components/Page/Page";
import { LabeledTextarea } from "src/components/LabeledTextarea/LabeledTextarea";
import { Button } from "src/components/Button/Button";

const WTT_EMAIL_ADDRESS = "contact@azurwtt.com";
const EMAIL_SUBJECT = ``;

export const Contact: FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const body = `Name: ${name}\n\n${message}`;

    const mailtoURL = `mailto:${WTT_EMAIL_ADDRESS}?subject=${encodeURIComponent(
      EMAIL_SUBJECT
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoURL;

    setName("");
    setMessage("");
  };

  return (
    <Page>
      <div className={styles.container}>
        <PageHeading heading={"Contact Us"} description="" />
        <div className={styles.topSection} data-aos="zoom-out" data-aos-delay="600" data-aos-duration="1100">
          <p className={styles.punchLine}>GET IN TOUCH</p>
          <h1 className={styles.heading}>Have any questions?</h1>
          <p className={styles.description}>
            Azur WTT offers a modern approach & tools towards trading as customer ease is our number 1 priority. You can
            now avail our resources with just a click.
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <LabeledInput
              label="Name"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <LabeledTextarea
              label="Message"
              placeholder="Type your message or query here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button className={styles.button} type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Page>
  );
};
