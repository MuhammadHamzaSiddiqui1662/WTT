import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { FC } from "react";
import { Footer } from "./components/Footer/Footer";
import { SplashPage } from "./pages/Splash/Splash";

export const Body: FC = () => {
  const pathname = window.location.pathname;
  return (
    <>
      {pathname === "/" && <SplashPage />}
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
