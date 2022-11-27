import React from "react";
// import { data } from "autoprefixer";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(
  "pk_test_51M74HIDU4LeQXZMFlmQH64NleQQRd9RZViM7IE2EdkmzkHcPPDxoR5zx2jhRN8vXfBwkpnRtucpFqWnbBWy9OwTG00e3cEIK5N"
);


const Payment = () => {
  const orders = useLoaderData();
  console.log(orders);
  return (
    <div className="w-96 my-12">
      <Elements stripe={stripePromise}>
        <CheckOutForm orders={orders} />
      </Elements>
    </div>
  );
};


export default Payment;