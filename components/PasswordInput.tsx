import React from "react";
import { TextInput, TextInputProps } from "react-native-paper";

export const PasswordInput = (props: TextInputProps): React.ReactElement => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <TextInput
      mode="outlined"
      right={
        <TextInput.Icon
          onPress={toggleSecureEntry}
          icon={secureTextEntry ? "eye-off" : "eye"}
        />
      }
      secureTextEntry={secureTextEntry}
      {...props}
    />
  );
};

export default PasswordInput;
