import { useMemo } from "react";
import { Contact } from "src/pages/Contact/Contact";
import { Home } from "src/pages/Home/Home";
import { Insights } from "src/pages/Insights/Insights";
import { MeAndMyEdge } from "src/pages/MeAndMyEdge/MeAndMyEdge";
import { Notes } from "src/pages/Notes/Notes";
import { Login } from "src/pages/Login/Login";
import { Subscribe } from "src/pages/Subscribe/Subscribe";
import { Tools } from "src/pages/Tools/Tools";
import { Route } from "src/types";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "src/firebase";
import { ForgotPassword } from "src/pages/ForgotPassword/ForgotPassword";
import { SignUp } from "src/pages/SignUp/SignUp";

export const useRoutes = () => {
  const [user] = useAuthState(auth);
  const routes: Route[] = useMemo(
    () => [
      {
        name: "Home",
        url: "/",
        component: Home,
        visible: true,
      },
      {
        name: "Me and My edge",
        url: "/me-and-my-edge",
        component: MeAndMyEdge,
        visible: user !== null,
      },
      {
        name: "Insights",
        url: "/insights",
        component: Insights,
        visible: user !== null,
      },
      {
        name: "Tools",
        url: "/tools",
        component: Tools,
        visible: user !== null,
      },
      {
        name: "Notes",
        url: "/notes",
        component: Notes,
        visible: user !== null,
      },
      {
        name: "Contact Us",
        url: "/contact-us",
        component: Contact,
        visible: true,
      },
      {
        name: "Subscribe",
        url: "/subscribe",
        component: Subscribe,
        visible: user !== null,
      },
      {
        name: "Log In",
        url: "/login",
        component: Login,
        visible: !user,
      },
      {
        name: "Sign Up",
        url: "/sign-up",
        component: SignUp,
        visible: !user,
      },
      {
        name: "Forgot Password",
        url: "/forgot-password",
        component: ForgotPassword,
        visible: false,
      },
    ],
    [user]
  );
  return { routes };
};
