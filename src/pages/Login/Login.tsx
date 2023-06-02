import { FC, FormEvent, useEffect, useState } from "react";
import styles from "./Login.module.scss";
import { LabeledInput } from "src/components/LabeledInput/LabeledInput";
import { Button } from "src/components/Button/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/firebase";
import { Link, useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.currentUser) {
      console.log(auth.currentUser);
      navigate("/");
    }
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
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
