import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Appbar } from "react-native-paper";

import { colors } from "@/theme/colors";

const AppHeader = ({
  back,
  route,
  navigation,
  options,
}: NativeStackHeaderProps) => {
  return (
    <Appbar.Header mode="small" style={{ backgroundColor: colors.white }}>
      {back ? <Appbar.BackAction onPress={() => navigation.goBack()} /> : null}
      <Appbar.Content title={options.title} />
    </Appbar.Header>
  );
};

export const BottomTabHeader = ({ options }: BottomTabHeaderProps) => {
  return (
    <Appbar.Header mode="small" style={{ backgroundColor: colors.white }}>
      <Appbar.Content title={options.title} />
    </Appbar.Header>
  );
};

export default AppHeader;
