import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  PaperProvider,
  MD3LightTheme,
  configureFonts,
} from "react-native-paper";
import { Font } from "react-native-paper/src/types";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { SessionProvider } from "@/components/SessionProviderContext";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

const fontConfig = {
  fontFamily: "Manrope-Regular",
  displayLarge: {
    fontFamily: "Gobold-Italic",
  },
  displayMedium: {
    fontFamily: "Manrope-SemiBold",
  },
} as const;

const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig }),
};

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
      <SessionProvider>
        <PaperProvider theme={theme}>
          <SafeAreaProvider>
            <Slot />
          </SafeAreaProvider>
        </PaperProvider>
      </SessionProvider>
    </>
  );
}
