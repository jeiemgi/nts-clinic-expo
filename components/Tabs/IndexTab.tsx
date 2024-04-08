import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { Appbar, Icon, Surface, TouchableRipple } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import Box from "@/components/Box";
import Typography from "@/components/Typography";
import Colors from "@/constants/colors";

const NTSLogo = require("@/assets/images/nts-logo.png");

const IndexTab = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={[styles.background]}
        colors={[Colors.screenBackgroundDark, "transparent"]}
      />
      <SafeAreaView>
        <View style={styles.header}>
          <Image source={NTSLogo} style={styles.logo} />
          <Link href="/(home)/notifications" asChild>
            <Appbar.Action icon="bell-outline" />
          </Link>
        </View>
        <Box px={4}>
          <Typography type="h1">Hola, Jorge</Typography>
          <Box my={3}>
            <Typography>Te damos la bienvenida a tu espacio NTS</Typography>
          </Box>

          <TouchableRipple
            style={styles.cardPressable}
            onPress={() => console.log("Pressed")}
          >
            <Surface style={styles.card} mode="flat">
              <View style={styles.cardIcon}>
                <Icon source="fire" color={Colors.white} size={56} />
              </View>
              <Box my={3}>
                <Typography color="white" type="overline">
                  Plan 1
                </Typography>
                <Typography bold color="white" type="h3">
                  Semana 1 / Día 2
                </Typography>
                <Typography color="white">
                  Termina el 15 de enero de 2024
                </Typography>
              </Box>
            </Surface>
          </TouchableRipple>
        </Box>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenBackgroundLight,
  },
  cardPressable: {
    borderRadius: 12,
  },
  card: {
    justifyContent: "center",
    color: Colors.white,
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary,
  },
  cardIcon: {
    width: 56,
    right: 16,
    height: "100%",
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "center",
    opacity: 0.2,
  },
  logo: {
    width: 72,
    height: 32,
    resizeMode: "contain",
    tintColor: Colors.black,
  },
  background: {
    left: 0,
    height: "35%",
    width: "100%",
    resizeMode: "contain",
    position: "absolute",
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
export default IndexTab;
