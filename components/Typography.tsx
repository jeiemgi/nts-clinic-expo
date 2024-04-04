import { ComponentProps } from "react";
import { ColorValue, StyleSheet, TextStyle } from "react-native";
import { Text, TextProps, useTheme } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";
import { MD3TypescaleKey } from "react-native-paper/src/types";

import NamedStyles = StyleSheet.NamedStyles;

export type TypographyType = "h1" | "h2" | "h3" | "default";

interface Props {
  type?: TypographyType;
  color?: ColorValue;
  themeColor?: keyof Omit<MD3Colors, "elevation">;
  align?: TextStyle["textAlign"];
}

const typographyMaterialDict: Record<
  TypographyType,
  {
    variant: MD3TypescaleKey;
    styles: TextStyle;
  }
> = {
  h1: {
    variant: MD3TypescaleKey.displayLarge,
    styles: {
      lineHeight: 40,
    },
  },
  h2: {
    variant: MD3TypescaleKey.displayMedium,
    styles: {
      lineHeight: 40,
    },
  },
  h3: {
    variant: MD3TypescaleKey.displaySmall,
    styles: {
      lineHeight: 20,
    },
  },
  default: {
    variant: MD3TypescaleKey.bodyMedium,
    styles: {
      lineHeight: 20,
    },
  },
};
const Typography = ({
  type = "default",
  color = "#1E1E1E",
  themeColor,
  align = "left",
  style,
  ...props
}: Props & Omit<ComponentProps<typeof Text>, "variant">) => {
  const { variant, styles: defaultStyles } = typographyMaterialDict[type];
  const { colors } = useTheme();

  return (
    <Text
      variant={variant}
      style={[
        defaultStyles,
        {
          textAlign: align,
          color: themeColor ? colors[themeColor] : color,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default Typography;
