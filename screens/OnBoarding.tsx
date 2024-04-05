import { Link } from "expo-router";
import React from "react";
import {
  Animated,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import PagerView, {
  PagerViewOnPageScrollEventData,
} from "react-native-pager-view";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

// @ts-ignore
import onboarding from "@/assets/images/on-boarding-bg.jpg";
import { Button, MaterialIcon } from "@/components";
import Box from "@/components/Box";
import Typography from "@/components/Typography";
import NTSLogo from "@/svg/NTSLogo";

function BulletList({ label }: { label: string }) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 12,
      }}
    >
      <View style={{ marginRight: 12 }}>
        <MaterialIcon color="#1E1E1E" size={20} name="check" />
      </View>
      <Typography style={{ flex: 1, flexWrap: "wrap" }}>{label}</Typography>
    </View>
  );
}

const SlideOne = () => {
  const theme = useTheme();

  return (
    <ImageBackground
      style={styles.container}
      source={onboarding}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Box style={{ alignItems: "center" }} my={20}>
          <NTSLogo fill="white" />
        </Box>
        <Box my={10} px={4} style={{ flex: 1 }} justifyContent="space-around">
          <Typography
            type="h2"
            style={{ color: theme.colors.onPrimary, textAlign: "center" }}
          >
            TE DAMOS LA {"\n"}BIENVENIDA
          </Typography>
          <Typography
            style={{
              textAlign: "center",
              color: theme.colors.onPrimary,
            }}
          >
            Conoce NTS Clinic. Logra tus objetivos de la mano de profesionales
            capacitados.¡Obtén el cuerpo que sueñas! Estás a un paso de
            lograrlo.
          </Typography>
        </Box>
      </SafeAreaView>
    </ImageBackground>
  );
};

const SlideTwo = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Box alignItems="center" my={20}>
          <NTSLogo fill="#1E1E1E" />
        </Box>

        <Box mb={12} px={4}>
          <Typography type="h2" align="center" themeColor="primary">
            ¿Qué incluyen {"\n"} nuestros programas?
          </Typography>
        </Box>

        <View style={{ paddingHorizontal: 16 }}>
          <BulletList label="Plan Nutricional personalizado" />
          <BulletList label="Acompañamiento y aprendizaje por parte de licenciados en Nutrición." />
          <BulletList label="Programa de entrenamiento para casa o gimnasio." />
          <BulletList label="Acceso completo a la aplicación donde podrás visualizar tus planes, entrenamientos y visualizar tu progreso." />
        </View>
      </SafeAreaView>
    </View>
  );
};

const SlideThree = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Box alignItems="center" my={20}>
          <NTSLogo fill="#1E1E1E" />
        </Box>

        <Box mb={12} px={4}>
          <Typography type="h2" align="center" themeColor="primary">
            ¿Aún no eres {"\n"} paciente?
          </Typography>
        </Box>
        <Box mb={12} px={4}>
          <Typography align="center">
            No te preocupes, puedes explorar la app e incluso usar nuestro
            buscador y explorar los +1000 alimentos de nuestra base de datos con
            su información nutricional.
          </Typography>
        </Box>
        <Box mb={3} px={4}>
          <Link href="/auth" asChild>
            <Button mode="contained">Ya soy Paciente</Button>
          </Link>
        </Box>
        <Box mb={12} px={4}>
          <Link href="/auth" asChild>
            <Button mode="outlined"> Explorar App</Button>
          </Link>
        </Box>
      </SafeAreaView>
    </View>
  );
};

const DATA_ARRAY = [
  { key: "1", Component: SlideOne },
  { key: "2", Component: SlideTwo },
  { key: "3", Component: SlideThree },
];

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

function OnBoarding() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const ref = React.useRef<PagerView>(null);

  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;

  const inputRange = [0, DATA_ARRAY.length];

  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue,
  ).interpolate({
    inputRange,
    outputRange: [0, DATA_ARRAY.length * width],
  });

  const onPageScroll = React.useMemo(
    () =>
      Animated.event<PagerViewOnPageScrollEventData>(
        [
          {
            nativeEvent: {
              offset: scrollOffsetAnimatedValue,
              position: positionAnimatedValue,
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onPageScrollStateChanged = (e) => {
    console.log("log", e);
  };
  return (
    <>
      <AnimatedPagerView
        ref={ref}
        style={styles.container}
        onPageScrollStateChanged={onPageScrollStateChanged}
        onPageScroll={onPageScroll}
      >
        {DATA_ARRAY.map(({ key, Component }) => (
          <Component key={key} />
        ))}
      </AnimatedPagerView>
      <ExpandingDot
        data={DATA_ARRAY}
        expandingDotWidth={30}
        // @ts-ignore
        scrollX={scrollX}
        inActiveDotOpacity={0.5}
        activeDotColor="#000"
        inActiveDotColor="#000"
        dotStyle={{ ...styles.dotStyles, backgroundColor: "red" }}
        containerStyle={styles.dotContainer}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dotContainer: {
    bottom: 50,
    position: "absolute",
  },
  dotStyles: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: "rgba(254, 254, 254, 0.5)",
  },
});

export default OnBoarding;
