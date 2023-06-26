import React from "react";
import { useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import { Button, Card, HelperText, RadioButton, useTheme } from "react-native-paper";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "../../src/components/CustomInput";
import { DeliveryInfo, deliverySchema } from "../../src/schemas/checkout.schema";
import { useCheckoutContext } from "../../src/contexts/CheckoutContext";

const DeliveryDetails = () => {
  const router = useRouter();
  const theme = useTheme();
  const { control, handleSubmit } = useForm<DeliveryInfo>({
    resolver: zodResolver(deliverySchema),
    defaultValues: {
      delivery: "fast",
    },
  });

  const { setDelivery } = useCheckoutContext();

  const onSubmit = (data: DeliveryInfo) => {
    setDelivery(data);
    router.push("/checkout/payment");
  };

  return (
    <ScrollView contentContainerStyle={{ gap: 20 }} showsVerticalScrollIndicator={false}>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Delivery Infromation" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <CustomInput
            name="province"
            control={control}
            label="Province"
            style={{ backgroundColor: theme.colors.background }}
          />
          <CustomInput
            name="district"
            control={control}
            label="District"
            style={{ backgroundColor: theme.colors.background }}
          />
          <CustomInput
            name="munciplity"
            control={control}
            label="Munciplity"
            style={{ backgroundColor: theme.colors.background }}
          />
          <CustomInput
            name="tole"
            control={control}
            label="Tole"
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>

      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Delivery Options" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <Controller
            name="delivery"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error, invalid } }) => (
              <View>
                <HelperText type="error" visible={invalid}>
                  {error?.message}
                </HelperText>
                <RadioButton.Group value={value} onValueChange={onChange}>
                  <RadioButton.Item label="Free" value="free" />
                  <RadioButton.Item label="Fast" value="fast" />
                  <RadioButton.Item label="Same Day" value="same_day" />
                </RadioButton.Group>
              </View>
            )}
          />
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Payment Route
      </Button>
    </ScrollView>
  );
};

export default DeliveryDetails;
