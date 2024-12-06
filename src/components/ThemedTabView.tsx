import React from "react";
import {
  NavigationState,
  Route,
  SceneRendererProps,
  TabBar,
} from "react-native-tab-view";

import Typography from "@/components/Typography";
import { colors } from "@/theme/colors";

const ThemedTabView = (
  props: SceneRendererProps & {
    navigationState: NavigationState<Route>;
  },
) => {
  return (
    <TabBar
      {...props}
      activeColor={colors.primary}
      style={{
        backgroundColor: colors.white,
        overflow: "hidden",
      }}
      renderLabel={(props) => (
        <Typography
          bold
          numberOfLines={1}
          ellipsizeMode="head"
          color={props.focused ? props.color : colors.text}
        >
          {props.route.title}
        </Typography>
      )}
      contentContainerStyle={{ paddingVertical: 14 }}
      indicatorContainerStyle={{
        borderBottomWidth: 1,
        borderBottomColor: colors.borderGrayLight,
      }}
      indicatorStyle={{
        height: 5,
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.primary,
      }}
    />
  );
};

export default ThemedTabView;
