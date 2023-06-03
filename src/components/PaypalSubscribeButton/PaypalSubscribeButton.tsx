import { PayPalButtons } from "@paypal/react-paypal-js";
import { FC } from "react";

interface IProps {
  disabled: boolean;
  planId: string;
  handleApprove: (data: any, action: any) => Promise<void>;
}

export const PaypalSubscribeButton: FC<IProps> = ({ disabled, planId, handleApprove }) => {
  return (
    <PayPalButtons
      disabled={disabled}
      createSubscription={(data, actions) => {
        return actions.subscription
          .create({
            plan_id: planId,
          })
          .then((orderId) => {
            // Your code here after create the order
            return orderId;
          });
      }}
      onApprove={handleApprove}
      onError={(err) => console.log("error", err)}
      style={{
        label: "subscribe",
      }}
    />
  );
};
