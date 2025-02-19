import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
const PriceOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>150000₮</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Order")}
        activeOpacity={0.4}>
        <Text style={styles.buttonText}>Захиалах</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 20,
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  priceContainer: {
    flex: 1,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#030303",
  },
  button: {
    backgroundColor: "#030303",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PriceOrder;
