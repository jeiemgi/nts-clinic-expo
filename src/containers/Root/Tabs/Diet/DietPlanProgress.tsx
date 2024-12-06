import { ScrollView } from "react-native";
import { BarChart, PieChart } from "react-native-gifted-charts";

import Box from "@/components/Box";
import Typography from "@/components/Typography";
import { colors } from "@/theme/colors";

const data = [
  { value: 50, color: colors.primary },
  { value: 100, color: colors.primary30 },
];

const DietPlanProgress = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingVertical: 24,
        backgroundColor: colors.screenBackgroundDark,
      }}
    >
      <Box px={4}>
        <Box mb={5}>
          <Typography themeColor="primary" bold>
            Progreso del Día
          </Typography>
        </Box>
        <Box mb={20} style={{ flexDirection: "row", alignItems: "center" }}>
          <Box style={{ flex: 1, width: "70%" }}>
            <Box mb={3}>
              <Typography bold>Calorías</Typography>
              <Typography>980/2950</Typography>
            </Box>
            <Box>
              <Typography bold>Alimentos</Typography>
              <Typography>8/24</Typography>
            </Box>
          </Box>
          <PieChart
            donut
            innerRadius={50}
            textBackgroundColor="white"
            textBackgroundRadius={22}
            data={data}
          />
        </Box>
      </Box>
      <Box px={4}>
        <Typography themeColor="primary" bold>
          Gráfica de adherencia
        </Typography>
        <BarChart
          yAxisAtTop
          rulesType="solid"
          color={Colors.primary}
          data={data}
        />
      </Box>
    </ScrollView>
  );
};

export default DietPlanProgress;
