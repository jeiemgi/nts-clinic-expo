import React from "react";
import { Button as DefaultButton, ButtonProps } from "react-native-paper";

const Button = (props: ButtonProps) => {
  return (
    <DefaultButton
      {...props}
      labelStyle={{
        fontSize: 18,
        fontFamily: "Manrope-Bold",
      }}
      contentStyle={{ paddingVertical: 8 }}
      style={[{ width: "100%", borderRadius: 100 }, props.style]}
    />
  );
};

export default Button;
