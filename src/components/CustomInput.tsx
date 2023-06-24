import React from "react";
import { View } from "react-native";
import { Control, Controller } from "react-hook-form";
import { HelperText, TextInput, useTheme } from "react-native-paper";

type CustomInputProps = {
  control: Control;
  name: string;
} & React.ComponentProps<typeof TextInput>;

const CustomInput: React.FC<CustomInputProps> = ({ control, name, ...textInputProps }) => {
  const theme = useTheme();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error, invalid } }) => (
        <View>
          <TextInput
            {...textInputProps}
            style={{ backgroundColor: theme.colors.background }}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={invalid}
          />
          <HelperText type="error" visible={invalid}>
            {error?.message}
          </HelperText>
        </View>
      )}
    />
  );
};

export default CustomInput;
