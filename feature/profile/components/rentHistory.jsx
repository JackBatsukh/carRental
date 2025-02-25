import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../api/api";

const RentHistoryScreen = ({ navigation }) => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const response = await api.get("/rental/user");
        setRentals(response.data.rentals);
      } catch (error) {
        console.error("Error fetching rentals:", error);
      }
    };
    fetchRentals();
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
        <Text style={styles.sectionTitle}>Түрээсийн түүх</Text>
        {rentals.map((rental) => (
          <View key={rental.rentalID} style={styles.historyCard}>
            <Text style={styles.historyText}>
              {rental.car.brandName} {rental.car.modelName}
            </Text>
            <Text style={styles.historySubText}>
              Огноо: {new Date(rental.startDate).toLocaleDateString()}
            </Text>
            <Text style={styles.historySubText}>
              Төлбөр: {rental.totalCost}₮
            </Text>
          </View>
        ))}
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
  historyCard: {
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
  historyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  historySubText: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});

export default RentHistoryScreen;
