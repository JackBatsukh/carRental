import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../api/api";

const UserInfoScreen = ({ navigation }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/user"); 
        setUser(response.data.users.find((u) => u.UserID === req.user.UserID)); 
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Буцах</Text>
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Хувийн мэдээлэл</Text>
        <View style={styles.infoCard}>
          <Text style={styles.label}>Иргэний үнэмлэх</Text>
          <Image
            source={{
              uri: user.identityImage
                ? `${API_URL}/files/${user.identityImage}`
                : "https://montsame.mn/files/642fd0610136b.jpeg",
            }}
            style={styles.documentImage}
          />
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.label}>Жолооны үнэмлэх</Text>
          <Image
            source={{
              uri: user.licenseImage
                ? `${API_URL}/files/${user.licenseImage}`
                : "https://vip76.mn/media/news/796x0/2012-10-23/22_2058.jpg",
            }}
            style={styles.documentImage}
          />
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.label}>Утас</Text>
          <Text style={styles.infoText}>{user.Phone || "+976 9911 2233"}</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.label}>И-мэйл</Text>
          <Text style={styles.infoText}>
            {user.Email || "example@email.com"}
          </Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Мэдээлэл засах</Text>
        </TouchableOpacity>
      </ScrollView>
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
  infoCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
  },
  documentImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginTop: 5,
  },
  editButton: {
    backgroundColor: "#4A90E2",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  editButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
});

export default UserInfoScreen;
