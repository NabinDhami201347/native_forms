import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Button, Card, TextInput, Checkbox, useTheme } from "react-native-paper";

const PaymentDetails = () => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <ScrollView contentContainerStyle={{ gap: 20 }} showsVerticalScrollIndicator={false}>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Payment Infromation" titleVariant="titleLarge" />

        <Card.Content style={{ gap: 10 }}>
          <TextInput label="Card number" style={{ backgroundColor: theme.colors.background }} />

          <View style={{ flexDirection: "row", gap: 10 }}>
            <TextInput
              label="Expiration date"
              placeholder="dd/mm/yyyy"
              style={{ backgroundColor: theme.colors.background, flex: 3 }}
            />
            <TextInput label="Security code" style={{ backgroundColor: theme.colors.background, flex: 2 }} />
          </View>
          <Checkbox.Item label="Save payment information" status="unchecked" />
        </Card.Content>
      </Card>

      {/* TODO: Why its navigating goBack() instead of / */}
      <Button
        mode="contained"
        onPress={() => {
          router.push("/");
        }}
      >
        Payment Route
      </Button>
    </ScrollView>
  );
};

export default PaymentDetails;
