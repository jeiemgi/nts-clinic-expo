import { Redirect } from "expo-router";
import { Text } from "react-native-paper";

import { useSession } from "@/components";
import RootTabs from "@/components/Tabs/RootTabs";

export default function TabLayout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (tabs) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/onboarding" />;
  }

  return <RootTabs />;
}
