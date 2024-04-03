import { useState } from "react";
import { Switch } from "react-native-paper";

import { Screen } from "@/components";

export default function HomeWorkScreen() {
  const [checked, setChecked] = useState(false);

  const onCheckedChange = (isChecked: boolean): void => {
    setChecked(isChecked);
  };

  return (
    <Screen style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Switch value={checked} onValueChange={onCheckedChange} />
    </Screen>
  );
}
