import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { CommonActions } from "@react-navigation/native";
import { Animated } from "react-native";
import { BottomNavigation, Text, useTheme } from "react-native-paper";

import Colors from "@/constants/colors";

const RootBottomNavigation = ({
  state,
  insets,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const theme = useTheme();

  return (
    <BottomNavigation.Bar
      activeColor={theme.colors.onPrimary}
      activeIndicatorStyle={{ backgroundColor: theme.colors.primary }}
      navigationState={state}
      safeAreaInsets={insets}
      style={{ backgroundColor: Colors.white }}
      renderLabel={({ focused, route }) => {
        const { options } = descriptors[route.key];
        return (
          <Animated.View
            style={{
              opacity: focused ? 1 : 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              variant="labelSmall"
              style={{ fontFamily: "Manrope-SemiBold" }}
            >
              {options.title}
            </Text>
          </Animated.View>
        );
      }}
      onTabPress={({ route, preventDefault }) => {
        const event = navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
        } else {
          navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          });
        }
      }}
      renderIcon={({ route, focused, color }) => {
        const { options } = descriptors[route.key];
        if (options.tabBarIcon) {
          return options.tabBarIcon({ focused, color, size: 24 });
        }

        return null;
      }}
      getLabelText={({ route }) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : // @ts-ignore
                route.title;

        return label;
      }}
    />
  );
};

export default RootBottomNavigation;
