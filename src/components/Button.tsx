import React, { forwardRef } from "react";
import { Button as DefaultButton, ButtonProps } from "react-native-paper";

import { colors } from "@/theme/colors";
import { TypeFamily } from "@/theme/typography";

// @ts-ignore
const ThemedButton = forwardRef<DefaultButton, ButtonProps>(
  ({ mode, ...props }, ref) => {
    const labelColorStyle = mode === "outlined" ? { color: colors.black } : {};

    return (
      <DefaultButton
        ref={ref}
        mode={mode}
        {...props}
        theme={{
          colors: {
            outline: colors.black,
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
