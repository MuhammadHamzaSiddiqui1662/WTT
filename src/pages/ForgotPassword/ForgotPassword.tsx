import { FC, FormEvent, useState } from "react";
import styles from "./ForgotPassword.module.scss";
import { LabeledInput } from "src/components/LabeledInput/LabeledInput";
import { Button } from "src/components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "src/hooks/useFirebase";

export const ForgotPassword: FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { isLoading, handleResetPassword } = useFirebase();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await handleResetPassword(email);
      alert("An email has been sent to your email address, rest your password from there and then login");
      navigate("/login");
    } catch (error) {
      alert("No user exist with this email");
      console.log(error);
    }
  };

  return isLoading ? null : (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Forgot Password?</h2>
        <p className={styles.text}>Enter your email address to recive the email for changing password</p>
        <LabeledInput
          label="Email"
          placeholder="Enter your email..."
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className={styles.button} type="submit" fullwidth={true}>
          Send
        </Button>
      </form>
    </div>
  );
};
