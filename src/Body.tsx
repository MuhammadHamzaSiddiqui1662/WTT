import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { FC, useEffect } from "react";
import { Footer } from "./components/Footer/Footer";

export const Body: FC = () => {
  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => {
        console.log("Country: ", response);
      })
      .catch(() => {
        console.log("Request failed");
      });
  });
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
