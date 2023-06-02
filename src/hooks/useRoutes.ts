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
import { auth } from "src/firebase";

export const useRoutes = () => {
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
        visible: auth.currentUser !== null,
      },
      {
        name: "Insights",
        url: "/insights",
        component: Insights,
        visible: auth.currentUser !== null,
      },
      {
        name: "Tools",
        url: "/tools",
        component: Tools,
        visible: auth.currentUser !== null,
      },
      {
        name: "Notes",
        url: "/notes",
        component: Notes,
        visible: auth.currentUser !== null,
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
        visible: auth.currentUser !== null,
      },
      {
        name: "Log In",
        url: "/login",
        component: Login,
        visible: !auth.currentUser,
      },
    ],
    [auth]
  );
  return { routes };
};
