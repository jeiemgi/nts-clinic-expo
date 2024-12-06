import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

import { colors } from "@/theme/colors";

function SvgComponent(props: SvgProps) {
  return (
    <Svg viewBox="0 0 375 121" fill="none" {...props}>
      <Path
        fill={colors.black}
        fillOpacity={0.05}
        d="M375 69.307C320.18 102.132 256.044 121 187.5 121S54.82 102.132 0 69.307V0h375v69.307z"
      />
    </Svg>
  );
}

export default SvgComponent;
