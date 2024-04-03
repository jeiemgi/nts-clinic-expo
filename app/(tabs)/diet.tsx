import { Datepicker, Layout, Toggle } from "@ui-kitten/components";
import { useState } from "react";

export default function TabOneScreen() {
  const [date, setDate] = useState(new Date());

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Datepicker date={date} onSelect={(nextDate) => setDate(nextDate)} />
    </Layout>
  );
}
