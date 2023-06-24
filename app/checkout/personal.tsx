import React from "react";
import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
import { Button, Card, TextInput, useTheme } from "react-native-paper";

const PersonalDetails = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <ScrollView contentContainerStyle={{ gap: 20 }} showsVerticalScrollIndicator={false}>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Personal Information" titleVariant="titleLarge"></Card.Title>
        <Card.Content style={{ gap: 10 }}>
          <TextInput placeholder="Name" label="Name" style={{ backgroundColor: theme.colors.background }} />
          <TextInput placeholder="john@gmail.com" label="Email" style={{ backgroundColor: theme.colors.background }} />
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={() => router.push("/checkout/delivery")}>
        Delivery Route
      </Button>
    </ScrollView>
  );
};

export default PersonalDetails;
