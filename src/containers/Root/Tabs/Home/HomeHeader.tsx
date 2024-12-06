import { useRouter } from "expo-router";
import { Image, View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

import { useSession } from "@/components";
import Colors from "@/constants/colors";

const NTSLogo = require("@/assets/images/nts-logo.png");

const WelcomeHeader = () => {
  const router = useRouter();
  const { signOut } = useSession();
  return (
    <View style={styles.header}>
      <Image source={NTSLogo} style={styles.logo} />
      <Appbar.Header
        statusBarHeight={0}
        style={{ backgroundColor: "transparent" }}
      >
        <Appbar.Action
          icon="logout"
          onPress={() => {
            signOut();
            router.navigate("/");
          }}
        />
        <Appbar.Action
          icon="bell-outline"
          onPress={() => router.navigate("/notifications")}
        />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 72,
    height: 32,
    resizeMode: "contain",
    tintColor: Colors.black,
  },

  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    height: 60,
    marginBottom: 16,
  },
});

export default WelcomeHeader;
