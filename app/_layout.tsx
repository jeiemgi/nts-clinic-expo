import {
  DefaultTheme as NavigationLightTheme,
  DarkTheme as NavigationDarkTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  adaptNavigationTheme,
  configureFonts,
  MD3DarkTheme,
  MD3LightTheme,
  MD3Theme,
  PaperProvider,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { SessionProvider } from "@/components/SessionProviderContext";
import customDarkTheme from "@/dark-theme.json";
import customLightTheme from "@/light-theme.json";

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
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
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

const fontConfig = {
  fontFamily: "Manrope-Regular",
  displayLarge: {
    fontFamily: "Gobold-Italic",
  },
  displayMedium: {
    fontFamily: "Manrope-SemiBold",
  },
} as const;

const MD3CombinedLightTheme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig }),
  colors: customLightTheme.colors,
};
const MD3CombinedDarkTheme = {
  ...MD3DarkTheme,
  dark: true,
  fonts: configureFonts({ config: fontConfig }),
  colors: customDarkTheme.colors,
};

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    materialLight: MD3CombinedLightTheme,
    materialDark: MD3CombinedDarkTheme,
    reactNavigationDark: NavigationDarkTheme,
    reactNavigationLight: NavigationLightTheme,
  });

  return (
    <SessionProvider>
      <PaperProvider
        theme={
          colorScheme === "dark" ? MD3CombinedDarkTheme : MD3CombinedLightTheme
        }
      >
        <SafeAreaProvider>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : LightTheme}
          >
            <Stack>
              <Stack.Screen name="auth" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
            <StatusBar />
          </ThemeProvider>
        </SafeAreaProvider>
      </PaperProvider>
    </SessionProvider>
  );
}
