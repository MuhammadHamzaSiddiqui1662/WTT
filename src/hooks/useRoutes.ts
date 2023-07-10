import { useEffect, useMemo } from "react";
import { Contact } from "src/pages/Contact/Contact";
import { Home } from "src/pages/Home/Home";
import { Insights } from "src/pages/Insights/Insights";
import { MeAndMyEdge } from "src/pages/MeAndMyEdge/MeAndMyEdge";
// import { Notes } from "src/pages/Notes/Notes";
import { Login } from "src/pages/Login/Login";
import { Subscribe } from "src/pages/Subscribe/Subscribe";
import { Tools } from "src/pages/Tools/Tools";
import { Route } from "src/types";
import { SignUp } from "src/pages/SignUp/SignUp";
import { useFirebase } from "./useFirebase";
import { useAppDispatch } from "src/store";
import { setSplashHide } from "src/state/Status/StatusSlice";
import { Discord } from "src/pages/Discord/Discord";

export const useRoutes = () => {
  const { user } = useFirebase();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (window.location.pathname !== "/") dispatch(setSplashHide(true));
  }, [dispatch]);
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
        visible: true,
      },
      {
        name: "Insights",
        url: "/insights",
        component: Insights,
        // visible: user !== null,
        visible: false,
      },
      {
        name: "Discord",
        url: "/discord",
        component: Discord,
        visible: user !== null,
      },
      {
        name: "Tools",
        url: "/tools",
        component: Tools,
        visible: user !== null,
      },
      // {
      //   name: "Notes",
      //   url: "/notes",
      //   component: Notes,
      //   visible: user !== null,
      // },
      {
        name: "Contact Us",
        url: "/contact-us",
        component: Contact,
        visible: true,
      },
      {
        name: "Subscribe",
        url: "/subscribe/:planId",
        component: Subscribe,
        visible: false,
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
    ],
    [user]
  );
  return { routes };
};
