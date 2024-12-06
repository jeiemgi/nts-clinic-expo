import { router } from "expo-router";
import React from "react";
import { TextInput } from "react-native-paper";

import Button from "../components/Button";

import { Screen, useSession } from "@/components";
import PasswordInput from "@/components/PasswordInput";

function LogIn() {
  const { signIn } = useSession();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Screen py={8} safeAreaView={false}>
      <TextInput
        mode="outlined"
        value={email}
        autoCorrect={false}
        autoComplete="email"
        autoCapitalize="none"
        style={{ marginBottom: 24 }}
        placeholder="Correo electrónico"
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <PasswordInput
        value={password}
        placeholder="Contraseña"
        style={{ marginBottom: 32 }}
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      <Button
        mode="contained"
        elevation={2}
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

export default LogIn;
