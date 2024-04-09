import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import { Appbar, Icon, Surface, TouchableRipple } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSession } from "@/components";
import Box from "@/components/Box";
import Searchbar from "@/components/Searchbar";
import Typography from "@/components/Typography";
import Colors from "@/constants/colors";

const NTSLogo = require("@/assets/images/nts-logo.png");

const SquareCard = ({
  onPress,
  label,
  icon,
}: {
  onPress: () => void;
  label: React.ReactNode;
  icon: IconSource;
}) => {
  return (
    <TouchableRipple style={styles.cardPressableSquare} onPress={onPress}>
      <Surface elevation={4} style={styles.cardSquare} mode="flat">
        <Box mb={3} alignItems="center">
          <Icon source={icon} color={Colors.primary} size={32} />
        </Box>
        <Typography
          bold
          type="label"
          align="center"
          numberOfLines={2}
          style={{ flexWrap: "wrap" }}
        >
          {label}
        </Typography>
      </Surface>
    </TouchableRipple>
  );
};

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

const IndexTab = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LinearGradient
        style={[styles.background]}
        colors={[Colors.screenBackgroundDark, "transparent"]}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1, paddingBottom: 300 }}>
          <WelcomeHeader />

          <Box px={4} mb={4}>
            <Typography type="h1">Hola, Jorge</Typography>
            <Box my={3}>
              <Typography>Te damos la bienvenida a tu espacio NTS</Typography>
            </Box>

            <TouchableRipple
              style={[styles.cardPressable, { marginBottom: 16 }]}
              onPress={() => console.log("Pressed")}
            >
              <Surface
                style={[styles.card, { backgroundColor: Colors.primary }]}
                mode="flat"
              >
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

            <TouchableRipple
              style={styles.cardPressable}
              onPress={() => console.log("Pressed")}
            >
              <Surface elevation={4} style={styles.card} mode="flat">
                <Box flexDirection="row" alignItems="center">
                  <Box mr={4}>
                    <Icon source="calendar" color={Colors.black} size={24} />
                  </Box>
                  <Typography style={{ flex: 1 }} bold type="h3">
                    Próximas citas
                  </Typography>
                  <Icon source="chevron-right" color={Colors.black} size={24} />
                </Box>
              </Surface>
            </TouchableRipple>
          </Box>

          <Box
            px={4}
            style={{ gap: 16 }}
            flexDirection="row"
            justifyContent="space-between"
          >
            <SquareCard
              icon="dumbbell"
              label="Iniciar Entrenamiento"
              onPress={() => console.log("Pressed")}
            />

            <SquareCard
              label="Registrar una comida"
              icon="silverware-fork-knife"
              onPress={() => console.log("Pressed")}
            />

            <SquareCard
              icon="note-check-outline"
              label={<> Revisar {"\n"}Tareas</>}
              onPress={() => console.log("Pressed")}
            />
          </Box>
        </ScrollView>
      </SafeAreaView>

      <View style={styles.searchContainer}>
        <TouchableHighlight
          style={styles.touchableInput}
          underlayColor={Colors.screenBackgroundDark}
          onPress={() => router.navigate("food-modal")}
        >
          <Searchbar
            readOnly
            value=""
            pointerEvents="none"
            placeholder="Buscar un alimento"
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenBackgroundLight,
  },
  touchableInput: {
    borderRadius: 40,
    overflow: "hidden",
  },
  cardPressable: {
    borderRadius: 12,
    overflow: "hidden",
  },
  cardPressableSquare: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  card: {
    alignItems: "stretch",
    justifyContent: "center",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  cardSquare: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
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
    height: "25%",
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
  searchContainer: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    backgroundColor: Colors.white,
  },
});
export default IndexTab;
