import { Link } from "expo-router";
import { ImageBackground, View } from "react-native";
import PagerView from "react-native-pager-view";
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

function OnBoarding() {
  const theme = useTheme();

  return (
    <PagerView style={{ flex: 1 }}>
      <Box key="1">
        <ImageBackground
          style={{ flex: 1 }}
          source={onboarding}
          resizeMode="cover"
        >
          <SafeAreaView style={{ flex: 1 }}>
            <Box style={{ alignItems: "center" }} my={20}>
              <NTSLogo fill="white" />
            </Box>
            <Box
              my={10}
              px={4}
              style={{ flex: 1 }}
              justifyContent="space-around"
            >
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
                Conoce NTS Clinic. Logra tus objetivos de la mano de
                profesionales capacitados.¡Obtén el cuerpo que sueñas! Estás a
                un paso de lograrlo.
              </Typography>
            </Box>
          </SafeAreaView>
        </ImageBackground>
      </Box>

      <Box key="2">
        <View style={{ flex: 1 }}>
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
      </Box>

      <Box key="3">
        <View style={{ flex: 1 }}>
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
                buscador y explorar los +1000 alimentos de nuestra base de datos
                con su información nutricional.
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
      </Box>
    </PagerView>
  );
}

export default OnBoarding;
