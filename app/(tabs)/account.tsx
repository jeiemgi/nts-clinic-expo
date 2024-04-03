import { Layout, Toggle } from "@ui-kitten/components";
import { useState } from "react";

export default function TabOneScreen() {
  const [checked, setChecked] = useState(false);

  const onCheckedChange = (isChecked: boolean): void => {
    setChecked(isChecked);
  };

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Toggle checked={checked} onChange={onCheckedChange}>
        {`Checked: ${checked}`}
      </Toggle>
    </Layout>
  );
}
