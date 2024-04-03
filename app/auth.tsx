import { Input, Tab, TabView, Layout } from "@ui-kitten/components";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Screen } from "@/components";
import Button from "@/components/Button";
import PasswordInput from "@/components/PasswordInput";
import { useSession } from "@/components/SessionProviderContext";
import NTSLogo from "@/svg/nts-logo";

function LogIn() {
  const { signIn } = useSession();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Screen py={8} safeAreaView={false}>
      <Input
        size="large"
        value={email}
        autoCorrect={false}
        autoComplete="email"
        autoCapitalize="none"
        style={{ marginBottom: 24 }}
        placeholder="Correo electrónico"
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <PasswordInput
        size="large"
        value={password}
        style={{ marginBottom: 24 }}
        placeholder="Contraseña"
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      <Button
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        }}
        // disabled={email === "" || password === ""}
      >
        Iniciar Sesión
      </Button>
    </Screen>
  );
}

function SignUp() {
  const { signIn } = useSession();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Screen py={8} safeAreaView={false}>
      <Input
        size="large"
        value={email}
        autoCorrect={false}
        autoComplete="email"
        autoCapitalize="none"
        style={{ marginBottom: 24 }}
        placeholder="Correo electrónico"
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <PasswordInput
        size="large"
        value={password}
        style={{ marginBottom: 24 }}
        placeholder="Contraseña"
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      <Button
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        }}
        // disabled={email === "" || password === ""}
      >
        Regístrate
      </Button>
    </Screen>
  );
}

const AuthRoot = (marginVertical: number = 24) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <NTSLogo />
      </View>

      <TabView
        style={{ flex: 1 }}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Tab style={styles.tab} title="Regístrate">
          <SignUp />
        </Tab>
        <Tab style={styles.tab} title="Iniciar Sesión">
          <LogIn />
        </Tab>
      </TabView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginVertical: 24,
  },
  tab: {
    paddingVertical: 12,
  },
  tabContainer: {
    paddingVertical: 32,
  },
  screen: {},
});
export default AuthRoot;
