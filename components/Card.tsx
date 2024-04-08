import { StyleSheet, View } from "react-native";
import { Icon, Surface } from "react-native-paper";

import Box from "@/components/Box";
import Typography from "@/components/Typography";
import Colors from "@/constants/colors";

const Card = () => {
  return (
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
        <Typography color="white">Termina el 15 de enero de 2024</Typography>
      </Box>
    </Surface>
  );
};

const styles = StyleSheet.create({
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
});

export default Card;
