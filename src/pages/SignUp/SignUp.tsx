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
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { handleSignUp } = useFirebase();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) return alert("Password and Confirm Password need to be same");
    try {
      await handleSignUp(data.email, data.password, data.firstName, data.lastName, data.phone);
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
          label="Phone"
          placeholder="Enter phone..."
          required={true}
          value={data.phone}
          onChange={(e) => setData((prevData) => ({ ...prevData, phone: e.target.value }))}
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
