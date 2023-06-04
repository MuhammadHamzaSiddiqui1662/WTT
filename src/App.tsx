import React, { useEffect } from "react";
// @ts-ignore
import * as AOS from "aos";
import "aos/dist/aos.css";
import { PayPalScriptProvider, ReactPayPalScriptOptions } from "@paypal/react-paypal-js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Body } from "./Body";
import { initialOptions } from "./config/paypalConfig";
import { useRoutes } from "./hooks/useRoutes";
import { useFirebase } from "./hooks/useFirebase";
import { Loader } from "./components/Loader/Loader";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const { routes } = useRoutes();
  useFirebase();

  return (
    <div className={styles.App}>
      <Loader />
      <PayPalScriptProvider options={initialOptions as ReactPayPalScriptOptions}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              {routes.map(
                (route) => route.visible && <Route key={route.url} path={route.url} Component={route.component} />
              )}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
