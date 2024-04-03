import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import CustomBottomTab from "@/components/BottomTabBar/CustomBottomTabBar";

export const HomeTabBar = () => {
  useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Inicio" }} />
      <Tabs.Screen name="fitness" options={{ title: "Ejercicio" }} />
      <Tabs.Screen name="diet" options={{ title: "Nutrición" }} />
      <Tabs.Screen name="homework" options={{ title: "Tareas" }} />
      <Tabs.Screen name="account" options={{ title: "Mi cuenta" }} />
    </Tabs>
  );
};
