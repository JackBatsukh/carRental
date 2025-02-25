import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import api from "../../api/api"; 
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Алдаа", "Имэйл болон нууц үгээ оруулна уу!");
      return;
    }

    try {
      const response = await api.post("/user/login", { email, password });
      const { token } = response.data;
      await AsyncStorage.setItem("token", token);
      Alert.alert("Амжилттай", response.data.message);
      navigation.navigate("GetStarted");
    } catch (error) {
      Alert.alert(
        "Алдаа",
        error.response?.data?.message || "Нэвтрэхэд алдаа гарлаа"
      );
      console.log("Login error:", error.response?.data || error);
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
        autoCapitalize="none" 
      />
      <TextInput
        label="Нууц үг"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        mode="outlined"
        secureTextEntry
      />
      <Button
        mode="contained-tonal"
        onPress={handleLogin}
        style={styles.button}
      >
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
