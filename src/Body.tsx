import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { FC } from "react";
import { Footer } from "./components/Footer/Footer";

export const Body: FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
