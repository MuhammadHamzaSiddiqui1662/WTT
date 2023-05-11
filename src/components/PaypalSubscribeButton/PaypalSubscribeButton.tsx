import { PayPalButtons } from "@paypal/react-paypal-js";

export const PaypalSubscribeButton = ({ disabled }: { disabled: boolean }) => {
  const handleApprove = async (data: any, action: any) => {
    console.log("running handleApprove...");
    console.log("action", action);
    console.log("///////////////////////////////////////////////////////");
    console.log("data", data);
  };
  return (
    <PayPalButtons
      disabled={disabled}
      createSubscription={(data, actions) => {
        return actions.subscription
          .create({
            plan_id: "P-3RX065706M3469222L5IFM4I",
          })
          .then((orderId) => {
            // Your code here after create the order
            console.log("order Id: ", orderId);
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
