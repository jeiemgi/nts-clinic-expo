import dayjs from "dayjs";
import "dayjs/locale/es-mx";
import customParseFormat from "dayjs/plugin/customParseFormat";
import * as React from "react";
import { useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { Icon, TouchableRipple } from "react-native-paper";
import { TabView, SceneMap } from "react-native-tab-view";

import Box from "@/components/Box";
import ThemedTabView from "@/components/ThemedTabView";
import Typography from "@/components/Typography";
import Colors from "@/constants/colors";

dayjs.extend(customParseFormat);

const PlanCard = ({ checked = false }) => {
  return (
    <TouchableRipple onPress={() => console.log("Food intern")}>
      <View
        style={{
          paddingVertical: 12,
          paddingHorizontal: 16,
          backgroundColor: Colors.white,
          flexDirection: "row",
          borderLeftWidth: 5,
          borderLeftColor: checked ? Colors.primary : Colors.primary30,
        }}
      >
        <View style={{ flex: 1 }}>
          <Typography type="h4" bold>
            Comida 1
          </Typography>
          <Typography type="caption" numberOfLines={1}>
            Calorias 980 | P: 55g | C: 129g | G: 26g
          </Typography>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {checked ? (
            <Icon source="check-circle" color={Colors.primary} size={24} />
          ) : (
            <Icon source="chevron-right" size={24} />
          )}
        </View>
      </View>
    </TouchableRipple>
  );
};
const Plan = () => {
  const [date, setDate] = useState(dayjs("YYYY MMMM DD", "es-mx"));
  console.log(date);
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 24,
        backgroundColor: Colors.screenBackgroundDark,
      }}
    >
      <Box mb={8}>
        <Typography bold align="center">
          Miércoles, 9 de enero de 2024
        </Typography>
      </Box>

      <Box px={4}>
        <View
          style={{
            borderRadius: 8,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <PlanCard checked />
          <PlanCard />
          <PlanCard />
        </View>
      </Box>
    </View>
  );
};

const Progress = () => <View style={{ flex: 1 }} />;

const Supplements = () => <View style={{ flex: 1 }} />;

const renderScene = SceneMap({
  first: Plan,
  second: Progress,
  third: Supplements,
});

export default function DietTabView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Mi plan" },
    { key: "second", title: "Progreso" },
    { key: "third", title: "Suplementos" },
  ]);

  return (
    <TabView
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderTabBar={(props) => <ThemedTabView {...props} />}
      navigationState={{ index, routes }}
      initialLayout={{ width: layout.width }}
    />
  );
}
