import { ReactPayPalScriptOptions } from "@paypal/react-paypal-js";

export const initialOptions: ReactPayPalScriptOptions = {
  "client-id": "test", //replace it with client id
  currency: "USD",
  intent: "subscription",
  vault: true,
  "data-react-paypal-script-id": "abc",
};
