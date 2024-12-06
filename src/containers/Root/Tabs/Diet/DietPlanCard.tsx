import { View } from "react-native";
import { Icon, TouchableRipple } from "react-native-paper";

import { Typography } from "@/components";
import { colors } from "@/theme";

const DietPlanCard = ({
  title,
  description,
  checked = false,
}: {
  checked?: boolean;
  title: string;
  description: string;
}) => {
  return (
    <TouchableRipple onPress={() => console.log("Food intern")}>
      <View
        style={{
          paddingVertical: 12,
          paddingHorizontal: 16,
          backgroundColor: colors.white,
          flexDirection: "row",
          borderLeftWidth: 5,
          borderLeftColor: checked ? colors.primary : colors.primary30,
        }}
      >
        <View style={{ flex: 1 }}>
          <Typography type="h4" bold>
            {title}
          </Typography>
          <Typography type="caption" numberOfLines={1}>
            {description}
          </Typography>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {checked ? (
            <Icon source="check-circle" color={colors.primary} size={24} />
          ) : (
            <Icon source="chevron-right" size={24} />
          )}
        </View>
      </View>
    </TouchableRipple>
  );
};

export default DietPlanCard;
