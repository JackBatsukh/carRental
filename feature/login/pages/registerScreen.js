import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import api from "../../api/api";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [first, setFirst] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = async () => {
    try {
      await api.post("/user/signup", {
        firstName: name.split(" ")[0],
        lastName: first,
        email,
        password,
        phone,
      });
      Alert.alert("Бүртгэл амжилттай үүслээ!", response.data.message);
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert(
        "Алдаа",
        error.response?.data?.message 
        || "Бүртгүүлэхэд алдаа гарлаа",
        console.log(error)
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Бүртгүүлэх</Text>
      <TextInput
        label="Овог"
        value={first}
        onChangeText={setFirst}
        style={styles.input}
        mode="outlined"
      />
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
      <TextInput
        label="Утас"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        mode="outlined"
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
