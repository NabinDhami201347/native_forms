import React from "react";
import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";

import { Button, Card, useTheme } from "react-native-paper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { personalSchema, PersonalInfo } from "../../src/schemas/checkout.schema";
import CustomInput from "../../src/components/CustomInput";
import { useCheckoutContext } from "../../src/contexts/CheckoutContext";

const PersonalDetails = () => {
  const router = useRouter();
  const theme = useTheme();
  const { control, handleSubmit } = useForm<PersonalInfo>({
    resolver: zodResolver(personalSchema),
  });

  const { setPersonal } = useCheckoutContext();

  const onSubmit = (data: PersonalInfo) => {
    setPersonal(data);
    router.push("/checkout/delivery");
  };

  return (
    <ScrollView contentContainerStyle={{ gap: 20 }} showsVerticalScrollIndicator={false}>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Personal Information" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <CustomInput control={control} name="name" label="Full Name" />
          <CustomInput control={control} name="email" label="Email" />
        </Card.Content>
      </Card>

      <Button onPress={handleSubmit(onSubmit)} mode="contained">
        Delivery Route
      </Button>
    </ScrollView>
  );
};

export default PersonalDetails;
