import { useCallback, useEffect, useMemo } from "react";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { firebaseConfig } from "../config/firebaseConfig";
import { getAnalytics } from "firebase/analytics";

export const useFirebase = () => {
  const app = useMemo(() => initializeApp(firebaseConfig), []);
  const auth = useMemo(() => getAuth(app), [app]);
  const db = useMemo(() => getFirestore(app), [app]);
  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    getAnalytics(app);
  }, [app]);

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const { docs } = await getDocs(q);
        localStorage.setItem("user", JSON.stringify(docs[0].data()));
      } catch (error: any) {
        throw new Error(error);
      }
    },
    [auth, db]
  );

  const handleSignUp = useCallback(
    async (email: string, password: string, firstName: string, lastname: string, phone: string) => {
      try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          authProvider: "local",
          email,
          firstName,
          lastname,
          phone,
        });
      } catch (error: any) {
        throw new Error(error);
      }
    },
    [auth, db]
  );

  const handleResetPassword = useCallback(
    async (email: string) => {
      try {
        await sendPasswordResetEmail(auth, email);
      } catch (error: any) {
        throw new Error(error);
      }
    },
    [auth]
  );

  const createSubscriber = useCallback(
    async (data: any) => {
      try {
        await addDoc(collection(db, "orders"), {
          ...data,
        });
      } catch (error: any) {
        throw new Error(error);
      }
    },
    [db]
  );

  return {
    app,
    auth,
    db,
    user,
    isLoading,
    handleLogin,
    handleSignUp,
    handleResetPassword,
    createSubscriber,
  };
};
