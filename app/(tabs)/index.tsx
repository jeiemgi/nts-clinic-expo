import { Layout, Text, Datepicker, Divider } from "@ui-kitten/components";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, Screen, useSession } from "@/components";

export default function TabOneScreen() {
  const { signOut } = useSession();

  return (
    <Screen>
      <Text category="h1">Lorem Ipsum</Text>
      <Text category="h2">Lorem Ipsum</Text>
      <Text category="h3">Lorem Ipsum</Text>
      <Text category="h4">Lorem Ipsum</Text>
      <Text category="h5">Lorem Ipsum</Text>
      <Text category="h6">Lorem Ipsum</Text>

      <Divider style={{ marginVertical: 24 }} />

      <Text category="s1">Lorem Ipsum</Text>
      <Text category="s2">Lorem Ipsum</Text>

      <Divider style={{ marginVertical: 24 }} />

      <Text category="p1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim
        id elit sed semper. Integer dolor diam, eleifend a quam quis, sagittis
        laoreet erat. Sed risus metus, pulvinar in mauris id, interdum imperdiet
        lectus. Vestibulum aliquam neque eu elit eleifend finibus vestibulum
        quis augue.
      </Text>
      <Divider style={{ marginVertical: 24 }} />

      <Text category="p2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim
        id elit sed semper. Integer dolor diam, eleifend a quam quis, sagittis
        laoreet erat. Sed risus metus, pulvinar in mauris id, interdum imperdiet
        lectus. Vestibulum aliquam neque eu elit eleifend finibus vestibulum
        quis augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec dignissim id elit sed semper. Integer dolor diam, eleifend a quam
        quis, sagittis laoreet erat. Sed risus metus, pulvinar in mauris id,
        interdum imperdiet lectus. Vestibulum aliquam neque eu elit eleifend
        finibus vestibulum quis augue. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec dignissim id elit sed semper. Integer dolor diam,
        eleifend a quam quis, sagittis laoreet erat. Sed risus metus, pulvinar
        in mauris id, interdum imperdiet lectus. Vestibulum aliquam neque eu
        elit eleifend finibus vestibulum quis augue.
      </Text>
      <Divider style={{ marginVertical: 24, marginBottom: 48 }} />

      <Button
        style={{ marginBottom: 24 }}
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}
      >
        Sign Out
      </Button>
    </Screen>
  );
}
