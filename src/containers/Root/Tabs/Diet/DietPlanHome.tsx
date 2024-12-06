import { View } from "react-native";

import DietPlanCard from "./DietPlanCard";

import { Box, Typography } from "@/components";
import { colors } from "@/theme";

export default function DietPlanHome() {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 24,
        backgroundColor: colors.screenBackgroundDark,
      }}
    >
      <Box mb={8}>
        <Typography bold align="center">
          Miércoles, 9 de enero de 2024
        </Typography>
      </Box>

      <Box px={4}>
        <View
          style={{
            borderRadius: 8,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <DietPlanCard
            title="Comida 1"
            description="Calorias 980 | P: 55g | C: 129g | G: 26g"
            checked
          />
          <DietPlanCard
            title="Comida 2"
            description="Calorias 980 | P: 55g | C: 129g | G: 26g"
          />
          <DietPlanCard
            title="Comida 3"
            description="Calorias 980 | P: 55g | C: 129g | G: 26g"
          />
        </View>
      </Box>
    </View>
  );
}
