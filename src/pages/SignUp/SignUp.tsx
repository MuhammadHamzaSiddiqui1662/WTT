import { FC, FormEvent, useState } from "react";
import styles from "./SignUp.module.scss";
import { LabeledInput } from "src/components/LabeledInput/LabeledInput";
import { Button } from "src/components/Button/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/firebase";
import { Link } from "react-router-dom";

export const SignUp: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async (email: string, password: string) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSignUp(email, password);
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
