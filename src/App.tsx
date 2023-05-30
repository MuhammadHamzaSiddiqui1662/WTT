import React, { useEffect } from "react";
import { PayPalScriptProvider, ReactPayPalScriptOptions } from "@paypal/react-paypal-js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Body } from "./Body";
import { ROUTES } from "./config/routesConfig";
import { initialOptions } from "./config/paypalConfig"; // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./config/firebaseConfig";
import { getAuth } from "firebase/auth";
// @ts-ignore
import * as AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    AOS.init();
  }, []);

  return (
    <div className={styles.App}>
      <PayPalScriptProvider options={initialOptions as ReactPayPalScriptOptions}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              {ROUTES.map((route) => (
                <Route key={route.url} path={route.url} Component={route.component} />
              ))}
              <Route path="*" element={<h3 style={{ color: "white" }}>Not Found</h3>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
