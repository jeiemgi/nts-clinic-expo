import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Icon, TouchableRipple } from "react-native-paper";

import Typography from "@/components/Typography";
import { colors } from "@/theme/colors";

const NotificationListItem = ({
  onPress,
  unread = false,
}: {
  unread?: boolean;
  onPress?: () => void;
}) => {
  return (
    <TouchableRipple
      style={[styles.itemContainer, unread ? styles.unread : {}]}
      onPress={() => console.log("notificacion")}
    >
      <>
        <Typography>
          <Icon size={20} color={colors.primary} source="circle-medium" />
          09/10/24
        </Typography>
        <Typography>Nueva Notificacion</Typography>
      </>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGrayLight,
    backgroundColor: colors.white,
  },
  unread: {
    backgroundColor: colors.screenBackgroundDark,
  },
});

export const NotificationsScreen = () => {
  const [read, setRead] = useState([false, false, false]);
  return (
    <View style={{ backgroundColor: colors.screenBackgroundDark, flex: 1 }}>
      <View style={{ paddingTop: 24 }}>
        <NotificationListItem />
        <NotificationListItem />
        <NotificationListItem />
      </View>
    </View>
  );
};

export default NotificationsScreen;
