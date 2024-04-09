import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { Icon } from "react-native-paper";

import Colors from "@/constants/colors";

export const ModalHeader = ({
  title,
  navigation,
}: NativeStackHeaderProps & { title: string }) => {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        backgroundColor: Colors.white,
      }}
    >
      <Icon size={35} source="drag-horizontal" />
    </View>
  );
};
