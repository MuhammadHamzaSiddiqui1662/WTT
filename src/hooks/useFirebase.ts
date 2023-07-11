import { useCallback, useEffect, useMemo } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { firebaseConfig } from "../config/firebaseConfig";
import { getAnalytics } from "firebase/analytics";
import { useAppDispatch, useAppSelector } from "src/store";
import { setLoading } from "src/state/Status/StatusSlice";

export const useFirebase = () => {
  const app = useMemo(() => initializeApp(firebaseConfig), []);
  const auth = useMemo(() => getAuth(app), [app]);
  const db = useMemo(() => getFirestore(app), [app]);
  const [user, authLoading] = useAuthState(auth);
  const [createUserWithEmailAndPassword, , signUpLoading, signUpError] = useCreateUserWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, forgotPasswordLoading, forgotPasswordError] = useSendPasswordResetEmail(auth);
  const [signInWithEmailAndPassword, , signInLoading, signInError] = useSignInWithEmailAndPassword(auth);
  const { loading } = useAppSelector((state) => state.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAnalytics(app);
  }, [app]);

  useEffect(() => {
    dispatch(setLoading(authLoading || signInLoading || signUpLoading || forgotPasswordLoading));
  }, [authLoading, signInLoading, signUpLoading, forgotPasswordLoading, dispatch]);

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      dispatch(setLoading(true));
      try {
        const user = await signInWithEmailAndPassword(email, password);
        const q = query(collection(db, "users"), where("uid", "==", user?.user.uid));
        const { docs } = await getDocs(q);
        localStorage.setItem("user", JSON.stringify(docs[0].data()));
      } catch (error: any) {
        throw new Error(error);
      } finally {
        dispatch(setLoading(false));
      }
    },
    [db, signInWithEmailAndPassword, dispatch]
  );

  const handleSignUp = useCallback(
    async (
      email: string,
      password: string,
      firstName: string,
      lastname: string,
      phone: string,
      twitterHandle: string,
      discordName: string
    ) => {
      dispatch(setLoading(true));
      try {
        const user = await createUserWithEmailAndPassword(email, password);
        await addDoc(collection(db, "users"), {
          uid: user?.user.uid,
          authProvider: "local",
          email,
          firstName,
          lastname,
          phone,
          twitterHandle,
          discordName,
        });
      } catch (error: any) {
        throw new Error(error);
      } finally {
        dispatch(setLoading(false));
      }
    },
    [db, createUserWithEmailAndPassword, dispatch]
  );

  const handleResetPassword = useCallback(
    async (email: string) => {
      dispatch(setLoading(true));
      try {
        await sendPasswordResetEmail(email);
      } catch (error: any) {
        throw new Error(error);
      } finally {
        dispatch(setLoading(false));
      }
    },
    [sendPasswordResetEmail, dispatch]
  );

  const createSubscriber = useCallback(
    async (data: any) => {
      dispatch(setLoading(true));
      try {
        await addDoc(collection(db, "orders"), {
          ...data,
        });
      } catch (error: any) {
        throw new Error(error);
      } finally {
        dispatch(setLoading(false));
      }
    },
    [db, dispatch]
  );

  const getErrorMsg = useCallback((error: string) => {
    let startIndex = `${error}`.indexOf("(auth/") + 6;
    let endIndex = `${error}`.indexOf(").");
    let msg = `${error}`.substring(startIndex, endIndex);
    return msg;
  }, []);

  return {
    app,
    auth,
    db,
    user,
    handleLogin,
    handleSignUp,
    handleResetPassword,
    createSubscriber,
    getErrorMsg,
    isLoading: loading,
    error: signInError || signUpError || forgotPasswordError,
  };
};
