import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const PersonalDetails = () => {
  return (
    <View>
      <Text>Personal details</Text>

      <Link href="/checkout/delivery">Delivery</Link>
    </View>
  );
};

export default PersonalDetails;
