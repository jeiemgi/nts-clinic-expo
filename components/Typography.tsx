import { ComponentProps } from "react";
import { ColorValue, StyleSheet, TextStyle } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";
import { MD3TypescaleKey } from "react-native-paper/src/types";

import Colors from "@/constants/colors";
import { TypeFamily } from "@/constants/typography";

type TypographyStylesDict = Record<
  string,
  {
    variant: MD3TypescaleKey;
    styles: TextStyle;
    fonts: {
      regular: TypeFamily;
      semiBold: TypeFamily;
      bold: TypeFamily;
    };
  }
>;

const typographyMaterialDict: TypographyStylesDict = {
  h1: {
    variant: MD3TypescaleKey.displayLarge,
    styles: {
      fontSize: 34,
      lineHeight: 40,
    },
    fonts: {
      regular: TypeFamily.GoboldItalic,
      semiBold: TypeFamily.GoboldItalic,
      bold: TypeFamily.GoboldItalic,
    },
  },
  h2: {
    variant: MD3TypescaleKey.displayMedium,
    styles: {
      fontSize: 34,
      lineHeight: 40,
    },
    fonts: {
      regular: TypeFamily.GoboldItalic,
      semiBold: TypeFamily.GoboldItalic,
      bold: TypeFamily.GoboldItalic,
    },
  },
  h3: {
    variant: MD3TypescaleKey.displaySmall,
    styles: {
      fontSize: 20,
      lineHeight: 24,
    },
    fonts: {
      regular: TypeFamily.ManropeRegular,
      semiBold: TypeFamily.ManropeSemiBold,
      bold: TypeFamily.ManropeBold,
    },
  },
  h4: {
    variant: MD3TypescaleKey.displaySmall,
    styles: {
      fontSize: 17,
      lineHeight: 20,
    },
    fonts: {
      regular: TypeFamily.ManropeRegular,
      semiBold: TypeFamily.ManropeSemiBold,
      bold: TypeFamily.ManropeBold,
    },
  },
  overline: {
    variant: MD3TypescaleKey.labelSmall,
    styles: {
      fontSize: 10,
      lineHeight: 12,
      textTransform: "uppercase",
    },
    fonts: {
      regular: TypeFamily.ManropeRegular,
      semiBold: TypeFamily.ManropeSemiBold,
      bold: TypeFamily.ManropeBold,
    },
  },
  label: {
    variant: MD3TypescaleKey.labelSmall,
    styles: {
      fontSize: 10,
      lineHeight: 12,
    },
    fonts: {
      regular: TypeFamily.ManropeRegular,
      semiBold: TypeFamily.ManropeSemiBold,
      bold: TypeFamily.ManropeBold,
    },
  },
  caption: {
    variant: MD3TypescaleKey.labelSmall,
    styles: {
      fontSize: 11,
      lineHeight: 12,
    },
    fonts: {
      regular: TypeFamily.ManropeRegular,
      semiBold: TypeFamily.ManropeSemiBold,
      bold: TypeFamily.ManropeBold,
    },
  },
  default: {
    variant: MD3TypescaleKey.bodyMedium,
    styles: {
      lineHeight: 20,
    },
    fonts: {
      regular: TypeFamily.ManropeRegular,
      semiBold: TypeFamily.ManropeSemiBold,
      bold: TypeFamily.ManropeBold,
    },
  },
};

interface Props {
  bold?: boolean;
  semiBold?: boolean;
  type?: string;
  color?: ColorValue;
  themeColor?: keyof Omit<MD3Colors, "elevation">;
  align?: TextStyle["textAlign"];
}

const Typography = ({
  bold = false,
  semiBold = false,
  type = "default",
  color = Colors.black,
  themeColor,
  align = "left",
  style,
  ...props
}: Props & Omit<ComponentProps<typeof Text>, "variant">) => {
  const {
    variant,
    styles: defaultStyles,
    fonts,
  } = typographyMaterialDict[type];

  const { colors } = useTheme();

  const styles = StyleSheet.flatten([
    defaultStyles,
    {
      textAlign: align,
      color: themeColor ? colors[themeColor] : color,
      fontFamily: bold ? fonts.bold : semiBold ? fonts.semiBold : fonts.regular,
    },
    style,
  ]);

  return <Text variant={variant} style={styles} {...props} />;
};

export default Typography;
