import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Button, Card, Checkbox, useTheme } from "react-native-paper";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { PaymentInfo, paymentSchema } from "../../src/schemas/checkout.schema";
import CustomInput from "../../src/components/CustomInput";

const PaymentDetails = () => {
  const router = useRouter();
  const theme = useTheme();

  const { control, handleSubmit } = useForm<PaymentInfo>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = (data: PaymentInfo) => {
    console.log(data);
    router.push("/");
  };

  return (
    <ScrollView contentContainerStyle={{ gap: 20 }} showsVerticalScrollIndicator={false}>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Payment Infromation" titleVariant="titleLarge" />

        <Card.Content style={{ gap: 10 }}>
          <CustomInput
            control={control}
            name="number"
            label="Card number"
            style={{ backgroundColor: theme.colors.background }}
          />

          <View style={{ flexDirection: "row", gap: 10 }}>
            <CustomInput
              control={control}
              name="expirationDate"
              label="Expiration date"
              placeholder="dd/mm/yyyy"
              style={{ backgroundColor: theme.colors.background, flex: 3 }}
            />
            <CustomInput
              control={control}
              name="securityCode"
              label="Security code"
              style={{ backgroundColor: theme.colors.background, flex: 2 }}
            />
          </View>

          <Controller
            control={control}
            name="saveInfo"
            render={({ field: { value, onChange } }) => (
              <Checkbox.Item
                label="Save payment information"
                onPress={() => onChange(!value)}
                status={value ? "checked" : "unchecked"}
              />
            )}
          />
        </Card.Content>
      </Card>

      {/* TODO: Why its navigating goBack() instead of / */}
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Payment Route
      </Button>
    </ScrollView>
  );
};

export default PaymentDetails;
