import { Tabs } from "expo-router";
import { ScreenProps } from "expo-router/build/views/Screen";
import type { ComponentProps } from "react";

import { BottomTabHeader } from "@/components/AppHeader";
import MaterialIcon from "@/components/MaterialIcon";
import RootBottomNavigation from "@/containers/Root/Tabs/RootBottomNavigation";

type TabsProps = {
  name: string;
  title: string;
  icon: ComponentProps<typeof MaterialIcon>["name"];
  options?: ScreenProps["options"];
};

const bottomTabItems: TabsProps[] = [
  { icon: "home", name: "index", title: "Inicio" },
  { name: "fitness", title: "Ejercicio", icon: "fitness-center" },
  { name: "diet", title: "Nutrición", icon: "restaurant" },
  { name: "homework", title: "Tareas", icon: "task" },
  { name: "account", title: "Mi cuenta", icon: "account-circle" },
];

const RootTabs = () => {
  return (
    <Tabs
      tabBar={(props) => <RootBottomNavigation {...props} />}
      screenOptions={{ header: (props) => <BottomTabHeader {...props} /> }}
    >
      {bottomTabItems.map(({ name, title, icon, options }, index) => (
        <Tabs.Screen
          name={name}
          options={{
            title,
            ...options,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcon name={icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default RootTabs;
