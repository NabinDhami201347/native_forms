import React from "react";
import { View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Button, Card, TextInput, RadioButton, useTheme } from "react-native-paper";

const DeliveryDetails = () => {
  const router = useRouter();
  const theme = useTheme();

  const [shipping, setShipping] = React.useState("free");

  return (
    <ScrollView contentContainerStyle={{ gap: 20 }} showsVerticalScrollIndicator={false}>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Delivery Infromation" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput label="Province" style={{ backgroundColor: theme.colors.background }} />
          <TextInput label="District" style={{ backgroundColor: theme.colors.background }} />
          <TextInput label="Munciplity" style={{ backgroundColor: theme.colors.background }} />
          <TextInput label="Tole" style={{ backgroundColor: theme.colors.background }} />
        </Card.Content>
      </Card>

      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Delivery Options" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <RadioButton.Group value={shipping} onValueChange={(value) => setShipping(value)}>
            <RadioButton.Item label="Free" value="free" />
            <RadioButton.Item label="Fast" value="fast" />
            <RadioButton.Item label="Same Day" value="same_day" />
          </RadioButton.Group>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={() => router.push("/checkout/payment")}>
        Payment Route
      </Button>
    </ScrollView>
  );
};

export default DeliveryDetails;
