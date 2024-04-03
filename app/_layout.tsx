import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { default as mapping } from "../custom-mapping.json";
import { default as theme } from "../custom-theme.json";

import { SessionProvider } from "@/components/SessionProviderContext";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Manrope-Light": require("../assets/fonts/Manrope-Light.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
    "Manrope-SemiBold": require("../assets/fonts/Manrope-SemiBold.ttf"),
    Gobold: require("../assets/fonts/Gobold-Bold.otf"),
    "Gobold-Italic": require("../assets/fonts/Gobold-Bold-Italic.otf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <SessionProvider>
        <ApplicationProvider
          {...eva}
          // @ts-ignore
          customMapping={mapping}
          theme={{ ...eva.light, ...theme }}
        >
          <SafeAreaProvider>
            <Slot />
          </SafeAreaProvider>
        </ApplicationProvider>
      </SessionProvider>
    </>
  );
}
