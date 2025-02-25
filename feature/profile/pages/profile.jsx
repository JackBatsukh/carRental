import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://th.bing.com/th/id/OIP.1sG-LBeTyOm_C-ldu08GLAHaHa?rs=1&pid=ImgDetMain",
        }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Овог нэр</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Information")}
      >
        <Text style={styles.buttonText}>Хувийн мэдээлэл</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RentHistory")}
      >
        <Text style={styles.buttonText}>Түрээсийн түүх</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <Text style={styles.buttonText}>Нууц үг солих</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.logoutText}>Системээс гарах</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  button: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  logoutButton: {
    width: "90%",
    backgroundColor: "#222222",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
});

export default ProfileScreen;
