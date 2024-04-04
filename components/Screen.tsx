import { ScrollView, ScrollViewProps, View } from "react-native";

import { BoxProps, BoxUnitMultiplier } from "@/components/Box";

export const Screen = ({
  py = 0,
  px = 4,
  style,
  children,
  ...props
}: ScrollViewProps & BoxProps) => {
  const computedStyles = [
    {
      paddingVertical: py * BoxUnitMultiplier,
      paddingHorizontal: px * BoxUnitMultiplier,
    },
    style,
  ];

  return (
    <ScrollView
      contentContainerStyle={computedStyles}
      contentInsetAdjustmentBehavior="automatic"
      {...props}
    >
      {children}
    </ScrollView>
  );
};
