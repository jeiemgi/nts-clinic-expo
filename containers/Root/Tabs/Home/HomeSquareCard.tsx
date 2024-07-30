import { StyleSheet } from "react-native";
import { Icon, Surface, TouchableRipple } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

import Box from "@/components/Box";
import Typography from "@/components/Typography";
import Colors from "@/constants/colors";

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

const styles = StyleSheet.create({
  cardPressableSquare: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  cardSquare: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
});

export default SquareCard;
