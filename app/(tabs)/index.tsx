import { Layout, Text, Datepicker } from "@ui-kitten/components";
import { useState } from "react";

import { useSession } from "@/components/SessionProviderContext";

export default function TabOneScreen() {
  const { signOut } = useSession();
  const [date, setDate] = useState(new Date());

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Datepicker date={date} onSelect={(nextDate) => setDate(nextDate)} />
      <Text category="h1">HOME</Text>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}
      >
        Sign Out
      </Text>
    </Layout>
  );
}
