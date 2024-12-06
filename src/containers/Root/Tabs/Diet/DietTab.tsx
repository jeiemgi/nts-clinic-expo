import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import DietPlanHome from "./DietPlanHome";
import DietPlanProgress from "./DietPlanProgress";
import DietPlanSupplements from "./DietPlanSupplements";

import ThemedTabView from "@/components/ThemedTabView";

const renderScene = SceneMap({
  first: DietPlanHome,
  second: DietPlanProgress,
  third: DietPlanSupplements,
});

export default function DietTabView() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "plan", title: "Mi plan" },
    { key: "second", title: "Progreso" },
    { key: "third", title: "Suplementos" },
  ]);

  return (
    <TabView
      onIndexChange={setIndex}
      renderScene={renderScene}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => <ThemedTabView {...props} />}
      navigationState={{ index, routes }}
    />
  );
}
