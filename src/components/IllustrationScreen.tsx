import { Image, KeyboardAvoidingView, StyleSheet } from "react-native";

import Box from "@/components/Box";
import Typography from "@/components/Typography";
import { colors } from "@/theme/colors";

const IllustrationScreen = ({
  title,
  imageSrc,
}: {
  title: string;
  imageSrc: number;
}) => {
  return (
    <KeyboardAvoidingView behavior="height" style={s.container}>
      <Box px={8} mb={5}>
        <Typography color={colors.textGray} align="center">
          {title}
        </Typography>
      </Box>
      <Image style={s.image} source={imageSrc} />
    </KeyboardAvoidingView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
export default IllustrationScreen;
