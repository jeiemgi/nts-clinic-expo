import React from "react";
import { Pressable } from "react-native";
import { TextInput, Icon, TextInputProps } from "react-native-paper";

export const PasswordInput = (props: TextInputProps): React.ReactElement => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <TextInput
      right={
        <Pressable onPress={toggleSecureEntry}>
          <Icon size={24} source={secureTextEntry ? "eye-off" : "eye"} />
        </Pressable>
      }
      secureTextEntry={secureTextEntry}
      {...props}
    />
  );
};

export default PasswordInput;
