import React, { forwardRef } from "react";
import { Button as DefaultButton, ButtonProps } from "react-native-paper";

import Colors from "@/constants/colors";
import { TypeFamily } from "@/constants/typography";

// @ts-ignore
const ThemedButton = forwardRef<DefaultButton, ButtonProps>(
  ({ mode, ...props }, ref) => {
    const labelColorStyle = mode === "outlined" ? { color: Colors.black } : {};

    return (
      <DefaultButton
        ref={ref}
        mode={mode}
        {...props}
        theme={{
          colors: {
            outline: Colors.black,
          },
        }}
        style={{
          borderRadius: 50,
          borderWidth: 2,
        }}
        contentStyle={{
          paddingVertical: 8,
        }}
        labelStyle={{
          fontSize: 18,
          fontFamily: TypeFamily.ManropeBold,
          ...labelColorStyle,
        }}
      />
    );
  },
);

export default ThemedButton;
