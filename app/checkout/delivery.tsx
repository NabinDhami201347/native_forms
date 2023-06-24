import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const DeliveryDetails = () => {
  return (
    <View>
      <Text>Delivery dtails</Text>

      <Link href="/checkout/payment">Payment</Link>
    </View>
  );
};

export default DeliveryDetails;
