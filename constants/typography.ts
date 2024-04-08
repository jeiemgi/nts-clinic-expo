export enum TypeFamily {
  "ManropeLight" = "Manrope-Light",
  "ManropeRegular" = "Manrope-Regular",
  "ManropeSemiBold" = "Manrope-SemiBold",
  "ManropeBold" = "Manrope-Bold",
  Gobold = "Gobold",
  "GoboldItalic" = "Gobold-Italic",
}

export const themeFontConfig = {
  fontFamily: TypeFamily.ManropeRegular,
  bodyMedium: {
    fontFamily: TypeFamily.ManropeRegular,
  },
  displayLarge: {
    fontFamily: TypeFamily.GoboldItalic,
  },
  displayMedium: {
    fontSize: 34,
    fontFamily: TypeFamily.GoboldItalic,
  },
} as const;
