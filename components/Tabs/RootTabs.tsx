import { CommonActions } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { Animated } from "react-native";
import { BottomNavigation, Text, useTheme } from "react-native-paper";

import { BottomTabHeader } from "@/components/AppHeader";
import MaterialIcon from "@/components/MaterialIcon";
import Colors from "@/constants/colors";

const RootTabs = () => {
  const theme = useTheme();
  return (
    <Tabs
      screenOptions={{ header: (props) => <BottomTabHeader {...props} /> }}
      tabBar={({ navigation, state, descriptors, insets }) => (
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
      )}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="fitness"
        options={{
          title: "Ejercicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="fitness-center" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="diet"
        options={{
          title: "Nutrición",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="restaurant" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="homework"
        options={{
          title: "Tareas",
          headerTitle: "Tareas mensuales",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="task" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Mi cuenta",
          headerTitle: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default RootTabs;
