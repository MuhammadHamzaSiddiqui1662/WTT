import { ReactNode } from "react";
import { Contact } from "src/pages/Contact/Contact";
import { Home } from "src/pages/Home/Home";
import { Insights } from "src/pages/Insights/Insights";
import { MeAndMyEdge } from "src/pages/MeAndMyEdge/MeAndMyEdge";
import { Notes } from "src/pages/Notes/Notes";
import { Subscribe } from "src/pages/Subscribe/Subscribe";
import { Tools } from "src/pages/Tools/Tools";
import { Route } from "src/types";

export const ROUTES: Route[] = [
  {
    name: "Home",
    url: "/",
    component: Home,
  },
  {
    name: "Me and My edge",
    url: "/me-and-my-edge",
    component: MeAndMyEdge,
  },
  {
    name: "Insights",
    url: "/insights",
    component: Insights,
  },
  {
    name: "Tools",
    url: "/tools",
    component: Tools,
  },
  {
    name: "Notes",
    url: "/notes",
    component: Notes,
  },
  {
    name: "Contact Us",
    url: "/contact-us",
    component: Contact,
  },
  {
    name: "Subscribe",
    url: "/subscribe",
    component: Subscribe,
  },
];
