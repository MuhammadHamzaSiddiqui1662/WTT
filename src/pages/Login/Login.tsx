import { FC, FormEvent, useState } from "react";
import styles from "./Login.module.scss";
import { LabeledInput } from "src/components/LabeledInput/LabeledInput";
import { Button } from "src/components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "src/hooks/useFirebase";

export const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { isLoading, handleLogin, getErrorMsg } = useFirebase();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      return setError((prev) => ({
        ...prev,
        email: "Provide an email",
      }));
    }
    try {
      await handleLogin(email, password);
      navigate("/me-and-my-edge");
    } catch (error: any) {
      let msg = getErrorMsg(error);
      console.log(msg);
      if (msg.includes("password")) {
        setError((prev) => ({
          ...prev,
          password: msg,
        }));
      } else {
        setError((prev) => ({
          ...prev,
          email: msg,
        }));
      }
    }
  };

  return isLoading ? null : (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Login</h2>
        <LabeledInput
          label="Email"
          placeholder="Enter your email..."
          required={true}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError((prev) => ({
              ...prev,
              email: "",
            }));
          }}
          error={error.email}
        />
        <LabeledInput
          label="Password"
          type="password"
          placeholder="Enter yor password..."
          required={true}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError((prev) => ({
              ...prev,
              password: "",
            }));
          }}
          error={error.password}
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
