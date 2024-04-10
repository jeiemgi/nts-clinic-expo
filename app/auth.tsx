import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TabView,
  SceneMap,
  SceneRendererProps,
  TabBar,
  Route,
  NavigationState,
} from "react-native-tab-view";

import ThemedTabView from "@/components/ThemedTabView";
import Login from "@/screens/Login";
import SignUp from "@/screens/SignUp";
import NTSLogo from "@/svg/NTSLogo";

const renderScene = SceneMap({
  first: SignUp,
  second: Login,
});

const AuthRoot = () => {
  const layout = useWindowDimensions();
  const { action } = useLocalSearchParams();
  const [index, setIndex] = React.useState(Number(action));
  const [routes] = React.useState([
    { key: "first", title: "Regístrate" },
    { key: "second", title: "Iniciar Sesión" },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.logoHeader}>
        <NTSLogo />
      </View>

      <TabView
        renderScene={renderScene}
        renderTabBar={(props) => <ThemedTabView {...props} />}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoHeader: {
    alignItems: "center",
    marginVertical: 32,
  },
});

export default AuthRoot;
