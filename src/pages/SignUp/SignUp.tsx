import { FC, FormEvent, useState } from "react";
import styles from "./SignUp.module.scss";
import { LabeledInput } from "src/components/LabeledInput/LabeledInput";
import { Button } from "src/components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "src/hooks/useFirebase";

export const SignUp: FC = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    twitterHandle: "",
    discordName: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { handleSignUp } = useFirebase();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) return alert("Password and Confirm Password need to be same");
    try {
      await handleSignUp(
        data.email,
        data.password,
        data.firstName,
        data.lastName,
        data.country,
        data.twitterHandle,
        data.discordName
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <div className={styles.span2}>
          <h2 className={styles.heading}>Sign Up</h2>
        </div>
        <LabeledInput
          label="First Name"
          placeholder="Enter first name..."
          required={true}
          value={data.firstName}
          onChange={(e) => setData((prevData) => ({ ...prevData, firstName: e.target.value }))}
        />
        <LabeledInput
          label="Last Name"
          placeholder="Enter last name..."
          required={true}
          value={data.lastName}
          onChange={(e) => setData((prevData) => ({ ...prevData, lastName: e.target.value }))}
        />
        <LabeledInput
          label="Email"
          placeholder="Enter email..."
          required={true}
          value={data.email}
          onChange={(e) => setData((prevData) => ({ ...prevData, email: e.target.value }))}
        />
        <LabeledInput
          label="Country"
          placeholder="Enter country..."
          required={true}
          value={data.country}
          onChange={(e) => setData((prevData) => ({ ...prevData, country: e.target.value }))}
        />
        <LabeledInput
          label="Twitter Handle"
          placeholder="Enter twitter handle..."
          required={false}
          value={data.twitterHandle}
          onChange={(e) => setData((prevData) => ({ ...prevData, twitterHandle: e.target.value }))}
        />
        <LabeledInput
          label="Discord Name"
          placeholder="Enter discord name..."
          required={false}
          value={data.discordName}
          onChange={(e) => setData((prevData) => ({ ...prevData, discordName: e.target.value }))}
        />
        <LabeledInput
          label="Password"
          placeholder="Enter password..."
          required={true}
          value={data.password}
          onChange={(e) => setData((prevData) => ({ ...prevData, password: e.target.value }))}
        />
        <LabeledInput
          label="Confirm Password"
          placeholder="Confirm password..."
          required={true}
          value={data.confirmPassword}
          onChange={(e) => setData((prevData) => ({ ...prevData, confirmPassword: e.target.value }))}
        />
        <div className={styles.span2}>
          <p className={styles.signUp}>
            Already have an account? <Link to="/login">Login</Link> now
          </p>
        </div>
        <div className={styles.span2}>
          <Button className={styles.button} type="submit" fullwidth={true}>
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};
