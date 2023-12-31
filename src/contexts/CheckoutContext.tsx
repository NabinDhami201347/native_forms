import React, { createContext, useContext, useState } from "react";
import { DeliveryInfo, PaymentInfo, PersonalInfo } from "../schemas/checkout.schema";

type CheckoutContextType = {
  setPersonal: React.Dispatch<React.SetStateAction<PersonalInfo | null>>;
  setDelivery: React.Dispatch<React.SetStateAction<DeliveryInfo | null>>;
  setPayment: React.Dispatch<React.SetStateAction<PaymentInfo | null>>;
  onSubmitAll: (paymentInfo: PaymentInfo) => Promise<boolean>;
};

const CheckoutContext = createContext<CheckoutContextType>({
  setPersonal: () => {},
  setDelivery: () => {},
  setPayment: () => {},
  onSubmitAll: () => Promise.resolve(false),
});

export default function CheckoutContextProvider({ children }) {
  const [personal, setPersonal] = useState<PersonalInfo | null>(null);
  const [delivery, setDelivery] = useState<DeliveryInfo | null>(null);
  const [payment, setPayment] = useState<PaymentInfo | null>(null);

  const onSubmitAll = async (paymentInfo: PaymentInfo) => {
    setPayment(paymentInfo);
    console.log("Requesting Checkout");
    console.log(personal, "personal", delivery, "delivery", paymentInfo, "payment");

    return true;
  };

  return (
    <CheckoutContext.Provider value={{ setPersonal, setDelivery, setPayment, onSubmitAll }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckoutContext = () => useContext(CheckoutContext);
