import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Icon, List, TouchableRipple } from "react-native-paper";

import Box from "@/components/Box";
import Screen from "@/components/Screen";
import Typography from "@/components/Typography";
import Colors from "@/constants/colors";

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
          <Icon size={20} color={Colors.primary} source="circle-medium" />
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
    borderBottomColor: Colors.borderGrayLight,
    backgroundColor: Colors.white,
  },
  unread: {
    backgroundColor: Colors.screenBackgroundDark,
  },
});

export const NotificationsScreen = () => {
  const [read, setRead] = useState([false, false, false]);
  return (
    <View style={{ backgroundColor: Colors.screenBackgroundDark, flex: 1 }}>
      <View style={{ paddingTop: 24 }}>
        <NotificationListItem />
        <NotificationListItem />
        <NotificationListItem />
      </View>
    </View>
  );
};

export default NotificationsScreen;
