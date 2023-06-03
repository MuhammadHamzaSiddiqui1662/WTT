import { FC, FormEvent, useEffect, useState } from "react";
import styles from "./Login.module.scss";
import { LabeledInput } from "src/components/LabeledInput/LabeledInput";
import { Button } from "src/components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "src/hooks/useFirebase";

export const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, isLoading, handleLogin } = useFirebase();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await handleLogin(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return isLoading ? null : (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Sign In</h2>
        <LabeledInput
          label="Email"
          placeholder="Enter your email..."
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabeledInput
          label="Password"
          type="password"
          placeholder="Enter yor password..."
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className={styles.text}>
          Forgot Password? <Link to="/forgot-password">Reset</Link> now
        </p>
        <Button className={styles.button} type="submit" fullwidth={true}>
          Login
        </Button>
        <p className={styles.text}>
          Don't have an account? <Link to="/sign-up">Sign Up</Link> now
        </p>
      </form>
    </div>
  );
};
