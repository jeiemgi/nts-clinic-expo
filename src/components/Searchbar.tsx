import React from "react";
import { Searchbar as RNPSearchbar, SearchbarProps } from "react-native-paper";

import { colors } from "@/theme/colors";

const Searchbar = ({ style, ...props }: SearchbarProps) => {
  return (
    <RNPSearchbar
      {...props}
      style={[
        {
          borderRadius: 40,
          backgroundColor: colors.screenBackgroundLight,
        },
        style,
      ]}
    />
  );
};

export default Searchbar;
