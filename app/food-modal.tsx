import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacityProps,
} from "react-native";
import { Icon, TouchableRipple } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

import Box from "@/components/Box";
import IllustrationScreen from "@/components/IllustrationScreen";
import Searchbar from "@/components/Searchbar";
import Typography from "@/components/Typography";
import Colors from "@/constants/colors";

const emptyImage = require("@/assets/images/illustrations/food-ilustration.png");

interface SearchListItemProps extends Omit<TouchableOpacityProps, "children"> {
  last?: boolean;
  title: string;
  subtitle: string;
  iconSource: IconSource;
}
const SearchListItem = ({
  last = false,
  title,
  subtitle,
  iconSource,
  ...props
}: SearchListItemProps) => {
  return (
    <TouchableRipple
      style={[styles.listItem, { borderBottomWidth: last ? 0 : 1 }]}
      {...props}
    >
      <>
        <Box py={4} mr={4}>
          <Icon size={35} color={Colors.black} source={iconSource} />
        </Box>
        <Box justifyContent="center" style={{ flex: 1 }}>
          <Typography bold numberOfLines={1}>
            {title}
          </Typography>
          <Typography type="caption">{subtitle}</Typography>
        </Box>

        <Box
          alignItems="center"
          justifyContent="center"
          style={styles.listItemIcon}
        >
          <Typography
            bold
            color={Colors.white}
            style={styles.listItemIconLabel}
          >
            c
          </Typography>
        </Box>
      </>
    </TouchableRipple>
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
            backgroundColor: Colors.screenBackgroundLight,
          }}
          placeholder="Buscar un alimento"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </Box>

      {searchQuery === "" ? (
        <IllustrationScreen
          imageSrc={emptyImage}
          title="Busca tus alimentos favoritos y conoce su información nutricional."
        />
      ) : (
        <Box px={4}>
          <SearchListItem
            iconSource="food-outline"
            title="Tortilla de Maíz"
            subtitle="Calorías XX"
            onPress={() => console.log("Food info")}
          />
          <SearchListItem
            iconSource="food-drumstick"
            title="Pollo asado"
            subtitle="Calorías XX"
            onPress={() => console.log("Food info")}
          />
          <SearchListItem
            iconSource="food-croissant"
            title="Pan con mermelada"
            subtitle="Calorías XX"
            onPress={() => console.log("Food info")}
          />
          <SearchListItem
            iconSource="noodles"
            title="Sopa de fideos"
            subtitle="Calorías XX"
            onPress={() => console.log("Food info")}
          />
          <SearchListItem
            last
            iconSource="peanut-outline"
            title="Cacahuates (20g)"
            subtitle="Calorías XX"
            onPress={() => console.log("Food info")}
          />
        </Box>
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
    borderBottomWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderColor: Colors.borderGrayLight,
  },
  listItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: Colors.primary,
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
