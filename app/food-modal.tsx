import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-paper";

import Box from "@/components/Box";
import CollapsibleView from "@/components/Collapsible";
import IllustrationScreen from "@/components/IllustrationScreen";
import Searchbar from "@/components/Searchbar";
import Typography from "@/components/Typography";
import { colors, ThemeColors } from "@/theme/colors";

interface SearchListItemProps {
  last?: boolean;
  title: string;
  subtitle: string;
  iconSource: string;
}

const FoodCategoryIcon = ({
  icon,
  color: colorName,
}: {
  icon: string;
  color: ThemeColors;
}) => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      style={[styles.listItemIcon, { backgroundColor: colors[colorName] }]}
    >
      <Typography
        bold
        color="white"
        style={{ lineHeight: 0, textTransform: "uppercase" }}
      >
        {icon}
      </Typography>
    </Box>
  );
};
const SearchListItem = ({
  last = false,
  title,
  subtitle,
  iconSource,
}: SearchListItemProps) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <CollapsibleView
      collapsed={collapsed}
      toggle={() => setCollapsed(!collapsed)}
      expandedHeight={156}
      headerStyles={[styles.listItem]}
      containerStyles={{
        borderBottomWidth: last ? 0 : 1,
        borderColor: colors.borderGrayLight,
      }}
      renderHeader={() => (
        <>
          <Box py={4} mr={4}>
            <Icon size={35} color={colors.black} source={iconSource} />
          </Box>

          <Box justifyContent="center" style={{ flex: 1 }}>
            <Typography bold numberOfLines={1}>
              {title}
            </Typography>
            <Typography type="caption">{subtitle}</Typography>
          </Box>
          <FoodCategoryIcon icon="C" color="primary" />
        </>
      )}
    >
      <Box pl={16}>
        <Box flexDirection="row" alignItems="center">
          <Box mr={2} mb={2}>
            <FoodCategoryIcon icon="c" color="foodPrimary" />
          </Box>
          <Typography numberOfLines={1}>Carbohidratos: 18 gr</Typography>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Box mr={2} mb={2}>
            <FoodCategoryIcon icon="p" color="foodBlue" />
          </Box>
          <Typography numberOfLines={1}>Proteína: 5 gr</Typography>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Box mr={2}>
            <FoodCategoryIcon icon="g" color="foodGreen" />
          </Box>
          <Typography numberOfLines={1}>Grasa: 2 gr </Typography>
        </Box>
      </Box>
    </CollapsibleView>
  );
};

export default function ModalScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <Box px={4} py={4} style={{ width: "100%" }}>
        <Searchbar
          autoFocus
          style={{
            backgroundColor: colors.screenBackgroundLight,
          }}
          placeholder="Buscar un alimento"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </Box>

      {searchQuery === "" ? (
        <IllustrationScreen
          imageSrc={require("../assets/images/illustrations/food-ilustration.png")}
          title="Busca tus alimentos favoritos y conoce su información nutricional."
        />
      ) : (
        <ScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <Box px={4}>
            <SearchListItem
              iconSource="food-outline"
              title="Tortilla de Maíz"
              subtitle="Calorías XX"
            />
            <SearchListItem
              iconSource="food-drumstick"
              title="Pollo asado"
              subtitle="Calorías XX"
            />
            <SearchListItem
              iconSource="food-croissant"
              title="Pan con mermelada"
              subtitle="Calorías XX"
            />
            <SearchListItem
              iconSource="noodles"
              title="Sopa de fideos"
              subtitle="Calorías XX"
            />
            <SearchListItem
              iconSource="peanut-outline"
              title="Cacahuates (20g)"
              subtitle="Calorías XX"
            />
            <SearchListItem
              iconSource="food-drumstick"
              title="Pollo asado"
              subtitle="Calorías XX"
            />
            <SearchListItem
              iconSource="peanut-outline"
              title="Cacahuates (20g)"
              subtitle="Calorías XX"
            />
            <SearchListItem
              iconSource="food-drumstick"
              title="Pollo asado"
              subtitle="Calorías XX"
            />
            <SearchListItem
              iconSource="peanut-outline"
              title="Cacahuates (20g)"
              subtitle="Calorías XX"
            />
            <SearchListItem
              iconSource="food-drumstick"
              title="Pollo asado"
              subtitle="Calorías XX"
            />
            <SearchListItem
              iconSource="peanut-outline"
              title="Cacahuates (20g)"
              subtitle="Calorías XX"
            />
            <SearchListItem
              iconSource="peanut-outline"
              title="Cacahuates (20g)"
              subtitle="Calorías XX"
            />
            <SearchListItem
              last
              iconSource="peanut-outline"
              title="Cacahuates (20g)"
              subtitle="Calorías XX"
            />
          </Box>
        </ScrollView>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  listItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: colors.primary,
  },
  listItemIconLabel: {
    lineHeight: 0,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
