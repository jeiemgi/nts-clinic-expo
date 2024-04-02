import { Icon, IconProps, Input, InputProps } from "@ui-kitten/components";
import React from "react";
import { Pressable } from "react-native";

export const PasswordInput = (props: InputProps): React.ReactElement => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (iconProps: IconProps): React.ReactElement => (
    <Pressable onPress={toggleSecureEntry}>
      <Icon {...iconProps} name={secureTextEntry ? "eye-off" : "eye"} />
    </Pressable>
  );

  return (
    <Input
      accessoryRight={renderIcon}
      secureTextEntry={secureTextEntry}
      {...props}
    />
  );
};

export default PasswordInput;
