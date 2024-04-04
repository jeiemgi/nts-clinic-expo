import { router } from "expo-router";
import React from "react";
import { TextInput } from "react-native-paper";

import Button from "../components/Button";

import { Screen, useSession } from "@/components";
import PasswordInput from "@/components/PasswordInput";

function SignUp() {
  const { signIn } = useSession();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Screen py={8} safeAreaView={false}>
      <TextInput
        value={email}
        mode="outlined"
        autoCorrect={false}
        autoComplete="email"
        autoCapitalize="none"
        style={{ marginBottom: 24 }}
        placeholder="Correo electrónico"
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <PasswordInput
        value={password}
        style={{ marginBottom: 32 }}
        placeholder="Contraseña"
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      <Button
        mode="contained"
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

export default SignUp;
