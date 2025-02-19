import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "123@gmail.com" && password === "123") {
      Alert.alert("Амжилттай", "Та амжилттай нэвтэрлээ!");
      navigation.navigate("Home"); // Home руу шилжих
    } else {
      Alert.alert("Алдаа", "Нэвтрэх мэдээлэл буруу байна!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Нэвтрэх</Text>
      <TextInput
        label="Имэйл"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Нууц үг"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        mode="outlined"
        secureTextEntry
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Нэвтрэх
      </Button>
      <Button
        onPress={() => navigation.navigate("Register")}
        style={styles.textButton}
      >
        Бүртгүүлэх
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  textButton: {
    marginTop: 10,
    alignSelf: "center",
  },
});
