import { Button, Input, Tab, TabView, Layout } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";

import PasswordInput from "@/components/PasswordInput";
import { useSession } from "@/components/SessionProviderContext";
import NTSLogo from "@/svg/nts-logo";

function LogIn() {
  const { signIn } = useSession();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.tabContainer}>
      <Input
        value={email}
        style={{ marginBottom: 24 }}
        placeholder="Correo electrónico"
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <PasswordInput
        value={password}
        style={{ marginBottom: 24 }}
        placeholder="Contraseña"
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      <Button style={{ width: "100%" }}>Enviar</Button>
    </View>
  );
}

function SignIn() {
  const { signIn } = useSession();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.tabContainer}>
      <Input
        value={email}
        style={{ marginBottom: 24 }}
        placeholder="Correo electrónico"
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <PasswordInput
        value={password}
        style={{ marginBottom: 24 }}
        placeholder="Contraseña"
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      <Button style={{ width: "100%" }}>Enviar</Button>
    </View>
  );
}

const AuthRoot = (marginVertical: number = 24) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <Layout style={{ flex: 1 }}>
      <View style={{ alignItems: "center", marginVertical: 24 }}>
        <NTSLogo />
      </View>

      <TabView
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Tab title="Regístrate">
          <LogIn />
        </Tab>
        <Tab title="Iniciar Sesión">
          <SignIn />
        </Tab>
      </TabView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AuthRoot;
