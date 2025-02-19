import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
export default function RegisterScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (name && email && password) {
      Alert.alert("Амжилттай", "Бүртгэл амжилттай үүслээ!");
      navigation.navigate("Login"); // Login Page руу буцах
    } else {
      Alert.alert("Алдаа", "Бүх талбарыг бөглөнө үү!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Бүртгүүлэх</Text>
      <TextInput
        label="Нэр"
        value={name}
        onChangeText={setName}
        style={styles.input}
        mode="outlined"
      />
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
      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Бүртгүүлэх
      </Button>
      <Button
        onPress={() => navigation.navigate("Login")}
        style={styles.textButton}
      >
        Буцах
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
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
