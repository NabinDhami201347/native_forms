import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CheckoutContextProvider from "../../src/contexts/CheckoutContext";

export default function CheckoutStack() {
  return (
    <CheckoutContextProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          contentStyle: { padding: 15, backgroundColor: "#F0EBFB", flex: 1 },
          headerStyle: { backgroundColor: "#673AB8" },
          headerTitleStyle: { color: "white" },
          headerTintColor: "#F0EBFB",
        }}
      >
        <Stack.Screen name="personal" options={{ title: "Personal Infromation" }} />
        <Stack.Screen name="delivery" options={{ title: "Delivery Infromation" }} />
        <Stack.Screen name="payment" options={{ title: "Payment Infromation" }} />
      </Stack>
    </CheckoutContextProvider>
  );
}
