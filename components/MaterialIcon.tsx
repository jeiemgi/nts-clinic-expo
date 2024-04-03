import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ComponentProps } from "react";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 * @param props
 * @constructor
 */
export function MaterialIcon(props: ComponentProps<typeof MaterialIcons>) {
  return <MaterialIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}
