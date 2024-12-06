import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ComponentProps } from "react";

export function MaterialIcon(props: {
  name: ComponentProps<typeof MaterialIcons>["name"];
  color: string;
  size: number;
}) {
  return <MaterialIcons style={{ marginBottom: -3 }} {...props} />;
}

export default MaterialIcon;
