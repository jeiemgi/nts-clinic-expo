import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { Icon } from "react-native-paper";

import { colors } from "@/theme/colors";

export const ModalHeader = ({
  title,
  navigation,
}: NativeStackHeaderProps & { title: string }) => {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        backgroundColor: colors.white,
      }}
    >
      <Icon size={35} source="drag-horizontal" />
    </View>
  );
};
