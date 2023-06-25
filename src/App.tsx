import { useEffect } from "react";
// @ts-ignore
import * as AOS from "aos";
import "aos/dist/aos.css";
import { PayPalScriptProvider, ReactPayPalScriptOptions } from "@paypal/react-paypal-js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Body } from "./Body";
import { initialOptions } from "./config/paypalConfig";
import { useRoutes } from "./hooks/useRoutes";
import { InitialLoader } from "./components/InitialLoader/InitialLoader";
import { NotFound } from "./pages/NotFound/NotFound";
import { Loader } from "./components/Loader/Loader";
import { useAppSelector } from "./store";
import { useFirebase } from "./hooks/useFirebase";
import { NotSignedIn } from "./components/NotSignedIn/NotSignedIn";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const { routes } = useRoutes();
  const { loading } = useAppSelector((state) => state.status);
  const { user } = useFirebase();

  return (
    <div className={styles.App}>
      {loading && <Loader />}
      <InitialLoader />
      <PayPalScriptProvider options={initialOptions as ReactPayPalScriptOptions}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              {routes.map((route) => (
                <Route
                  key={route.url}
                  path={route.url}
                  Component={route.visible || user ? route.component : NotSignedIn}
                />
              ))}
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
