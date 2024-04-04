import React, { forwardRef } from "react";
import { Button as DefaultButton, ButtonProps } from "react-native-paper";

// @ts-ignore
const ThemedButton = forwardRef<DefaultButton, ButtonProps>((props, ref) => {
  return (
    <DefaultButton
      ref={ref}
      {...props}
      labelStyle={{
        fontSize: 18,
        fontFamily: "Manrope-Bold",
      }}
      contentStyle={{ paddingVertical: 8 }}
      style={[{ width: "100%", borderRadius: 100 }, props.style]}
    />
  );
});

export default ThemedButton;
