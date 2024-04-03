import { Button as EVAButton, ButtonProps } from "@ui-kitten/components";
import React from "react";

const Button = (props: ButtonProps) => {
  return (
    <EVAButton
      {...props}
      style={[{ width: "100%", borderRadius: 100 }, props.style]}
    />
  );
};

export default Button;
