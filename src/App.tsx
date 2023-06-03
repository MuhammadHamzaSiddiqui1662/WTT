import React, { useEffect } from "react";
import { PayPalScriptProvider, ReactPayPalScriptOptions } from "@paypal/react-paypal-js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Body } from "./Body";
import { initialOptions } from "./config/paypalConfig"; // Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// @ts-ignore
import * as AOS from "aos";
import "aos/dist/aos.css";
import { app } from "./firebase";
import { SignUp } from "./pages/SignUp/SignUp";
import { useRoutes } from "./hooks/useRoutes";

function App() {
  useEffect(() => {
    getAnalytics(app);
    AOS.init();
  }, []);
  const { routes } = useRoutes();

  return (
    <div className={styles.App}>
      <PayPalScriptProvider options={initialOptions as ReactPayPalScriptOptions}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              {routes.map((route) => (
                <Route key={route.url} path={route.url} Component={route.component} />
              ))}
              <Route path={"sign-up"} Component={SignUp} />
              <Route path="*" element={<h3 style={{ color: "white" }}>Not Found</h3>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
