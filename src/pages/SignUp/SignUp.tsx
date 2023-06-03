import { FC, FormEvent, useEffect, useState } from "react";
import styles from "./SignUp.module.scss";
import { LabeledInput } from "src/components/LabeledInput/LabeledInput";
import { Button } from "src/components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "src/hooks/useFirebase";

export const SignUp: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { user, handleSignUp } = useFirebase();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await handleSignUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Sign Up</h2>
        <LabeledInput
          label="Email"
          placeholder="Enter your email..."
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabeledInput
          label="Password"
          placeholder="Enter yor password..."
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LabeledInput
          label="Confirm Password"
          placeholder="Re-Enter yor password..."
          required={true}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p className={styles.signUp}>
          Already have an account? <Link to="/login">Login</Link> now
        </p>
        <Button className={styles.button} type="submit" fullwidth={true}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};
