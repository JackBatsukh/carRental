import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Price = ({ car }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#FF6B6B", "#FF8E53"]} style={styles.button}>
        <Text style={styles.price}>{car?.price || "N/A"}</Text>
        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => navigation.navigate("Order")}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Захиалах</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    width: "95%",
    backgroundColor: "rgba(255,255,255,0.1)",
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 15,
  },
  price: {
    fontSize: 24,
    fontWeight: "900",
    color: "#fff",
    paddingLeft: 10,
  },
  orderButton: {
    backgroundColor: "rgba(255,255,255,0.95)",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  buttonText: {
    color: "#FF6B6B",
    fontWeight: "800",
    fontSize: 18,
  },
});

export default Price;
