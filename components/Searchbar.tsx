import React from "react";
import { Searchbar as RNPSearchbar, SearchbarProps } from "react-native-paper";

import Colors from "@/constants/colors";

const Searchbar = ({ style, ...props }: SearchbarProps) => {
  return (
    <RNPSearchbar
      {...props}
      style={[
        {
          borderRadius: 40,
          backgroundColor: Colors.screenBackgroundLight,
        },
        style,
      ]}
    />
  );
};

export default Searchbar;
