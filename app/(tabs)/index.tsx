import { Divider, Text } from "react-native-paper";

import { Button, Screen, useSession } from "@/components";

export default function TabOneScreen() {
  const { signOut } = useSession();

  return (
    <Screen>
      <Text variant="displayLarge">Display Large</Text>
      <Text variant="displayMedium">Display Medium</Text>
      <Text variant="displaySmall">Display small</Text>
      <Divider style={{ marginVertical: 24 }} />

      <Text variant="headlineLarge">Headline Large</Text>
      <Text variant="headlineMedium">Headline Medium</Text>
      <Text variant="headlineSmall">Headline Small</Text>
      <Divider style={{ marginVertical: 24 }} />

      <Text variant="titleLarge">Title Large</Text>
      <Text variant="titleMedium">Title Medium</Text>
      <Text variant="titleSmall">Title Small</Text>
      <Divider style={{ marginVertical: 24 }} />

      <Text variant="bodyLarge">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim
        id elit sed semper. Integer dolor diam, eleifend a quam quis, sagittis
        laoreet erat. Sed risus metus, pulvinar in mauris id, interdum imperdiet
        lectus. Vestibulum aliquam neque eu elit eleifend finibus vestibulum
        quis augue.
      </Text>
      <Divider style={{ marginVertical: 24 }} />

      <Text variant="bodyMedium">
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
      <Divider style={{ marginVertical: 24 }} />

      <Text variant="bodySmall">
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
      <Divider style={{ marginVertical: 24 }} />

      <Text variant="labelLarge">Label Large</Text>
      <Text variant="labelMedium">Label Medium</Text>
      <Text variant="labelSmall">Label Small</Text>

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
