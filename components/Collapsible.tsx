import React, { ReactNode, useState } from "react";
import { View, Animated, ViewStyle } from "react-native";
import { TouchableRipple } from "react-native-paper";

interface Props {
  collapsed: boolean;
  toggle: () => void;
  children: ReactNode;
  expandedHeight: number;
  renderHeader: () => ReactNode;
  headerStyles?: ViewStyle[];
  containerStyles?: ViewStyle;
}
const CollapsibleView = ({
  collapsed,
  toggle,
  children,
  expandedHeight,
  containerStyles,
  renderHeader,
  headerStyles,
}: Props) => {
  const [animation] = useState(new Animated.Value(0));

  const toggleCollapse = () => {
    if (collapsed) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    toggle();
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, expandedHeight],
  });

  return (
    <View style={containerStyles}>
      <TouchableRipple style={headerStyles} onPress={toggleCollapse}>
        {renderHeader()}
      </TouchableRipple>
      <Animated.View style={{ height: heightInterpolate, overflow: "hidden" }}>
        {children}
      </Animated.View>
    </View>
  );
};

export default CollapsibleView;
