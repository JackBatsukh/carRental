import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChangePasswordScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Буцах</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Нууц үг солих</Text>

        <TextInput
          style={styles.input}
          placeholder="Хуучин нууц үг"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Шинэ нууц үг"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Шинэ нууц үг давтах"
          secureTextEntry
        />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Хадгалах</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 1000,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: "#4A90E2",
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  submitButton: {
    backgroundColor: "#4A90E2",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
});

export default ChangePasswordScreen;
