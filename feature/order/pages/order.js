import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import RangeDatePicker from "../components/datePick";
import api from "../../api/api";

const Order = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { carID, price } = route.params || {}; 

  const [pickDate, setPickDate] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalCost, setTotalCost] = useState(price ? String(price) : ""); 
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [rentalID, setRentalID] = useState(null);

  const calculateTotalCost = (start, end) => {
    if (start && end) {
      const startDateObj = new Date(start);
      const endDateObj = new Date(end);
      const days = (endDateObj - startDateObj) / (1000 * 60 * 60 * 24);
      return days > 0 ? days * price : price; 
    }
    return price;
  };

  const handleDateRangeSelected = (range) => {
    setStartDate(range.start);
    setEndDate(range.end);
    setTotalCost(calculateTotalCost(range.start, range.end).toString());
    setPickDate(false);
  };

  const handleConfirmOrder = async () => {
    if (!carID || !startDate || !endDate || !totalCost) {
      alert("Бүх талбарыг бөглөнө үү!");
      return;
    }

    try {
      const rentalResponse = await api.post("/rental", {
        carID: parseInt(carID),
        startDate,
        endDate,
        totalCost: parseInt(totalCost),
      });

      const { rental } = rentalResponse.data;
      setRentalID(rental.rentalID);
      setOrderConfirmed(true);
    } catch (error) {
      alert("Захиалга үүсгэхэд алдаа гарлаа: " + error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>
        {orderConfirmed ? "Таны захиалга" : "Захиалга бөглөх"}
      </Text>

      {!orderConfirmed ? (
        <View style={styles.formContainer}>
          <Button
            title="Өдөр сонгох"
            onPress={() => setPickDate(true)}
            color="#007AFF"
          />

          {pickDate && (
            <RangeDatePicker
              onClose={() => setPickDate(false)}
              onSelectRange={handleDateRangeSelected}
            />
          )}

          <Text style={styles.label}>Нийт төлбөр (₮):</Text>
          <TextInput
            style={styles.input}
            value={totalCost}
            onChangeText={setTotalCost}
            placeholder="Нийт төлбөр"
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirmOrder}
          >
            <Text style={styles.confirmButtonText}>
              Захиалга баталгаажуулах
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.confirmationContainer}>
          <Ionicons name="checkmark-circle" size={60} color="#4CAF50" />
          <Text style={styles.successText}>
            Та машинаа амжилттай захиаллаа!
          </Text>
          <View style={styles.orderDetails}>
            <Text style={styles.detailText}>Үнэ: {totalCost}₮</Text>
            <Text style={styles.detailText}>Эхлэх: {startDate}</Text>
            <Text style={styles.detailText}>Дуусах: {endDate}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginTop: 60,
    marginBottom: 20,
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginTop: 15,
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
  },
  confirmButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  confirmationContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  successText: {
    fontSize: 20,
    color: "#4CAF50",
    marginVertical: 20,
    textAlign: "center",
  },
  orderDetails: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginTop: 20,
  },
  detailText: {
    fontSize: 18,
    color: "#666",
    marginVertical: 8,
  },
});

export default Order;
