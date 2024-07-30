import { Redirect } from "expo-router";
import { Text } from "react-native-paper";

import { useSession } from "@/components";
import RootTabs from "@/containers/Root";

export default function TabLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/onboarding" />;
  }

  return <RootTabs />;
}
