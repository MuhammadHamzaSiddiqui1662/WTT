import { FC, useState } from "react";
import styles from "./SignIn.module.scss";
import { LabeledInput } from "src/components/LabeledInput/LabeledInput";
import { Button } from "src/components/Button/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/firebase";

export const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Sign In</h2>
        <LabeledInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <LabeledInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button fullwidth={true} onClick={() => handleSignIn(email, password)}>
          Sign In
        </Button>
      </div>
    </div>
  );
};
